import type { GlobalConfig } from 'payload'

export const ProjectsPage: GlobalConfig = {
  slug: 'projects-page',
  label: 'Projects Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        { name: 'heroLabel', type: 'text', label: 'Hero label', defaultValue: 'Projects' },
        {
          name: 'heroBadgeRight',
          type: 'text',
          label: 'Hero badge (right)',
          defaultValue: 'Case studies across four sectors',
        },
        {
          name: 'heroHeading',
          type: 'textarea',
          label: 'Hero heading',
          defaultValue: 'Work delivered, documented and built.',
        },
        {
          name: 'heroBody',
          type: 'textarea',
          label: 'Hero body',
          defaultValue:
            'A selection of recent engagements. Filter by service or industry to find work closest to your own.',
        },
      ],
    },
    {
      label: 'CTA Section',
      type: 'collapsible',
      fields: [
        {
          name: 'ctaHeading',
          type: 'text',
          label: 'CTA heading',
          defaultValue: 'Have a project like one of these?',
        },
        {
          name: 'ctaButtonLabel',
          type: 'text',
          label: 'CTA button label',
          defaultValue: 'Discuss a project',
        },
      ],
    },
  ],
}
