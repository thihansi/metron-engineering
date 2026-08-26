import type { CollectionConfig } from 'payload'

/** Metron Specials product catalogue items */
export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['code', 'title', 'category', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'code', type: 'text', label: 'Product code (e.g. MS-01)', required: true },
    { name: 'title', type: 'text', label: 'Product name', required: true },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { label: 'Access', value: 'Access' },
        { label: 'Ventilation', value: 'Ventilation' },
        { label: 'Fabrication', value: 'Fabrication' },
      ],
      required: true,
    },
    { name: 'short', type: 'textarea', label: 'Short description (card)', required: true },
    { name: 'long', type: 'textarea', label: 'Full description (drawer)' },
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
    {
      name: 'gallery',
      type: 'array',
      label: 'Gallery images (fallback URLs)',
      fields: [{ name: 'url', type: 'text', required: true }],
    },
    {
      name: 'specs',
      type: 'array',
      label: 'Specifications',
      fields: [
        { name: 'k', type: 'text', label: 'Label', required: true },
        { name: 'v', type: 'text', label: 'Value', required: true },
      ],
    },
    {
      name: 'options',
      type: 'array',
      label: 'Available options',
      fields: [{ name: 'option', type: 'text', required: true }],
    },
    { name: 'order', type: 'number', label: 'Display order', defaultValue: 0 },
  ],
}
