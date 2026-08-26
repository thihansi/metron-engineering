import type { CollectionConfig } from 'payload'

/** Industry sectors shown in the image-card grid on Home and About */
export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['no', 'title', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'no', type: 'text', label: 'Number (e.g. 01)', required: true },
    { name: 'title', type: 'text', label: 'Industry name', required: true },
    { name: 'body', type: 'textarea', label: 'Short description', required: true },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background image',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Fallback image URL',
    },
    { name: 'order', type: 'number', label: 'Display order', defaultValue: 0 },
  ],
}
