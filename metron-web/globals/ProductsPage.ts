import type { GlobalConfig } from 'payload'

export const ProductsPage: GlobalConfig = {
  slug: 'products-page',
  label: 'Products Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroLabel', type: 'text', label: 'Hero label', defaultValue: 'Metron Specials' },
        {
          name: 'heroBadgeRight',
          type: 'text',
          label: 'Hero badge (right)',
          defaultValue: 'Designed, engineered and fabricated in-house',
        },
        {
          name: 'heroHeading',
          type: 'textarea',
          label: 'Hero heading',
          defaultValue: 'Our own range of specialty products.',
        },
        {
          name: 'heroBody',
          type: 'textarea',
          label: 'Hero body',
          defaultValue:
            'Nine product lines built for underground and surface operations — engineered by the same team that delivers our consultancy work, made to order and supported Australia-wide.',
        },
      ],
    },
    {
      label: 'Custom build CTA',
      type: 'collapsible',
      fields: [
        {
          name: 'ctaHeading',
          type: 'text',
          label: 'CTA heading',
          defaultValue: "Need something that isn't in the catalogue?",
        },
        {
          name: 'ctaBody',
          type: 'textarea',
          label: 'CTA body',
          defaultValue:
            'Every Metron product is made to order, so dimensions, ratings, coatings and mounting details can be adapted to your site. Send us drawings or a description and we will quote against your specification.',
        },
        { name: 'ctaButtonLabel', type: 'text', label: 'Primary button', defaultValue: 'Request a custom build' },
        {
          name: 'ctaEmailLabel',
          type: 'text',
          label: 'Email button label',
          defaultValue: 'sam@metronengineering.com.au',
        },
        {
          name: 'assurances',
          type: 'array',
          label: 'Assurance tiles',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'body', type: 'textarea', required: true },
          ],
        },
      ],
    },
  ],
}
