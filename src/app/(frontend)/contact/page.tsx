import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { company } from '@/lib/site'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Performance Transmission, fiduciaire à Tolochenaz',
  description:
    'Contactez Performance Transmission à Tolochenaz pour un premier entretien gratuit : formulaire, téléphone, email ou WhatsApp.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link> / Contact
          </nav>
          <h1>Demander un premier entretien</h1>
          <p className="lead">
            Décrivez votre situation en quelques lignes. Nous vous répondons pour fixer un rendez-vous, gratuit et sans
            engagement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <Suspense>
            <ContactForm />
          </Suspense>

          <aside className="contact-card" aria-label="Coordonnées">
            <h2 style={{ fontSize: '1.5rem' }}>Vous préférez écrire ou appeler ?</h2>
            <a href={company.whatsapp} className="btn" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              Écrire sur WhatsApp
            </a>
            <dl>
              <dt>Téléphone</dt>
              <dd>
                <a href={company.phoneHref}>{company.phone}</a>
              </dd>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
              <dt>Adresse</dt>
              <dd>
                {company.legalName}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  )
}
