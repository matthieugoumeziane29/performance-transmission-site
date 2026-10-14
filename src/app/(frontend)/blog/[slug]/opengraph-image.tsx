import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/posts'

export const alt = 'Article du blog Performance Transmission'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function PostOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)
  const title = post?.title || 'Conseils fiduciaires'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0f0080',
          color: '#fff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 30, opacity: 0.85 }}>Blog Performance Transmission</div>
        <div style={{ fontSize: title.length > 60 ? 58 : 70, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>Fiduciaire à Tolochenaz, canton de Vaud</div>
      </div>
    ),
    size,
  )
}
