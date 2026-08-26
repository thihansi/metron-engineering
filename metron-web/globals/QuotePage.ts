import type { GlobalConfig } from 'payload'

/** Defaults aligned to ReferenceFiles/Metron Get a Quote.dc.html */
export const QuotePage: GlobalConfig = {
  slug: 'quote-page',
  label: 'Quote Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroBadgeLeft', type: 'text', label: 'Badge left', defaultValue: 'Get a quote' },
        {
          name: 'heroBadgeRight',
          type: 'text',
          label: 'Badge right',
          defaultValue: 'Response within two business days',
        },
        { name: 'heroHeading', type: 'text', label: 'Heading', defaultValue: 'Send us the scope.' },
        {
          name: 'heroBody',
          type: 'textarea',
          label: 'Body',
          defaultValue:
            'Drawings, sketches, specifications or a short description — whatever you have is enough to start. We will come back with an approach and a price.',
        },
      ],
    },
    {
      label: 'Form',
      type: 'collapsible',
      fields: [
        { name: 'formTitle', type: 'text', label: 'Form title', defaultValue: 'Project enquiry' },
        {
          name: 'formSubheading',
          type: 'text',
          label: 'Form subheading',
          defaultValue: 'Fields marked with an asterisk are required.',
        },
        {
          name: 'formSuccessHeading',
          type: 'text',
          label: 'Success heading',
          defaultValue: 'Quote request received',
        },
        {
          name: 'formSuccessBody',
          type: 'textarea',
          label: 'Success body',
          defaultValue:
            'Thanks for reaching out. We will review your project details and come back with an approach and a price — typically within two business days.',
        },
        {
          name: 'submitLabel',
          type: 'text',
          label: 'Submit button label',
          defaultValue: 'Send enquiry',
        },
        {
          name: 'serviceOptions',
          type: 'array',
          label: 'Service chips',
          fields: [{ name: 'label', type: 'text', required: true }],
          defaultValue: [
            { label: 'Structural' },
            { label: 'Mechanical' },
            { label: 'Civil' },
            { label: 'Architectural' },
            { label: 'Drafting & CAD' },
            { label: 'BIM Services' },
            { label: 'FEA Analysis' },
            { label: 'Steel Detailing' },
            { label: 'Metron Specials product' },
            { label: 'Other' },
          ],
        },
      ],
    },
    {
      label: 'Sidebar — company card',
      type: 'collapsible',
      fields: [
        {
          name: 'sidebarCompanyName',
          type: 'text',
          label: 'Company name',
          defaultValue: 'Metron Engineering Services Pty Ltd',
        },
        { name: 'sidebarOfficeLabel', type: 'text', label: 'Office label', defaultValue: 'Office' },
        {
          name: 'sidebarOfficeValue',
          type: 'text',
          label: 'Office value',
          defaultValue: 'Shelley, Western Australia',
        },
        { name: 'sidebarCoverageLabel', type: 'text', label: 'Coverage label', defaultValue: 'Coverage' },
        {
          name: 'sidebarCoverageValue',
          type: 'text',
          label: 'Coverage value',
          defaultValue: 'Projects supported Australia-wide',
        },
        { name: 'sidebarHoursLabel', type: 'text', label: 'Hours label', defaultValue: 'Hours' },
        {
          name: 'sidebarHoursValue',
          type: 'text',
          label: 'Hours value',
          defaultValue: 'Mon – Fri, 7:30 am – 5:00 pm AWST',
        },
      ],
    },
    {
      label: 'Sidebar — next steps',
      type: 'collapsible',
      fields: [
        {
          name: 'stepsHeading',
          type: 'text',
          label: 'Steps heading',
          defaultValue: 'What happens next',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Steps',
          fields: [
            { name: 'no', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
          ],
          defaultValue: [
            { no: '1', text: 'We read the scope and come back with any clarifying questions.' },
            { no: '2', text: 'You receive a proposed approach, programme and fee.' },
            { no: '3', text: 'On acceptance, the engineer who quoted runs the job.' },
          ],
        },
      ],
    },
    {
      label: 'Sidebar — contact fallback',
      type: 'collapsible',
      fields: [
        {
          name: 'contactFallbackHeading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Not ready to quote?',
        },
        {
          name: 'contactFallbackBody',
          type: 'textarea',
          label: 'Body',
          defaultValue:
            'For a general question, our contact details and a short message form are on the contact page.',
        },
        {
          name: 'contactFallbackLabel',
          type: 'text',
          label: 'Button label',
          defaultValue: 'Contact details ⟶',
        },
        {
          name: 'contactFallbackHref',
          type: 'text',
          label: 'Button href',
          defaultValue: '/contact',
        },
      ],
    },
  ],
}
