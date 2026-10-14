import { Img as Image } from '@/components/Img'
import Link from 'next/link'
import { company } from '@/lib/site'
import { images } from '@/lib/images'

export function CtaBand({
  title = 'Parlons de votre situation',
  text = 'Le premier entretien est gratuit et sans engagement. Vous repartez avec une vision claire de ce dont vous avez besoin, et de ce que ça coûte.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="bg">
        <Image src={images.sunset.src} alt="" fill sizes="100vw" />
      </div>
      <div className="wrap">
        <h2 id="cta-title">{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <Link href="/contact" className="btn btn--light">
            Demander un premier entretien
          </Link>
          <a href={company.whatsapp} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
            Écrire sur WhatsApp
          </a>
          <a href={company.phoneHref} className="btn btn--ghost">
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
