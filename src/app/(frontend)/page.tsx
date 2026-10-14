import type { Metadata } from 'next'
import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import { images } from '@/lib/images'
import { services } from '@/lib/services'
import { company, sectors } from '@/lib/site'
import { getLatestPosts } from '@/lib/posts'
import { CtaBand } from '@/components/CtaBand'
import { PostList } from '@/components/PostList'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Fiduciaire à Tolochenaz (VD) | Performance Transmission',
  description:
    'Fiduciaire à Tolochenaz près de Morges : comptabilité, TVA, salaires et fiscalité pour indépendants, Sàrl et SA. Premier entretien gratuit.',
  alternates: { canonical: '/' },
}

const paths = [
  {
    title: 'Je lance mon activité',
    text: 'Raison individuelle, Sàrl ou SA ? On choisit la bonne forme et on s’occupe des démarches.',
    href: '/services/creation-entreprise',
    link: 'Créer mon entreprise',
  },
  {
    title: 'Je veux déléguer ma comptabilité',
    text: 'Vous envoyez vos pièces, on tient vos comptes, la TVA et le bouclement à jour.',
    href: '/services/comptabilite',
    link: 'Voir la comptabilité',
  },
  {
    title: 'J’ai des employés',
    text: 'Fiches de salaire, AVS, LPP et certificats de salaire, sans erreur et dans les délais.',
    href: '/services/salaires',
    link: 'Voir les salaires',
  },
]

const reasons = [
  {
    title: 'Un seul interlocuteur',
    text: 'La même personne suit votre dossier toute l’année. Vous n’expliquez pas votre situation deux fois.',
  },
  {
    title: 'Des réponses rapides',
    text: 'Une question sur une facture ou un délai ? Vous avez une réponse dans la journée, pas dans trois semaines.',
  },
  {
    title: 'Des prix connus d’avance',
    text: 'Vous recevez une offre écrite avant de commencer. Pas de facture surprise en fin d’année.',
  },
  {
    title: 'Des outils modernes',
    text: 'Pièces envoyées par photo ou par email, échanges par WhatsApp si vous préférez. Moins de papier, moins d’allers-retours.',
  },
]

export default async function HomePage() {
  const posts = await getLatestPosts(3)

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" />
        </div>
        <div className="wrap">
          <div className="hero-panel">
            <h1>Votre fiduciaire à Tolochenaz</h1>
            <p className="lead">
              Vous vous occupez de votre métier, nous de vos chiffres : comptabilité, TVA, salaires et impôts pour
              indépendants, Sàrl et SA dans le canton de Vaud.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn">
                Demander un premier entretien
              </Link>
              <Link href="/services" className="btn btn--ghost">
                Voir nos services
              </Link>
            </div>
            <p className="hero-note">Premier entretien gratuit et sans engagement.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="situation">
        <div className="wrap">
          <div className="section-head">
            <h2 id="situation">Où en êtes-vous ?</h2>
            <p>Choisissez votre situation, on vous montre ce qu’on peut faire pour vous.</p>
          </div>
          <div className="paths">
            {paths.map((p) => (
              <Link key={p.href} href={p.href} className="path">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span>{p.link}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="services">
        <div className="wrap">
          <div className="section-head">
            <h2 id="services">Ce que nous faisons pour vous</h2>
            <p>Quatre domaines, un seul interlocuteur.</p>
          </div>
          <ul className="service-list">
            {services.map((s) => (
              <li key={s.slug} className="service-row">
                <Link href={`/services/${s.slug}`}>
                  <Image src={s.image.src} alt="" width={440} height={275} sizes="220px" />
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                  </div>
                  <span className="go">En savoir plus</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="etapes">
        <div className="wrap">
          <div className="section-head">
            <h2 id="etapes">Comment ça se passe</h2>
            <p>De votre premier message au premier bouclement, voici les étapes.</p>
          </div>
          <ol className="steps">
            <li>
              <h3>Premier entretien</h3>
              <p>30 minutes, gratuit, à notre bureau, chez vous ou en visio. On fait le point sur votre situation.</p>
            </li>
            <li>
              <h3>Offre écrite</h3>
              <p>Vous recevez une offre détaillée sous 48 heures. Vous savez ce qui est inclus et ce que ça coûte.</p>
            </li>
            <li>
              <h3>On s’occupe de tout</h3>
              <p>Vous nous transmettez vos pièces, nous gérons les échéances et vous tenons informé.</p>
            </li>
          </ol>
          <div className="btn-row" style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn">
              Réserver mon premier entretien
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="pourquoi">
        <div className="wrap split">
          <div className="split-media">
            <Image src={images.lake.src} alt={images.lake.alt} width={900} height={1125} sizes="(max-width: 860px) 100vw, 40vw" />
          </div>
          <div>
            <h2 id="pourquoi">Pourquoi travailler avec nous</h2>
            <div className="reasons">
              {reasons.map((r) => (
                <div key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="secteurs">
        <div className="wrap">
          <h2 id="secteurs">Des clients de tous les secteurs</h2>
          <p className="sectors">
            Nous accompagnons notamment des {sectors.slice(0, -1).join(', ')} et des {sectors[sectors.length - 1]}, de{' '}
            {company.city} à Morges, Rolle, Nyon et Lausanne. Votre activité n’est pas dans la liste ?{' '}
            <Link href="/contact">Parlons-en</Link>.
          </p>
        </div>
      </section>

      {posts && posts.docs.length > 0 && (
        <section className="section section--mist" aria-labelledby="blog">
          <div className="wrap">
            <div className="section-head">
              <h2 id="blog">Conseils et actualités</h2>
              <p>Fiscalité, TVA, salaires : ce qu’il faut savoir, expliqué simplement.</p>
            </div>
            <PostList posts={posts.docs} />
            <p style={{ marginTop: 32 }}>
              <Link href="/blog">Tous les articles</Link>
            </p>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
