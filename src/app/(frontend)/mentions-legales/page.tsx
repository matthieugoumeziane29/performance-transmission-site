import type { Metadata } from 'next'
import { company, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales | Performance Transmission',
  description: 'Mentions légales du site de Performance Transmission Sàrl, fiduciaire à Tolochenaz.',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Mentions légales</h1>
        <h2>Éditeur du site</h2>
        <p>
          {company.legalName}
          <br />
          {company.street}, {company.postalCode} {company.city}, Suisse
          <br />
          Téléphone : <a href={company.phoneHref}>{company.phone}</a>
          <br />
          Email : <a href={`mailto:${company.email}`}>{company.email}</a>
          {company.ide && (
            <>
              <br />
              Numéro IDE : {company.ide}
            </>
          )}
        </p>
        <h2>Contenu</h2>
        <p>
          Les informations publiées sur {SITE_URL.replace('https://', '')} sont fournies à titre indicatif. Elles ne
          remplacent pas un conseil personnalisé. {company.legalName} ne peut être tenue responsable de décisions prises
          sur la seule base de ces informations.
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, le logo et la mise en page de ce site appartiennent à {company.legalName}. Toute reproduction sans
          autorisation écrite est interdite. Les photographies proviennent de la banque d’images Unsplash et sont
          utilisées selon sa licence.
        </p>
        <h2>Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. {company.legalName} n’a aucun contrôle sur leur contenu
          et décline toute responsabilité à leur égard.
        </p>
        <h2>Droit applicable</h2>
        <p>Le présent site est soumis au droit suisse.</p>
      </div>
    </section>
  )
}
