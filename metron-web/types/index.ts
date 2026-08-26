export interface NavLink {
  label: string
  href: string
}

export interface SiteSettings {
  siteName: string
  tagline: string
  footerBlurb: string
  copyrightLine: string
  footerNote: string
  footerDisciplines: NavLink[]
  navLinks: NavLink[]
  email: string
  phone: string
  address: string
  location: string
  coverage: string
}

export interface Tool {
  id: string
  name: string
  use: string
  order: number
}

export interface Capability {
  id: string
  no: string
  title: string
  body: string
  tag: string
  order: number
}

export interface Industry {
  id: string
  no: string
  title: string
  body: string
  image?: { url: string; alt: string }
  imageUrl?: string
  order: number
}

export interface Service {
  id: string
  no: string
  title: string
  body: string
  items: { item: string }[]
  tools: string
  image?: { url: string; alt: string }
  imageUrl?: string
  order: number
}

export interface ProductSpec {
  key: string
  value: string
}

export interface Product {
  id: string
  code: string
  title: string
  category: 'access' | 'ventilation' | 'fabrication'
  short: string
  long: string
  image?: { url: string; alt: string }
  imageUrl?: string
  gallery: { url: string }[]
  specs: ProductSpec[]
  options: { option: string }[]
  order: number
}

export interface ProjectFact {
  key: string
  value: string
}

export interface Project {
  id: string
  title: string
  industry: 'mining' | 'industrial' | 'infrastructure' | 'commercial'
  services: { service: string }[]
  summary: string
  brief: string
  work: { item: string }[]
  outcome: string
  facts: ProjectFact[]
  image?: { url: string; alt: string }
  imageUrl?: string
  featured: boolean
  order: number
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface QuoteFormData {
  name: string
  company?: string
  email: string
  phone?: string
  serviceRequired: string
  projectLocation?: string
  indicativeTiming?: string
  description: string
}
