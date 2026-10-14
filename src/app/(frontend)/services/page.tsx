import type { Metadata } from 'next'
import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import { services } from '@/lib/services'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumb } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Services fiduciaires à Tolochenaz | Performance Transmission',
  description:
    'Comptabilité, TVA, salaires, fiscalité et création d’entreprise pour indépendants, Sàrl et SA dans le canton de Vaud.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link> / Services
          </nav>
          <h1>Nos services</h1>
          <p className="lead">
            Tout ce qu’une entreprise doit gérer côté chiffres, réuni chez un seul interlocuteur. Choisissez un domaine
            pour voir le détail.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ul className="service-list">
            {services.map((s) => (
              <li key={s.slug} className="service-row">
                <Link href={`/services/${s.slug}`}>
                  <Image src={s.image.src} alt="" width={440} height={275} sizes="220px" />
                  <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25em' }}>{s.title}</h2>
                    <p>{s.short}</p>
                  </div>
                  <span className="go">En savoir plus</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Vous ne savez pas par où commencer ?" />
      <JsonLd
        data={breadcrumb([
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
    </>
  )
}
