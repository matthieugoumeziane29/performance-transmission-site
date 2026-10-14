import type { Metadata } from 'next'
import { company } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Performance Transmission',
  description: 'Comment Performance Transmission Sàrl traite vos données personnelles, conformément à la nLPD.',
  alternates: { canonical: '/politique-confidentialite' },
}

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Politique de confidentialité</h1>
        <p>
          {company.legalName} attache une grande importance à la protection de vos données. Cette page explique quelles
          données nous collectons via ce site et comment nous les utilisons, conformément à la loi fédérale sur la
          protection des données (nLPD).
        </p>
        <h2>Responsable du traitement</h2>
        <p>
          {company.legalName}, {company.street}, {company.postalCode} {company.city}.
          <br />
          Contact : <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <h2>Données collectées</h2>
        <p>
          Lorsque vous remplissez le formulaire de contact, nous recevons votre nom, votre email, votre téléphone si vous
          le donnez, la forme juridique de votre entreprise et votre message. Ces données servent uniquement à répondre
          à votre demande et, si vous devenez client, à gérer notre relation.
        </p>
        <p>
          Le serveur qui héberge ce site enregistre des données techniques (adresse IP, date et heure, pages consultées)
          à des fins de sécurité et de bon fonctionnement.
        </p>
        <h2>Cookies</h2>
        <p>
          Ce site n’utilise pas de cookies publicitaires ni de suivi. Seuls des cookies techniques peuvent être utilisés
          pour l’espace d’administration.
        </p>
        <h2>Hébergement et transmission</h2>
        <p>
          Le site est hébergé par un prestataire spécialisé, dont les serveurs peuvent se trouver hors de Suisse. Vos
          données ne sont ni vendues ni transmises à des tiers à des fins commerciales.
        </p>
        <h2>Durée de conservation</h2>
        <p>
          Les demandes de contact sont conservées le temps nécessaire pour y répondre et assurer le suivi, puis
          supprimées si aucune relation client n’en découle.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander à tout moment l’accès à vos données, leur rectification ou leur suppression en écrivant à{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </section>
  )
}
