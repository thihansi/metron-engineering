import { getPayload } from '@/lib/payload'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { ProductsSection } from '@/components/home/ProductsSection'
import { WhySection } from '@/components/home/WhySection'
import { CtaSection } from '@/components/home/CtaSection'

type HomeFields = {
  heroBadgeLeft: string
  heroBadgeRight: string
  heroLine1: string
  heroLine2: string
  heroLine3: string
  heroBody: string
  heroCta1Label: string
  heroCta2Label: string
  heroImageUrl: string
  aboutSectionNo: string
  aboutSectionTitle: string
  aboutSubheading: string
  aboutBody1: string
  aboutBody2: string
  aboutImageUrl: string
  aboutLinkLabel: string
  servicesSectionNo: string
  servicesSectionTitle: string
  servicesSubheading: string
  industriesSectionNo: string
  industriesSectionTitle: string
  industriesSubheading: string
  projectsSectionNo: string
  projectsSectionTitle: string
  projectsSubheading: string
  productsSectionNo: string
  productsSectionTitle: string
  productsSubheading: string
  whySectionNo: string
  whySectionTitle: string
  whySubheading: string
  whyBody: string
  whyStat: number
  whyStatSuffix: string
  whyStatLabel: string
  whyImageUrl: string
  ctaHeading: string
  ctaSubtitle: string
  ctaNote: string
}

const emptyHome: HomeFields = {
  heroBadgeLeft: '',
  heroBadgeRight: '',
  heroLine1: '',
  heroLine2: '',
  heroLine3: '',
  heroBody: '',
  heroCta1Label: '',
  heroCta2Label: '',
  heroImageUrl: '',
  aboutSectionNo: '',
  aboutSectionTitle: '',
  aboutSubheading: '',
  aboutBody1: '',
  aboutBody2: '',
  aboutImageUrl: '',
  aboutLinkLabel: '',
  servicesSectionNo: '',
  servicesSectionTitle: '',
  servicesSubheading: '',
  industriesSectionNo: '',
  industriesSectionTitle: '',
  industriesSubheading: '',
  projectsSectionNo: '',
  projectsSectionTitle: '',
  projectsSubheading: '',
  productsSectionNo: '',
  productsSectionTitle: '',
  productsSubheading: '',
  whySectionNo: '',
  whySectionTitle: '',
  whySubheading: '',
  whyBody: '',
  whyStat: 0,
  whyStatSuffix: '',
  whyStatLabel: '',
  whyImageUrl: '',
  ctaHeading: '',
  ctaSubtitle: '',
  ctaNote: '',
}

export default async function HomePage() {
  let hp = emptyHome
  let tools: { id: string; name: string; use: string; order: number }[] = []
  let capabilities: { id: string; no: string; title: string; body: string; tag: string; order: number }[] = []
  let industries: {
    id: string
    no: string
    title: string
    body: string
    image?: { url: string; alt: string }
    imageUrl?: string
    order: number
  }[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let projects: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = []
  let siteEmail = ''

  try {
    const payload = await getPayload()
    const [homePage, toolsRes, capsRes, indsRes, projsRes, prodsRes, settings] = await Promise.all([
      payload.findGlobal({ slug: 'home-page' }),
      payload.find({ collection: 'tools', sort: 'order', limit: 12 }),
      payload.find({ collection: 'capabilities', sort: 'order', limit: 8 }),
      payload.find({ collection: 'industries', sort: 'order', limit: 4 }),
      payload.find({ collection: 'projects', where: { featured: { equals: true } }, sort: 'order', limit: 3 }),
      payload.find({ collection: 'products', sort: 'order', limit: 4 }),
      payload.findGlobal({ slug: 'site-settings' }),
    ])

    const raw = homePage as Record<string, unknown>
    hp = { ...emptyHome }
    for (const key of Object.keys(emptyHome) as (keyof HomeFields)[]) {
      const v = raw[key]
      if (v != null) (hp as Record<string, unknown>)[key] = v
    }
    tools = toolsRes.docs as typeof tools
    capabilities = capsRes.docs as typeof capabilities
    industries = indsRes.docs as typeof industries
    projects = projsRes.docs
    products = prodsRes.docs
    siteEmail = typeof settings?.email === 'string' ? settings.email : ''
  } catch {
    // CMS unavailable
  }

  return (
    <>
      <HeroSection
        badgeLeft={hp.heroBadgeLeft}
        badgeRight={hp.heroBadgeRight}
        line1={hp.heroLine1}
        line2={hp.heroLine2}
        line3={hp.heroLine3}
        body={hp.heroBody}
        cta1Label={hp.heroCta1Label}
        cta2Label={hp.heroCta2Label}
        imageUrl={hp.heroImageUrl}
      />
      <AboutSection
        sectionNo={hp.aboutSectionNo}
        sectionTitle={hp.aboutSectionTitle}
        subheading={hp.aboutSubheading}
        body1={hp.aboutBody1}
        body2={hp.aboutBody2}
        imageUrl={hp.aboutImageUrl}
        linkLabel={hp.aboutLinkLabel}
        tools={tools}
      />
      <CapabilitiesSection
        sectionNo={hp.servicesSectionNo}
        sectionTitle={hp.servicesSectionTitle}
        subheading={hp.servicesSubheading}
        capabilities={capabilities}
      />
      <IndustriesSection
        sectionNo={hp.industriesSectionNo}
        sectionTitle={hp.industriesSectionTitle}
        subheading={hp.industriesSubheading}
        industries={industries}
      />
      <ProjectsSection
        sectionNo={hp.projectsSectionNo}
        sectionTitle={hp.projectsSectionTitle}
        subheading={hp.projectsSubheading}
        projects={projects}
      />
      <ProductsSection
        sectionNo={hp.productsSectionNo}
        sectionTitle={hp.productsSectionTitle}
        subheading={hp.productsSubheading}
        products={products}
      />
      <WhySection
        sectionNo={hp.whySectionNo}
        sectionTitle={hp.whySectionTitle}
        subheading={hp.whySubheading}
        body={hp.whyBody}
        stat={hp.whyStat}
        statSuffix={hp.whyStatSuffix}
        statLabel={hp.whyStatLabel}
        imageUrl={hp.whyImageUrl}
      />
      <CtaSection heading={hp.ctaHeading} subtitle={hp.ctaSubtitle} note={hp.ctaNote} email={siteEmail} />
    </>
  )
}
