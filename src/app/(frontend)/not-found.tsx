import Link from 'next/link'

export const metadata = {
  title: 'Page introuvable | Performance Transmission',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap narrow">
        <h1>Cette page n’existe pas</h1>
        <p className="lead">Le lien est peut-être ancien ou mal recopié. Voici où aller.</p>
        <div className="btn-row" style={{ marginTop: 24 }}>
          <Link href="/" className="btn">
            Retour à l’accueil
          </Link>
          <Link href="/services" className="btn btn--ghost">
            Voir nos services
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
