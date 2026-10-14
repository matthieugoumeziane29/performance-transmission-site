import { APIError, type CollectionConfig } from 'payload'
import { company } from '../lib/site'

// Demandes envoyées depuis le formulaire de contact.
// Création publique (formulaire), lecture réservée aux utilisateurs connectés.
export const Demandes: CollectionConfig = {
  slug: 'demandes',
  labels: { singular: 'Demande de contact', plural: 'Demandes de contact' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject', 'createdAt', 'status'],
    description: 'Messages reçus via le formulaire du site.',
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    beforeValidate: [
      ({ data, operation, req }) => {
        // Anti-spam : champ caché rempli = robot
        if (operation === 'create' && !req.user && data?.website) {
          throw new APIError('Demande refusée', 400)
        }
        if (data) delete data.website
        return data
      },
    ],
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create' || !process.env.SMTP_HOST) return doc
        try {
          await req.payload.sendEmail({
            to: process.env.CONTACT_TO || company.email,
            replyTo: doc.email,
            subject: `Nouvelle demande du site : ${doc.name}`,
            text: [
              `Nom : ${doc.name}`,
              `Email : ${doc.email}`,
              `Téléphone : ${doc.phone || '-'}`,
              `Forme juridique : ${doc.subject || '-'}`,
              '',
              doc.message,
            ].join('\n'),
          })
        } catch (err) {
          req.payload.logger.error({ err }, 'Envoi de l’email de notification impossible')
        }
        return doc
      },
    ],
  },
  fields: [
    { name: 'name', label: 'Nom', type: 'text', required: true, maxLength: 120 },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Téléphone', type: 'text', maxLength: 40 },
    { name: 'subject', label: 'Forme juridique', type: 'text', maxLength: 80 },
    { name: 'message', label: 'Message', type: 'textarea', required: true, maxLength: 5000 },
    { name: 'website', type: 'text', admin: { hidden: true } },
    {
      name: 'status',
      label: 'Statut',
      type: 'select',
      defaultValue: 'nouveau',
      options: [
        { label: 'Nouveau', value: 'nouveau' },
        { label: 'Traité', value: 'traite' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
