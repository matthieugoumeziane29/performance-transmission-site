import { notFound } from 'next/navigation'

// Toute URL inconnue renvoie une vraie 404 (et non la page d'accueil).
export default function CatchAll() {
  notFound()
}
