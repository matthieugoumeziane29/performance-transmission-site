import { getPayload } from 'payload'
import config from '@payload-config'
import type { Post, Media, Category } from '@/payload-types'

export async function getLatestPosts(limit = 12, page = 1) {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'posts',
      where: { _status: { equals: 'published' } },
      sort: '-publishedAt',
      limit,
      page,
      depth: 1,
    })
    return res
  } catch (err) {
    console.error('Lecture des articles impossible', err)
    return null
  }
}

export async function getPostBySlug(slug: string, draft = false) {
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'posts',
    where: draft ? { slug: { equals: slug } } : { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
    draft,
    limit: 1,
    depth: 1,
  })
  return res.docs[0] ?? null
}

export const coverOf = (post: Post): Media | null =>
  post.cover && typeof post.cover === 'object' ? (post.cover as Media) : null

export const categoryOf = (post: Post): Category | null =>
  post.category && typeof post.category === 'object' ? (post.category as Category) : null

export const formatDate = (d?: string | null) =>
  d ? new Intl.DateTimeFormat('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(d)) : ''
