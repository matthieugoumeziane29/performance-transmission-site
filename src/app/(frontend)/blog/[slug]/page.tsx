import type { Metadata } from 'next'
import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { categoryOf, coverOf, formatDate, getPostBySlug } from '@/lib/posts'
import { company, SITE_URL } from '@/lib/site'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumb } from '@/lib/schema'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)
  if (!post) return { title: 'Article introuvable | Performance Transmission', robots: { index: false } }
  const cover = coverOf(post)
  const title = post.metaTitle || `${post.title} | Performance Transmission`
  const description = post.metaDescription || post.excerpt
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title,
      description,
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const cover = coverOf(post)
  const cat = categoryOf(post)

  return (
    <>
      <article>
        <header className="page-hero">
          <div className="wrap narrow">
            <nav className="crumbs" aria-label="Fil d’Ariane">
              <Link href="/">Accueil</Link> / <Link href="/blog">Blog</Link>
            </nav>
            <p className="muted" style={{ marginBottom: 12 }}>
              {cat ? `${cat.title}, ` : ''}
              {post.publishedAt && <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
          </div>
        </header>
        <div className="section" style={{ paddingTop: 48 }}>
          <div className="wrap narrow">
            {cover?.url && (
              <Image
                className="article-cover"
                src={cover.sizes?.wide?.url || cover.url}
                alt={cover.alt}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 760px"
                priority
              />
            )}
            <div className="prose">
              <RichText data={post.content} />
            </div>
            <p className="muted" style={{ marginTop: 48, fontSize: '1rem' }}>
              Cet article donne des informations générales. Pour votre situation précise,{' '}
              <Link href="/contact">demandez-nous conseil</Link>.
            </p>
          </div>
        </div>
      </article>
      <CtaBand title="Une question sur ce sujet ?" />
      <JsonLd
        data={[
          breadcrumb([
            { name: 'Accueil', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            image: cover?.url ? `${SITE_URL}${cover.url}` : undefined,
            inLanguage: 'fr-CH',
            author: { '@type': 'Organization', name: company.legalName, url: SITE_URL },
            publisher: { '@id': `${SITE_URL}/#organisation` },
          },
        ]}
      />
    </>
  )
}
