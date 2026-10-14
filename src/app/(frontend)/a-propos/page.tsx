import type { Metadata } from 'next'
import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import { images } from '@/lib/images'
import { company } from '@/lib/site'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'À propos | Performance Transmission, fiduciaire à Tolochenaz',
  description:
    'Performance Transmission Sàrl est une fiduciaire basée à Tolochenaz (VD). Un suivi personnalisé pour les indépendants et les PME de Suisse romande.',
  alternates: { canonical: '/a-propos' },
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link> / À propos
          </nav>
          <h1>Une fiduciaire de proximité, entre Morges et Rolle</h1>
          <p className="lead">
            {company.legalName} est basée à {company.city}, dans le canton de Vaud. Nous accompagnons les
            indépendants et les dirigeants de PME dans leurs obligations comptables et fiscales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="split-media">
            <Image src={images.vines.src} alt={images.vines.alt} width={900} height={1125} sizes="(max-width: 860px) 100vw, 40vw" />
          </div>
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>Notre mission</h2>
            <p>
              Vous libérer de l’administratif pour que vous puissiez vous concentrer sur votre activité. Une comptabilité
              bien tenue, c’est une entreprise qu’on pilote avec des chiffres à jour, pas des surprises en fin d’année.
            </p>
            <h2>Notre façon de travailler</h2>
            <p>
              Chaque client a un interlocuteur unique qui connaît son dossier et son secteur. Nous utilisons des outils
              numériques pour gagner du temps sur la saisie, et nous gardons ce temps pour ce qui compte : vous
              conseiller.
            </p>
            <p>
              Vous pouvez nous transmettre vos pièces par email ou par photo, et nous joindre par téléphone, email ou
              WhatsApp. Si vous préférez venir au bureau avec votre classeur, c’est aussi possible.
            </p>
            <h2>Où nous trouver</h2>
            <p>
              {company.street}
              <br />
              {company.postalCode} {company.city}
              <br />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${company.legalName}, ${company.street}, ${company.postalCode} ${company.city}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvrir dans Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
