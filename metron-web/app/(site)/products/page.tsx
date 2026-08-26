import type { Metadata } from 'next'
import { getPayload } from '@/lib/payload'
import { ProductsDrawer, type CmsProduct } from '@/components/home/ProductsDrawer'
import { InnerHero } from '@/components/ui/InnerHero'

function mediaUrl(image: unknown): { url?: string | null } | null {
  if (image && typeof image === 'object' && 'url' in image) {
    return { url: (image as { url?: string | null }).url ?? null }
  }
  return null
}

function toCmsProduct(doc: Record<string, unknown>): CmsProduct {
  return {
    id: String(doc.id ?? ''),
    code: String(doc.code ?? ''),
    title: String(doc.title ?? ''),
    category: String(doc.category ?? ''),
    short: String(doc.short ?? ''),
    long: typeof doc.long === 'string' ? doc.long : null,
    imageUrl: typeof doc.imageUrl === 'string' ? doc.imageUrl : null,
    image: mediaUrl(doc.image),
    gallery: Array.isArray(doc.gallery)
      ? (doc.gallery as { url?: string }[])
          .filter((g): g is { url: string } => typeof g?.url === 'string')
          .map((g) => ({ url: g.url }))
      : null,
    specs: Array.isArray(doc.specs)
      ? (doc.specs as { k?: string; v?: string }[]).map((s) => ({ k: s.k ?? '', v: s.v ?? '' }))
      : null,
    options: Array.isArray(doc.options)
      ? (doc.options as { option?: string }[]).map((o) => ({ option: o.option ?? '' }))
      : null,
  }
}

export const metadata: Metadata = {
  title: 'Metron Specials | Engineered Access & Ventilation Products',
  description: 'Metron Specials — a range of engineered access hatches, ventilation and fabricated products designed and manufactured in Perth.',
}

export default async function ProductsPage() {
  let products: CmsProduct[] = []
  let heroLabel = ''
  let heroBadgeRight = ''
  let heroHeading = ''
  let heroBody = ''
  let ctaHeading = ''
  let ctaBody = ''
  let ctaButtonLabel = ''
  let ctaEmailLabel = ''
  let contactEmail = ''
  let assurances: { title: string; body: string }[] = []

  try {
    const payload = await getPayload()
    const [pg, prodsRes, settings] = await Promise.all([
      payload.findGlobal({ slug: 'products-page' }),
      payload.find({ collection: 'products', sort: 'order', limit: 100, depth: 1 }),
      payload.findGlobal({ slug: 'site-settings' }),
    ])
    const g = pg as Record<string, unknown>
    heroLabel = typeof g.heroLabel === 'string' ? g.heroLabel : ''
    heroBadgeRight = typeof g.heroBadgeRight === 'string' ? g.heroBadgeRight : ''
    heroHeading = typeof g.heroHeading === 'string' ? g.heroHeading : ''
    heroBody = typeof g.heroBody === 'string' ? g.heroBody : ''
    ctaHeading = typeof g.ctaHeading === 'string' ? g.ctaHeading : ''
    ctaBody = typeof g.ctaBody === 'string' ? g.ctaBody : ''
    ctaButtonLabel = typeof g.ctaButtonLabel === 'string' ? g.ctaButtonLabel : ''
    ctaEmailLabel = typeof g.ctaEmailLabel === 'string' ? g.ctaEmailLabel : ''
    assurances = Array.isArray(g.assurances)
      ? (g.assurances as { title?: string; body?: string }[]).map((a) => ({
          title: a.title ?? '',
          body: a.body ?? '',
        }))
      : []
    contactEmail = typeof (settings as { email?: string }).email === 'string' ? (settings as { email: string }).email : ''
    products = (prodsRes.docs as Record<string, unknown>[]).map(toCmsProduct)
  } catch {
    // CMS unavailable — render empty catalogue, no hardcoded fallbacks
  }

  return (
    <>
      <InnerHero
        compact
        showOrb
        orbAnimate={false}
        badgeLeft={heroLabel}
        badgeRight={heroBadgeRight}
        heading={heroHeading}
        body={heroBody}
        headingMaxWidth={840}
        bodyMaxWidth={620}
      />

      <ProductsDrawer
        products={products}
        ctaHeading={ctaHeading}
        ctaBody={ctaBody}
        ctaButtonLabel={ctaButtonLabel}
        ctaEmailLabel={ctaEmailLabel}
        contactEmail={contactEmail}
        assurances={assurances}
      />
    </>
  )
}
