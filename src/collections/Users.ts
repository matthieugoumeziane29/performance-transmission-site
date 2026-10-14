import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Utilisateur', plural: 'Utilisateurs' },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [{ name: 'name', label: 'Nom', type: 'text' }],
}
