import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getPayload } from '@/lib/payload'
import type { NavLink } from '@/types'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload()
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    const siteName = settings?.siteName || 'Metron Engineering Services'
    return {
      title: {
        default: settings?.metaTitle || siteName,
        template: `%s | ${siteName}`,
      },
      description:
        settings?.metaDescription ||
        'Structural, mechanical, civil and architectural engineering for mining, industrial, infrastructure and commercial clients.',
    }
  } catch {
    return {
      title: {
        default: 'Metron Engineering Services',
        template: '%s | Metron Engineering Services',
      },
      description:
        'Structural, mechanical, civil and architectural engineering for mining, industrial, infrastructure and commercial clients.',
    }
  }
}

function asLinks(raw: unknown): NavLink[] {
  if (!Array.isArray(raw)) return []
  return raw
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const row = item as { label?: unknown; href?: unknown }
      if (typeof row.label !== 'string' || typeof row.href !== 'string') return null
      return { label: row.label, href: row.href }
    })
    .filter((x): x is NavLink => x !== null)
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  let headerProps: {
    navLinks?: NavLink[]
    quoteCtaLabel?: string
    quoteCtaHref?: string
  } = {}
  let footerProps: {
    email?: string
    address?: string
    footerBlurb?: string
    copyrightLine?: string
    footerNote?: string
    companyLinks?: NavLink[]
    disciplineLinks?: NavLink[]
    quoteLabel?: string
    quoteHref?: string
  } = {}

  try {
    const payload = await getPayload()
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    const nav = asLinks(settings?.navLinks)
    const company = asLinks(settings?.footerCompanyLinks)
    const disciplines = asLinks(settings?.footerDisciplines)

    headerProps = {
      navLinks: nav.length > 0 ? nav : undefined,
      quoteCtaLabel: settings?.quoteCtaLabel ?? undefined,
      quoteCtaHref: settings?.quoteCtaHref ?? undefined,
    }
    footerProps = {
      email: settings?.email ?? undefined,
      address: settings?.address ?? undefined,
      footerBlurb: settings?.footerBlurb ?? undefined,
      copyrightLine: settings?.copyrightLine ?? undefined,
      footerNote: settings?.footerNote ?? undefined,
      companyLinks: company.length > 0 ? company : undefined,
      disciplineLinks: disciplines.length > 0 ? disciplines : undefined,
      quoteLabel: settings?.footerQuoteLabel ?? undefined,
      quoteHref: settings?.quoteCtaHref ?? undefined,
    }
  } catch {
    // DB not ready — components use their own defaults
  }

  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <Header {...headerProps} />
        <main>{children}</main>
        <Footer {...footerProps} />
      </body>
    </html>
  )
}
