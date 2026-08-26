import type { CollectionConfig } from 'payload'

/** A single engineering discipline / service offering shown on /services */
export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'no', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'no', type: 'text', label: 'Number (e.g. 01)', required: true },
    { name: 'title', type: 'text', label: 'Title', required: true },
    {
      name: 'body',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Bullet items',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    { name: 'tools', type: 'text', label: 'Tools / standards label (e.g. AS 4100 · Tekla)' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Section image',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Fallback image URL (Unsplash etc.)',
      admin: { description: 'Used when no upload is provided' },
    },
    { name: 'order', type: 'number', label: 'Display order', defaultValue: 0 },
  ],
}
