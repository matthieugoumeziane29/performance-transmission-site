import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Image', plural: 'Images' },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Texte alternatif',
      type: 'text',
      required: true,
      admin: { description: 'Décrivez l’image en quelques mots (utile pour Google et l’accessibilité).' },
    },
  ],
  upload: {
    // Sur Railway : monter un volume sur ce dossier (MEDIA_DIR), sinon les images sont perdues à chaque déploiement.
    staticDir: process.env.MEDIA_DIR || path.resolve(process.cwd(), 'media'),
    // Pas de SVG (peut contenir du code) : uniquement des formats photo.
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    imageSizes: [
      { name: 'card', width: 800, height: 500, position: 'centre' },
      { name: 'wide', width: 1600, height: 900, position: 'centre' },
    ],
    formatOptions: { format: 'webp', options: { quality: 82 } },
  },
}
