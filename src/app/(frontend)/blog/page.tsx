import type { Metadata } from 'next'
import Link from 'next/link'
import { getLatestPosts } from '@/lib/posts'
import { PostList } from '@/components/PostList'
import { CtaBand } from '@/components/CtaBand'

export const dynamic = 'force-dynamic'

type Props = { searchParams: Promise<{ page?: string }> }

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { page } = await searchParams
  const n = Number(page) > 1 ? Number(page) : 1
  return {
    title: `Blog fiduciaire : TVA, impôts et salaires${n > 1 ? ` (page ${n})` : ''} | Performance Transmission`,
    description:
      'Conseils pratiques sur la comptabilité, la TVA, les impôts et les salaires pour indépendants et PME du canton de Vaud.',
    alternates: { canonical: n > 1 ? `/blog?page=${n}` : '/blog' },
  }
}

export default async function BlogPage({ searchParams }: Props) {
  const { page } = await searchParams
  const n = Number(page) > 1 ? Number(page) : 1
  const res = await getLatestPosts(12, n)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link> / Blog
          </nav>
          <h1>Conseils et actualités</h1>
          <p className="lead">TVA, impôts, salaires, création d’entreprise : ce qu’il faut savoir, expliqué simplement.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {res && res.docs.length > 0 ? (
            <>
              <PostList posts={res.docs} headingLevel={2} />
              {res.totalPages > 1 && (
                <nav className="btn-row" style={{ marginTop: 48 }} aria-label="Pagination">
                  {res.hasPrevPage && (
                    <Link className="btn btn--ghost" href={res.prevPage === 1 ? '/blog' : `/blog?page=${res.prevPage}`}>
                      Articles plus récents
                    </Link>
                  )}
                  {res.hasNextPage && (
                    <Link className="btn btn--ghost" href={`/blog?page=${res.nextPage}`}>
                      Articles plus anciens
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <div className="empty">
              <h2 style={{ fontSize: '1.4rem' }}>Les premiers articles arrivent bientôt</h2>
              <p>En attendant, posez-nous directement votre question.</p>
              <Link href="/contact" className="btn">
                Poser une question
              </Link>
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
