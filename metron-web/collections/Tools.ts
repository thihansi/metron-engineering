import type { CollectionConfig } from 'payload'

/** Software tools / technical tools shown in the About and Home page grids */
export const Tools: CollectionConfig = {
  slug: 'tools',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'use', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', label: 'Tool name (e.g. Tekla Structures)', required: true },
    { name: 'use', type: 'text', label: 'Use / category (e.g. Steel Detailing)', required: true },
    { name: 'order', type: 'number', label: 'Display order', defaultValue: 0 },
  ],
}
