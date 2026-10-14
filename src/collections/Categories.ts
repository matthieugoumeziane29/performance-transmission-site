import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Catégorie', plural: 'Catégories' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [{ name: 'title', label: 'Nom', type: 'text', required: true, unique: true }],
}
