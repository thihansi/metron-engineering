import type { GlobalConfig } from 'payload'

/** Defaults aligned to ReferenceFiles/Metron Contact.dc.html */
export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroLabel', type: 'text', label: 'Hero badge left', defaultValue: 'Contact' },
        {
          name: 'heroBadgeRight',
          type: 'text',
          label: 'Hero badge right',
          defaultValue: 'Shelley, Western Australia',
        },
        { name: 'heroHeading', type: 'textarea', label: 'Hero heading', defaultValue: 'Talk to an engineer.' },
        {
          name: 'heroBody',
          type: 'textarea',
          label: 'Hero body',
          defaultValue:
            'Call, email or send a short message. If you already have a scope and want a price, the quote form collects everything we need in one pass.',
        },
        {
          name: 'heroQuoteLabel',
          type: 'text',
          label: 'Hero secondary CTA label',
          defaultValue: 'Request a quote ⟶',
        },
      ],
    },
    {
      label: 'Contact details bar',
      type: 'collapsible',
      fields: [
        {
          name: 'detailCells',
          type: 'array',
          label: 'Detail cells',
          admin: {
            description:
              'Phone and Email values are overridden by Site Settings at render time. Use value for Office/Coverage (or any custom cell).',
          },
          fields: [
            { name: 'label', type: 'text', required: true },
            {
              name: 'valueKey',
              type: 'select',
              label: 'Value source',
              options: [
                { label: 'Custom (use value field)', value: 'custom' },
                { label: 'Site phone', value: 'phone' },
                { label: 'Site email', value: 'email' },
                { label: 'Site office label', value: 'officeLabel' },
                { label: 'Site coverage label', value: 'coverageLabel' },
              ],
              defaultValue: 'custom',
            },
            { name: 'value', type: 'text', label: 'Custom value' },
            { name: 'note', type: 'text', label: 'Note' },
          ],
          defaultValue: [
            { label: 'Phone', valueKey: 'phone', note: 'Mon–Fri, 7:30am – 5:00pm AWST' },
            { label: 'Email', valueKey: 'email', note: 'Replies within one business day' },
            {
              label: 'Office',
              valueKey: 'officeLabel',
              note: 'Visits by appointment',
            },
            {
              label: 'Coverage',
              valueKey: 'coverageLabel',
              note: 'Remote and on-site engineering support',
            },
          ],
        },
      ],
    },
    {
      label: 'Find us',
      type: 'collapsible',
      fields: [
        { name: 'findUsHeading', type: 'text', label: 'Heading', defaultValue: 'Find us' },
        {
          name: 'findUsBody',
          type: 'textarea',
          label: 'Body',
          defaultValue: 'Visits are by appointment. For a specific person or team, see the routing below.',
        },
        {
          name: 'routingRows',
          type: 'array',
          label: 'Routing rows',
          fields: [
            { name: 'area', type: 'text', required: true },
            { name: 'detail', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            {
              name: 'linkType',
              type: 'select',
              options: [
                { label: 'Internal page', value: 'internal' },
                { label: 'Mailto (uses Site Settings email if href is mailto:)', value: 'mailto' },
                { label: 'External URL', value: 'external' },
              ],
              defaultValue: 'internal',
            },
          ],
          defaultValue: [
            {
              area: 'New work and quotes',
              detail: 'Scope, drawings, programme and fees',
              href: '/quote',
              label: 'Quote form ⟶',
              linkType: 'internal',
            },
            {
              area: 'Metron Specials products',
              detail: 'Availability, specifications and pricing',
              href: '/products',
              label: 'View range ⟶',
              linkType: 'internal',
            },
            {
              area: 'Live projects',
              detail: 'Site queries, revisions and documentation',
              href: 'mailto:',
              label: 'Email us ⟶',
              linkType: 'mailto',
            },
            {
              area: 'Careers',
              detail: 'Engineers and detailers — send a CV any time',
              href: 'mailto:',
              label: 'Email us ⟶',
              linkType: 'mailto',
            },
          ],
        },
      ],
    },
    {
      label: 'Form Section',
      type: 'collapsible',
      fields: [
        { name: 'formSectionNo', type: 'text', label: 'Section number', defaultValue: '02' },
        { name: 'formSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Send a message' },
        {
          name: 'formSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'For general questions.',
        },
        {
          name: 'formSuccessMessage',
          type: 'textarea',
          label: 'Success message',
          defaultValue: 'Message received. We will be in touch within one business day.',
        },
      ],
    },
    {
      label: 'Quote CTA',
      type: 'collapsible',
      fields: [
        {
          name: 'quoteCtaHeading',
          type: 'text',
          label: 'Quote CTA heading',
          defaultValue: 'Have a scope ready?',
        },
        {
          name: 'quoteCtaBody',
          type: 'textarea',
          label: 'Quote CTA body',
          defaultValue:
            'Send drawings, specifications or a short description and we will come back with an approach, programme and fee.',
        },
        {
          name: 'quoteCtaLabel',
          type: 'text',
          label: 'Quote CTA button label',
          defaultValue: 'Get a quote ⟶',
        },
        {
          name: 'quoteCtaHref',
          type: 'text',
          label: 'Quote CTA href',
          defaultValue: '/quote',
        },
      ],
    },
  ],
}
