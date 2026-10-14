import type { CollectionConfig, FieldHook } from 'payload'
import { revalidatePath } from 'next/cache'

const slugify = (v: string) =>
  v
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const formatSlug: FieldHook = ({ value, data }) => {
  if (typeof value === 'string' && value.trim()) return slugify(value)
  if (data?.title) return slugify(data.title)
  return value
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Article', plural: 'Articles' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', '_status'],
    description: 'Les articles du blog. Enregistrez en brouillon, puis « Publier » pour les mettre en ligne.',
  },
  versions: { drafts: true },
  access: {
    read: ({ req }) => (req.user ? true : { _status: { equals: 'published' } }),
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        try {
          revalidatePath('/blog')
          revalidatePath(`/blog/${doc.slug}`)
          revalidatePath('/sitemap.xml')
        } catch {
          // hors contexte Next (scripts) : rien à faire
        }
        return doc
      },
    ],
  },
  fields: [
    { name: 'title', label: 'Titre', type: 'text', required: true },
    {
      name: 'excerpt',
      label: 'Résumé',
      type: 'textarea',
      required: true,
      maxLength: 300,
      admin: { description: '1 à 2 phrases. Affiché dans la liste du blog.' },
    },
    { name: 'cover', label: 'Image de couverture', type: 'upload', relationTo: 'media' },
    { name: 'content', label: 'Contenu', type: 'richText', required: true },
    {
      name: 'slug',
      label: 'Adresse (URL)',
      type: 'text',
      unique: true,
      index: true,
      admin: { position: 'sidebar', description: 'Généré depuis le titre si vide. Ne plus changer après publication.' },
      hooks: { beforeValidate: [formatSlug] },
    },
    {
      name: 'publishedAt',
      label: 'Date de publication',
      type: 'date',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd.MM.yyyy' } },
      hooks: {
        beforeChange: [({ value, siblingData }) => value || (siblingData._status === 'published' ? new Date() : value)],
      },
    },
    { name: 'category', label: 'Catégorie', type: 'relationship', relationTo: 'categories', admin: { position: 'sidebar' } },
    {
      type: 'collapsible',
      label: 'Référencement (SEO)',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'metaTitle',
          label: 'Titre Google',
          type: 'text',
          maxLength: 60,
          admin: { description: 'Max. 60 caractères. Vide = titre de l’article.' },
        },
        {
          name: 'metaDescription',
          label: 'Description Google',
          type: 'textarea',
          maxLength: 160,
          admin: { description: 'Max. 155 caractères. Vide = résumé.' },
        },
      ],
    },
  ],
}
