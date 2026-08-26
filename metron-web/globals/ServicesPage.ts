import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  label: 'Services Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroLabel', type: 'text', label: 'Hero label', defaultValue: 'Core capabilities' },
        { name: 'heroHeading', type: 'textarea', label: 'Hero heading', defaultValue: 'Eight disciplines. One delivery team.' },
        { name: 'heroBody', type: 'textarea', label: 'Hero body', defaultValue: 'From first-principles structural analysis to fabrication-ready drawings, our capabilities span the full engineering workflow — coordinated under one roof so nothing gets lost in handoffs.' },
      ],
    },
    {
      label: 'Capabilities Section',
      type: 'collapsible',
      fields: [
        { name: 'capsSectionNo', type: 'text', label: 'Section number', defaultValue: '01' },
        { name: 'capsSectionTitle', type: 'text', label: 'Section title', defaultValue: 'What we do' },
        { name: 'capsSubheading', type: 'text', label: 'Subheading', defaultValue: 'Each discipline is a full-service offering, not a bolt-on.' },
      ],
    },
    {
      label: 'Process Section',
      type: 'collapsible',
      fields: [
        { name: 'processSectionNo', type: 'text', label: 'Section number', defaultValue: '02' },
        { name: 'processSectionTitle', type: 'text', label: 'Section title', defaultValue: 'How we work' },
        { name: 'processSubheading', type: 'text', label: 'Subheading', defaultValue: 'A structured process from brief to certified drawings.' },
        {
          name: 'processSteps',
          type: 'array',
          label: 'Process steps',
          fields: [
            { name: 'no', type: 'text', label: 'Step number', required: true },
            { name: 'title', type: 'text', label: 'Step title', required: true },
            { name: 'body', type: 'textarea', label: 'Step description', required: true },
          ],
          defaultValue: [
            { no: '01', title: 'Brief & scope', body: 'We receive the scope, site data and applicable standards. We ask the right questions upfront to avoid scope creep downstream.' },
            { no: '02', title: 'Concept & analysis', body: 'Structural or mechanical analysis drives the concept. FEA, load cases and code checks are done before a single detail is drawn.' },
            { no: '03', title: 'Design development', body: 'The concept is developed into a coordinated model — structure, services and architectural elements resolved together.' },
            { no: '04', title: 'Detailed documentation', body: 'Fabrication-ready drawings, specifications and schedules are issued with engineer certification. Revisions are tracked and coordinated.' },
          ],
        },
      ],
    },
    {
      label: 'Tools Section',
      type: 'collapsible',
      fields: [
        { name: 'toolsSectionNo', type: 'text', label: 'Section number', defaultValue: '03' },
        { name: 'toolsSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Tools & software' },
        { name: 'toolsSubheading', type: 'text', label: 'Subheading', defaultValue: 'Industry-standard toolset, applied with discipline.' },
      ],
    },
    {
      label: 'CTA Section',
      type: 'collapsible',
      fields: [
        { name: 'ctaHeading', type: 'text', label: 'CTA heading', defaultValue: 'Send us the scope. We will come back with an approach and a price.' },
        { name: 'ctaSubtitle', type: 'text', label: 'CTA subtitle', defaultValue: 'Get a quote — typically within two business days' },
      ],
    },
  ],
}
