'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { NavLink } from '@/types'

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight
      setScrolled(window.scrollY > heroHeight * 0.6)

      const doc = document.documentElement
      const scrollPct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPct}%`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: '0%',
          background: 'linear-gradient(90deg,#2e76c2,#7fc4e8)',
          zIndex: 90,
          transition: 'width 80ms linear',
        }}
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          background: scrolled ? '#ffffff' : 'rgba(11,28,51,0.28)',
          backdropFilter: scrolled ? 'none' : 'blur(14px) saturate(140%)',
          borderBottom: scrolled ? '1px solid #e4e7eb' : '1px solid rgba(255,255,255,0.12)',
          boxShadow: scrolled ? '0 1px 24px rgba(11,28,51,0.08)' : 'none',
          transition: 'background 400ms ease, border-color 400ms ease, box-shadow 400ms ease',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 44px',
            height: '82px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={scrolled ? '/logo-dark.svg' : '/logo-white.svg'}
              alt="Metron Engineering"
              width={160}
              height={32}
              style={{ height: '32px', width: 'auto', display: 'block' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mtr-nav-link"
                style={{
                  padding: '9px 14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-archivo)',
                  letterSpacing: '0.01em',
                  color: scrolled ? '#0b1c33' : 'rgba(255,255,255,0.88)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mtr-nav-cta"
              style={{
                position: 'relative',
                overflow: 'hidden',
                marginLeft: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                height: '44px',
                padding: '0 24px',
                background: '#2e76c2',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-archivo)',
                letterSpacing: '0.02em',
                clipPath: 'polygon(0 0,100% 0,100% 68%,calc(100% - 12px) 100%,0 100%)',
              }}
            >
              <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,transparent,rgba(255,255,255,0.34),transparent)', animation: 'mtrSweep 3.6s linear infinite', pointerEvents: 'none' }} />
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: scrolled ? '#0b1c33' : '#fff',
            }}
            className="show-mobile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: '#ffffff',
              borderTop: '1px solid #e4e7eb',
              padding: '16px 24px 24px',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-archivo)',
                  color: '#0b1c33',
                  borderBottom: '1px solid #f0f2f4',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                marginTop: '16px',
                padding: '14px 24px',
                background: '#2e76c2',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 700,
                fontFamily: 'var(--font-archivo)',
                textAlign: 'center',
              }}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
