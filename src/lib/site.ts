// Informations de l'entreprise — une seule source de vérité pour tout le site.
// Modifier ici = modifié partout (header, footer, contact, données structurées Google).

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://performancetransmission.ch').replace(/\/$/, '')

export const company = {
  name: 'Performance Transmission',
  legalName: 'Performance Transmission Sàrl',
  tagline: 'Fiduciaire à Tolochenaz',
  street: 'Chemin de la Musardière 5',
  postalCode: '1131',
  city: 'Tolochenaz',
  region: 'Vaud',
  regionCode: 'VD',
  country: 'CH',
  // Numéro IDE du registre du commerce (ex. CHE-123.456.789). À compléter.
  ide: '',
  // ⚠️ Un seul numéro partout (cohérence pour le référencement local).
  phone: '+41 79 961 60 33',
  phoneHref: 'tel:+41799616033',
  email: 'compta@performancetransmission.ch',
  whatsapp: 'https://wa.link/atadcl',
  geo: { lat: 46.5016, lng: 6.4746 },
  areaServed: ['Tolochenaz', 'Morges', 'Rolle', 'Nyon', 'Lausanne', 'Canton de Vaud', 'Suisse romande'],
}

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const sectors = [
  'cabinets médicaux et thérapeutes',
  'architectes et ingénieurs',
  'indépendants et freelances',
  'restaurants et hôtels',
  'sociétés de conseil',
  'agences marketing',
  'startups et SaaS',
  'commerces et e-commerce',
  'artisans et entreprises du bâtiment',
  'régies et immobilier',
]
