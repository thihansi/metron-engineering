import type { GlobalConfig } from 'payload'

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
        { name: 'heroLabel', type: 'text', label: 'Hero label', defaultValue: 'Get in touch' },
        { name: 'heroHeading', type: 'textarea', label: 'Hero heading', defaultValue: 'Talk to the team.' },
        { name: 'heroBody', type: 'textarea', label: 'Hero body', defaultValue: 'For project enquiries, use the quote form. For everything else — a question about a service, a product spec, or just a conversation — use the form below or contact us directly.' },
      ],
    },
    {
      label: 'Contact Info',
      type: 'collapsible',
      fields: [
        { name: 'contactSectionNo', type: 'text', label: 'Section number', defaultValue: '01' },
        { name: 'contactSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Contact' },
        { name: 'officeHoursLabel', type: 'text', label: 'Office hours label', defaultValue: 'Office hours' },
        { name: 'officeHours', type: 'text', label: 'Office hours', defaultValue: 'Monday – Friday, 7:30 am – 5:00 pm AWST' },
        { name: 'responseTimeLabel', type: 'text', label: 'Response time label', defaultValue: 'Response time' },
        { name: 'responseTime', type: 'text', label: 'Response time', defaultValue: 'We aim to respond to all enquiries within one business day.' },
      ],
    },
    {
      label: 'Form Section',
      type: 'collapsible',
      fields: [
        { name: 'formSectionNo', type: 'text', label: 'Section number', defaultValue: '02' },
        { name: 'formSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Send a message' },
        { name: 'formSubheading', type: 'text', label: 'Subheading', defaultValue: 'We read every message and respond within one business day.' },
        { name: 'formSuccessMessage', type: 'textarea', label: 'Success message', defaultValue: 'Message received. We will be in touch within one business day.' },
      ],
    },
    {
      label: 'Quote CTA',
      type: 'collapsible',
      fields: [
        { name: 'quoteCtaHeading', type: 'text', label: 'Quote CTA heading', defaultValue: 'Need a quote for a project?' },
        { name: 'quoteCtaBody', type: 'textarea', label: 'Quote CTA body', defaultValue: 'Use the dedicated quote form to give us the project scope, timing and any attachments. We will come back with an approach and a fixed price — typically within two business days.' },
        { name: 'quoteCtaLabel', type: 'text', label: 'Quote CTA button label', defaultValue: 'Get a quote' },
      ],
    },
  ],
}
