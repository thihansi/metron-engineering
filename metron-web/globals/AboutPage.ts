import type { GlobalConfig } from 'payload'

/** Defaults aligned to ReferenceFiles/Metron About.dc.html */
export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroLabel', type: 'text', label: 'Hero label', defaultValue: 'About Metron' },
        {
          name: 'heroBadgeRight',
          type: 'text',
          label: 'Hero badge (right)',
          defaultValue: 'Shelley, Western Australia',
        },
        {
          name: 'heroHeading',
          type: 'textarea',
          label: 'Hero heading',
          defaultValue: 'Engineering, detailing, analysis, and fabrication under one roof.',
        },
        {
          name: 'heroBody',
          type: 'textarea',
          label: 'Hero body',
          defaultValue:
            'Metron Engineering provides multidisciplinary engineering, analysis, design and technical documentation across a broad range of industries and project environments.  Our team combines engineering expertise with practical project experience to develop solutions that are technically sound, constructible and suited to the requirements of each project.',
        },
      ],
    },
    {
      label: 'Intro Section',
      type: 'collapsible',
      fields: [
        { name: 'introSectionNo', type: 'text', label: 'Section number', defaultValue: '01' },
        { name: 'introSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Who we are' },
        {
          name: 'introSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Engineering expertise from concept through to delivery.',
        },
        {
          name: 'introBody1',
          type: 'textarea',
          label: 'Body paragraph 1',
          defaultValue:
            'Metron Engineering is a Perth based engineering company providing engineering, design, drafting and fabrication solutions across a wide range of industries.',
        },
        {
          name: 'introBody2',
          type: 'textarea',
          label: 'Body paragraph 2',
          defaultValue:
            'We work closely with our clients to understand their requirements and deliver practical, cost effective solutions suited to each project. From initial concept and engineering design through to detailed drafting, fabrication and delivery, our team provides support across the full project lifecycle.  Our approach brings engineering, design and fabrication together, allowing us to maintain continuity from the first idea through to the finished outcome.  In addition to project work, Metron Engineering develops a range of specialised products designed to address practical industry needs and provide reliable, fit for purpose solutions.',
        },
        {
          name: 'introImageUrl',
          type: 'text',
          label: 'Image URL',
          defaultValue: 'https://images.unsplash.com/photo-1444847840129-0ac27946a0a7?auto=format&fit=crop&w=1100&q=72',
        },
      ],
    },
    {
      label: 'Stats Row',
      type: 'collapsible',
      fields: [
        { name: 'stat1Number', type: 'text', label: 'Stat 1 number', defaultValue: '18+' },
        { name: 'stat1Label', type: 'text', label: 'Stat 1 label', defaultValue: 'Years experience' },
        { name: 'stat2Number', type: 'text', label: 'Stat 2 number', defaultValue: '450+' },
        { name: 'stat2Label', type: 'text', label: 'Stat 2 label', defaultValue: 'Projects delivered' },
        { name: 'stat3Number', type: 'text', label: 'Stat 3 number', defaultValue: '9' },
        { name: 'stat3Label', type: 'text', label: 'Stat 3 label', defaultValue: 'Product lines' },
      ],
    },
    {
      label: 'Capabilities Section',
      type: 'collapsible',
      fields: [
        { name: 'capabilitiesSectionNo', type: 'text', label: 'Section number', defaultValue: '02' },
        { name: 'capabilitiesSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Capabilities' },
        {
          name: 'capabilitiesSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Eight disciplines delivered by one team, coordinated to a single model.',
        },
      ],
    },
    {
      label: 'Industries Section',
      type: 'collapsible',
      fields: [
        { name: 'industriesSectionNo', type: 'text', label: 'Section number', defaultValue: '03' },
        { name: 'industriesSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Industries' },
        {
          name: 'industriesSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Engineering solutions across a range of industries.',
        },
        {
          name: 'industriesBody',
          type: 'textarea',
          label: 'Body',
          defaultValue:
            'Our experience and capabilities allow us to support clients across a variety of industries and project environments.',
        },
      ],
    },
    {
      label: 'Tools Section',
      type: 'collapsible',
      fields: [
        { name: 'toolsSectionNo', type: 'text', label: 'Section number', defaultValue: '04' },
        { name: 'toolsSectionTitle', type: 'text', label: 'Section title', defaultValue: 'Technical Tools' },
        {
          name: 'toolsSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Industry leading tools supporting engineering and design.',
        },
        {
          name: 'toolsBody',
          type: 'textarea',
          label: 'Body',
          defaultValue:
            'We use recognised engineering and design software to develop, analyse and document our work accurately and efficiently.',
        },
      ],
    },
    {
      label: 'Standards Section',
      type: 'collapsible',
      fields: [
        { name: 'standardsSectionNo', type: 'text', label: 'Section number', defaultValue: '05' },
        {
          name: 'standardsSectionTitle',
          type: 'text',
          label: 'Section title',
          defaultValue: 'Standards & compliance',
        },
        {
          name: 'standardsSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Every drawing issued against a nominated code.',
        },
        {
          name: 'standardsNote',
          type: 'textarea',
          label: 'Footnote',
          defaultValue:
            'Other Australian and international standards are applied where required by the project, client or location.',
        },
        {
          name: 'standardsList',
          type: 'array',
          label: 'Standards list',
          fields: [
            { name: 'code', type: 'text', label: 'Standard code', required: true },
            { name: 'description', type: 'text', label: 'Description', required: true },
          ],
          defaultValue: [
            { code: 'AS 4100', description: 'Steel structures' },
            { code: 'AS/NZS 1170', description: 'Structural design actions' },
            { code: 'AS 1657', description: 'Platforms, walkways, stairways and ladders' },
            { code: 'AS/NZS 4680', description: 'Hot dip galvanized coatings' },
            { code: 'WA MSI Act', description: 'Western Australian mining regulations' },
          ],
        },
      ],
    },
    {
      label: 'Products CTA Section',
      type: 'collapsible',
      fields: [
        { name: 'productCtaSectionNo', type: 'text', label: 'Section number', defaultValue: '06' },
        { name: 'productCtaHeading', type: 'text', label: 'Heading', defaultValue: 'Metron Products' },
        {
          name: 'productCtaSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Specialised products developed by Metron Engineering.',
        },
        {
          name: 'productCtaBody',
          type: 'textarea',
          label: 'Body paragraph 1',
          defaultValue:
            'Alongside our project engineering and fabrication work, we develop our own range of specialised products for practical industry applications.',
        },
        {
          name: 'productCtaBody2',
          type: 'textarea',
          label: 'Body paragraph 2',
          defaultValue:
            'Each product is developed using the same engineering approach we apply to our client projects, with a focus on functionality, durability and ease of use.',
        },
        { name: 'productCtaLabel', type: 'text', label: 'Button label', defaultValue: 'Explore Metron Products' },
        {
          name: 'productCtaImageUrl',
          type: 'text',
          label: 'Image URL',
          defaultValue: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=72',
        },
      ],
    },
    {
      label: 'CTA Section',
      type: 'collapsible',
      fields: [
        {
          name: 'ctaEyebrow',
          type: 'text',
          label: 'Eyebrow label',
          defaultValue: 'Final Call to Action',
        },
        {
          name: 'ctaHeading',
          type: 'text',
          label: 'CTA heading',
          defaultValue: 'Have a project in mind?',
        },
        {
          name: 'ctaBody',
          type: 'textarea',
          label: 'CTA body',
          defaultValue:
            'Talk to Metron Engineering about your engineering, design, drafting or fabrication requirements. Whether you need support with an initial concept, detailed engineering, fabrication documentation or a complete engineered solution, our team can help move your project forward.',
        },
        {
          name: 'ctaPrimaryLabel',
          type: 'text',
          label: 'Primary button label',
          defaultValue: 'Discuss Your Project',
        },
        {
          name: 'ctaPrimaryHref',
          type: 'text',
          label: 'Primary button href',
          defaultValue: '/quote',
        },
        {
          name: 'ctaSecondaryLabel',
          type: 'text',
          label: 'Secondary button label',
          defaultValue: 'View Our Projects',
        },
        {
          name: 'ctaSecondaryHref',
          type: 'text',
          label: 'Secondary button href',
          defaultValue: '/projects',
        },
      ],
    },
  ],
}
