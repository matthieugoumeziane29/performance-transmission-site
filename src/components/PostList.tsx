import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import type { Post } from '@/payload-types'
import { categoryOf, coverOf, formatDate } from '@/lib/posts'
import { images } from '@/lib/images'

export function PostList({ posts, headingLevel = 3 }: { posts: Post[]; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <ul className="post-list">
      {posts.map((post) => {
        const cover = coverOf(post)
        const cat = categoryOf(post)
        const src = cover?.sizes?.card?.url || cover?.url || images.lake.src
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <Image src={src} alt={cover?.alt || ''} width={800} height={500} sizes="(max-width: 600px) 100vw, 33vw" />
              <p className="meta">
                {cat ? `${cat.title}, ` : ''}
                {formatDate(post.publishedAt)}
              </p>
              <H style={{ fontSize: '1.3rem' }}>{post.title}</H>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
