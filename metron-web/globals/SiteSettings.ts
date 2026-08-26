import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: { group: 'Site' },
  access: { read: () => true },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Site name',
      defaultValue: 'Metron Engineering Services',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      defaultValue: 'Engineering that holds up under load.',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'SEO title',
      defaultValue: 'Metron Engineering Services',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'SEO description',
      defaultValue:
        'Structural, mechanical, civil and architectural engineering for mining, industrial, infrastructure and commercial clients.',
    },
    {
      name: 'footerBlurb',
      type: 'textarea',
      label: 'Footer blurb',
      defaultValue: 'Perth based engineering, design, drafting and fabrication for projects across Australia.',
    },
    {
      name: 'copyrightLine',
      type: 'text',
      label: 'Copyright line',
      defaultValue: '© 2026 Metron Engineering Pty Ltd',
    },
    {
      name: 'footerNote',
      type: 'text',
      label: 'Footer right-hand note',
      defaultValue: 'Designed and documented to AS/NZS standards',
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Header navigation links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Products', href: '/products' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      name: 'quoteCtaLabel',
      type: 'text',
      label: 'Header quote CTA label',
      defaultValue: 'Get a Quote',
    },
    {
      name: 'quoteCtaHref',
      type: 'text',
      label: 'Header quote CTA href',
      defaultValue: '/quote',
    },
    {
      name: 'footerCompanyLinks',
      type: 'array',
      label: 'Footer company links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
      defaultValue: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Projects', href: '/projects' },
        { label: 'Products', href: '/products' },
      ],
    },
    {
      name: 'footerDisciplines',
      type: 'array',
      label: 'Footer discipline links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
      defaultValue: [
        { label: 'Structural', href: '/services' },
        { label: 'Mechanical', href: '/services' },
        { label: 'FEA analysis', href: '/services' },
        { label: 'Steel detailing', href: '/services' },
      ],
    },
    {
      name: 'footerQuoteLabel',
      type: 'text',
      label: 'Footer quote link label',
      defaultValue: 'Get a quote ⟶',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Contact email',
      defaultValue: 'sam@metronengineering.com.au',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone number',
      defaultValue: '+61 452 633 258',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Office address',
      defaultValue: '11/24 Marjorie Avenue, Shelley WA 6148',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location badge',
      defaultValue: 'Perth, WA',
    },
    {
      name: 'officeLabel',
      type: 'text',
      label: 'Office short label',
      defaultValue: 'Shelley, Western Australia',
    },
    {
      name: 'coverage',
      type: 'text',
      label: 'Coverage (long)',
      defaultValue: 'Engaged on projects Australia-wide',
    },
    {
      name: 'coverageLabel',
      type: 'text',
      label: 'Coverage short label',
      defaultValue: 'Australia-wide',
    },
    {
      name: 'officeHours',
      type: 'text',
      label: 'Office hours',
      defaultValue: 'Mon – Fri, 7:30 am – 5:00 pm AWST',
    },
  ],
}
