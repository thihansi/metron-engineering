import Link from 'next/link'
import Image from 'next/image'
import type { NavLink } from '@/types'

const DEFAULT_COMPANY: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Products', href: '/products' },
]

const DEFAULT_DISCIPLINES: NavLink[] = [
  { label: 'Structural', href: '/services' },
  { label: 'Mechanical', href: '/services' },
  { label: 'FEA analysis', href: '/services' },
  { label: 'Steel detailing', href: '/services' },
]

export interface FooterProps {
  email?: string
  address?: string
  footerBlurb?: string
  copyrightLine?: string
  footerNote?: string
  companyLinks?: NavLink[]
  disciplineLinks?: NavLink[]
  quoteLabel?: string
  quoteHref?: string
}

export function Footer({
  email = 'sam@metronengineering.com.au',
  address = '11/24 Marjorie Avenue, Shelley WA 6148',
  footerBlurb = 'Perth based engineering, design, drafting and fabrication for projects across Australia.',
  copyrightLine = '© 2026 Metron Engineering Pty Ltd',
  footerNote = 'Designed and documented to AS/NZS standards',
  companyLinks = DEFAULT_COMPANY,
  disciplineLinks = DEFAULT_DISCIPLINES,
  quoteLabel = 'Get a quote ⟶',
  quoteHref = '/quote',
}: FooterProps) {
  const company = companyLinks.length > 0 ? companyLinks : DEFAULT_COMPANY
  const disciplines = disciplineLinks.length > 0 ? disciplineLinks : DEFAULT_DISCIPLINES

  return (
    <footer style={{ background: '#091a2f', padding: '80px 0 40px' }}>
      <div className="mtr-wrap mtr-footer-cols">
        <div>
          <Image
            src="/logo-white.svg"
            alt="Metron Engineering"
            width={200}
            height={46}
            style={{ height: '34px', width: 'auto', display: 'block' }}
          />
          <p style={{ margin: '24px 0 0', maxWidth: '300px', fontSize: '14.5px', lineHeight: 1.68, color: 'rgba(255,255,255,0.6)' }}>
            {footerBlurb}
          </p>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.85)', marginBottom: '20px' }}>
            Company
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {company.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="mtr-footer-link" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.85)', marginBottom: '20px' }}>
            Disciplines
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {disciplines.map((l) => (
              <Link key={l.label} href={l.href} className="mtr-footer-link" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.85)', marginBottom: '20px' }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <a href={`mailto:${email}`} className="mtr-footer-link" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>
              {email}
            </a>
            <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>{address}</span>
            <Link href={quoteHref} className="mtr-footer-link" style={{ fontSize: '14.5px', color: '#7fc4e8', fontWeight: 600 }}>
              {quoteLabel}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mtr-footer-bottom"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '24px',
          fontFamily: 'var(--font-archivo)',
          fontWeight: 600,
          fontSize: '11.5px',
          letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.42)',
          flexWrap: 'wrap',
        }}
      >
        <span>{copyrightLine}</span>
        <span>{footerNote}</span>
      </div>
    </footer>
  )
}
