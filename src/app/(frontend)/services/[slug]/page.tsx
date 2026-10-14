import type { Metadata } from 'next'
import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, services } from '@/lib/services'
import { company } from '@/lib/site'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumb } from '@/lib/schema'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, images: [{ url: s.image.src + '&w=1200&h=630' }] },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const others = services.filter((o) => o.slug !== s.slug)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / {s.title}
          </nav>
          <h1>{s.title}</h1>
          <p className="lead">{s.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap service-layout">
          <div>
            <div className="figure">
              <Image src={s.image.src} alt={s.image.alt} width={1200} height={675} sizes="(max-width: 900px) 100vw, 760px" priority />
            </div>
            <h2>Ce qui est inclus</h2>
            <ul className="checklist">
              {s.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>Pour qui</h2>
            <p style={{ marginBottom: 48 }}>{s.forWhom}</p>

            <h2>Questions fréquentes</h2>
            <div className="faq">
              {s.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="aside-box" aria-label="Prendre contact">
            <h2>Un premier entretien gratuit</h2>
            <p className="muted">On regarde votre situation ensemble et vous recevez une offre écrite.</p>
            <Link href={`/contact?service=${s.slug}`} className="btn">
              Demander un entretien
            </Link>
            <a href={company.whatsapp} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
              Écrire sur WhatsApp
            </a>
            <ul>
              <li>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="autres">
        <div className="wrap">
          <h2 id="autres" style={{ marginBottom: 32 }}>
            Nos autres services
          </h2>
          <ul className="other-services">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`}>
                  <h3>{o.title}</h3>
                  <p>{o.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumb([
            { name: 'Accueil', path: '/' },
            { name: 'Services', path: '/services' },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: s.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
    </>
  )
}
