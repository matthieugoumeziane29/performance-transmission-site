import { NextResponse, type NextRequest } from 'next/server'

// Une fois le domaine en ligne (ALLOW_INDEXING=true), toute autre adresse
// (ex. xxx.up.railway.app, www.) redirige en 301 vers le domaine officiel.
export function proxy(req: NextRequest) {
  const site = process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.ALLOW_INDEXING !== 'true' || !site) return NextResponse.next()

  const target = new URL(site)
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
  if (host && host !== target.host) {
    const url = new URL(req.nextUrl.pathname + req.nextUrl.search, target)
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/|api/).*)'],
}
