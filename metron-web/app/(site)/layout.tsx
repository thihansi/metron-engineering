import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getPayload } from '@/lib/payload'

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

export const metadata: Metadata = {
  title: 'Metron Engineering Services',
  description: 'Structural, mechanical, civil and architectural engineering for mining, industrial, infrastructure and commercial clients.',
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  let footerProps: { email?: string; address?: string; footerBlurb?: string; copyrightLine?: string; footerNote?: string } = {}

  try {
    const payload = await getPayload()
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    footerProps = {
      email: settings?.email ?? undefined,
      address: settings?.address ?? undefined,
      footerBlurb: settings?.footerBlurb ?? undefined,
      copyrightLine: settings?.copyrightLine ?? undefined,
      footerNote: settings?.footerNote ?? undefined,
    }
  } catch {
    // DB not ready — Footer uses its own defaults
  }

  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer {...footerProps} />
      </body>
    </html>
  )
}
