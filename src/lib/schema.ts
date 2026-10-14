import { company, SITE_URL } from './site'
import { services } from './services'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': `${SITE_URL}/#organisation`,
  name: company.legalName,
  alternateName: company.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressRegion: company.regionCode,
    addressCountry: company.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
  areaServed: company.areaServed.map((name) => ({ '@type': 'Place', name })),
  knowsLanguage: 'fr',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services fiduciaires',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/services/${s.slug}` },
    })),
  },
}

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
})
