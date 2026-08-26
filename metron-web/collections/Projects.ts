import type { CollectionConfig } from 'payload'

/** Portfolio project case studies */
export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', label: 'Project title', required: true },
    {
      name: 'industry',
      type: 'select',
      label: 'Industry',
      options: [
        { label: 'Mining', value: 'Mining' },
        { label: 'Industrial', value: 'Industrial' },
        { label: 'Infrastructure', value: 'Infrastructure' },
        { label: 'Commercial', value: 'Commercial' },
      ],
      required: true,
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services delivered',
      fields: [{ name: 'service', type: 'text', required: true }],
    },
    { name: 'summary', type: 'textarea', label: 'Card summary', required: true },
    { name: 'brief', type: 'textarea', label: 'The brief (drawer)' },
    {
      name: 'work',
      type: 'array',
      label: 'What we did (drawer bullet list)',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    { name: 'outcome', type: 'textarea', label: 'Outcome (drawer)' },
    {
      name: 'facts',
      type: 'array',
      label: 'Key facts (drawer stats)',
      fields: [
        { name: 'k', type: 'text', label: 'Label', required: true },
        { name: 'v', type: 'text', label: 'Value', required: true },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Main image',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Fallback image URL',
    },
    { name: 'featured', type: 'checkbox', label: 'Show on home page', defaultValue: false },
    { name: 'order', type: 'number', label: 'Display order', defaultValue: 0 },
  ],
}
