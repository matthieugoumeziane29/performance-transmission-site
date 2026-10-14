// Photos génériques (Unsplash, licence libre). Pour en changer : remplacer l'identifiant.
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75`

export const images = {
  hero: { src: u('1668719771152-3ce06e932f46'), alt: 'Vignes du Lavaux surplombant le lac Léman' },
  lake: { src: u('1663616842575-c24b40700e0a'), alt: 'Village au bord du lac Léman' },
  vines: { src: u('1596702510623-b99dea622fec'), alt: 'Rangées de vignes devant le lac' },
  sunset: { src: u('1559595387-a419507223de'), alt: 'Coucher de soleil sur les vignes et le lac' },
  comptabilite: { src: u('1762427354136-404f0c16dcd6'), alt: 'Bureau avec calculatrice, carnet et crayon' },
  salaires: { src: u('1762427354051-a9bdb181ae3b'), alt: 'Classeurs, graphiques et calculatrice sur un bureau' },
  fiscalite: { src: u('1762318986860-a7b18dd0da02'), alt: 'Calculatrice, lunettes et stylos sur un bureau blanc' },
  creation: { src: u('1781268034959-8706486c22a4'), alt: 'Entrepreneuse travaillant sur ses documents au bureau' },
}

export type SiteImage = { src: string; alt: string }
