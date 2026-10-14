import Link from 'next/link'
import { company } from '@/lib/site'
import { services } from '@/lib/services'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{company.legalName}</p>
            <p>
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </p>
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Le cabinet</h2>
            <ul>
              <li>
                <Link href="/a-propos">À propos</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Informations</h2>
            <ul>
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/politique-confidentialite">Confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">
          © {new Date().getFullYear()} {company.legalName}. Fiduciaire à {company.city}, canton de Vaud.
        </p>
      </div>
    </footer>
  )
}
