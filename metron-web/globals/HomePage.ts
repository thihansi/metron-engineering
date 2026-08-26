import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroBadgeLeft', type: 'text', label: 'Badge left text', defaultValue: 'Perth, WA' },
        { name: 'heroBadgeRight', type: 'text', label: 'Badge right text', defaultValue: 'Engaged on projects Australia-wide' },
        { name: 'heroLine1', type: 'text', label: 'Hero heading line 1', defaultValue: 'Engineering' },
        { name: 'heroLine2', type: 'text', label: 'Hero heading line 2', defaultValue: 'that holds up' },
        { name: 'heroLine3', type: 'text', label: 'Hero heading line 3', defaultValue: 'under load.' },
        { name: 'heroBody', type: 'textarea', label: 'Hero body text', defaultValue: 'Structural, mechanical, civil and architectural engineering for mining, industrial, infrastructure and commercial clients — concept, analysis, detailing and fabrication under one roof.' },
        { name: 'heroCta1Label', type: 'text', label: 'Primary CTA label', defaultValue: 'Discuss a Project' },
        { name: 'heroCta2Label', type: 'text', label: 'Secondary CTA label', defaultValue: 'View Capabilities' },
        { name: 'heroImageUrl', type: 'text', label: 'Hero background image URL', defaultValue: 'https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?auto=format&fit=crop&w=1600&q=72' },
      ],
    },
    {
      label: 'About Section',
      type: 'collapsible',
      fields: [
        { name: 'aboutSectionNo', type: 'text', label: 'Section number', defaultValue: '01' },
        { name: 'aboutSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Who we are' },
        { name: 'aboutSubheading', type: 'text', label: 'Subheading', defaultValue: 'A consultancy built around drawings that get built.' },
        { name: 'aboutBody1', type: 'textarea', label: 'Body paragraph 1', defaultValue: 'Metron Engineering Services Pty Ltd is a Perth-based engineering and design consultancy. We work alongside mine operators, fabricators, builders and asset owners to take a brief from first principles through to certified, fabrication-ready documentation.' },
        { name: 'aboutBody2', type: 'textarea', label: 'Body paragraph 2', defaultValue: 'Structural and mechanical design sit next to detailing, finite element analysis and BIM coordination in a single workflow, so decisions made in analysis carry straight through to the shop floor. We also design and supply fabricated products for underground and surface operations.' },
        { name: 'aboutImageUrl', type: 'text', label: 'Image URL', defaultValue: 'https://images.unsplash.com/photo-1444847840129-0ac27946a0a7?auto=format&fit=crop&w=1100&q=72' },
        { name: 'aboutLinkLabel', type: 'text', label: 'Link label', defaultValue: 'More about Metron' },
      ],
    },
    {
      label: 'Services Section',
      type: 'collapsible',
      fields: [
        { name: 'servicesSectionNo', type: 'text', label: 'Section number', defaultValue: '02' },
        { name: 'servicesSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Core capabilities' },
        { name: 'servicesSubheading', type: 'text', label: 'Subheading', defaultValue: 'Eight disciplines, one delivery team.' },
      ],
    },
    {
      label: 'Industries Section',
      type: 'collapsible',
      fields: [
        { name: 'industriesSectionNo', type: 'text', label: 'Section number', defaultValue: '03' },
        { name: 'industriesSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Industries served' },
        { name: 'industriesSubheading', type: 'text', label: 'Subheading', defaultValue: 'Environments where tolerances matter.' },
      ],
    },
    {
      label: 'Projects Section',
      type: 'collapsible',
      fields: [
        { name: 'projectsSectionNo', type: 'text', label: 'Section number', defaultValue: '04' },
        { name: 'projectsSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Featured projects' },
        { name: 'projectsSubheading', type: 'text', label: 'Subheading', defaultValue: 'Selected work.' },
      ],
    },
    {
      label: 'Products Section',
      type: 'collapsible',
      fields: [
        { name: 'productsSectionNo', type: 'text', label: 'Section number', defaultValue: '05' },
        { name: 'productsSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Metron Specials' },
        { name: 'productsSubheading', type: 'textarea', label: 'Subheading', defaultValue: 'Alongside our consultancy work, Metron designs, engineers and fabricates its own range of specialty products for underground and surface operations. Built to order, delivered Australia-wide.' },
      ],
    },
    {
      label: 'Why Metron Section',
      type: 'collapsible',
      fields: [
        { name: 'whySectionNo', type: 'text', label: 'Section number', defaultValue: '06' },
        { name: 'whySectionTitle', type: 'text', label: 'Section title', defaultValue: 'Why Metron' },
        { name: 'whySubheading', type: 'text', label: 'Subheading', defaultValue: 'Fewer handoffs. Fewer surprises on site.' },
        { name: 'whyBody', type: 'textarea', label: 'Body', defaultValue: 'Design, analysis, detailing and fabrication support are coordinated to the same model and the same standards.' },
        { name: 'whyStat', type: 'number', label: 'Key stat number', defaultValue: 98 },
        { name: 'whyStatSuffix', type: 'text', label: 'Key stat suffix', defaultValue: '%' },
        { name: 'whyStatLabel', type: 'text', label: 'Key stat label', defaultValue: 'Documentation issued on schedule' },
        { name: 'whyImageUrl', type: 'text', label: 'Background image URL', defaultValue: 'https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?auto=format&fit=crop&w=1800&q=70' },
      ],
    },
    {
      label: 'CTA Section',
      type: 'collapsible',
      fields: [
        { name: 'ctaHeading', type: 'text', label: 'CTA heading', defaultValue: 'Send us the scope. We will come back with an approach and a price.' },
        { name: 'ctaSubtitle', type: 'text', label: 'CTA subtitle', defaultValue: 'Get a quote — typically within two business days' },
        { name: 'ctaNote', type: 'text', label: 'CTA footer note', defaultValue: 'Shelley, Western Australia' },
      ],
    },
  ],
}
