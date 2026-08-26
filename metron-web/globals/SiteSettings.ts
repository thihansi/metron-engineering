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
      name: 'footerDisciplines',
      type: 'array',
      label: 'Footer discipline links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
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
      name: 'coverage',
      type: 'text',
      label: 'Coverage description',
      defaultValue: 'Engaged on projects Australia-wide',
    },
  ],
}
