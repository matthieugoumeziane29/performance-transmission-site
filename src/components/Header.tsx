'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { nav } from '@/lib/site'

export function Header() {
  const pathname = usePathname()
  const menu = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (menu.current) menu.current.open = false
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Performance Transmission, accueil">
          <img src="/mark.svg" alt="" width={40} height={37} />
          <span>
            Performance Transmission
            <small>Fiduciaire à Tolochenaz</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn">
            Prendre rendez-vous
          </Link>
        </nav>

        <details className="mobile-nav" ref={menu}>
          <summary>Menu</summary>
          <nav className="mobile-panel" aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn">
              Prendre rendez-vous
            </Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
