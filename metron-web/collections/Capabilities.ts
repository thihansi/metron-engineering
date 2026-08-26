import type { CollectionConfig } from 'payload'

/** The 8 engineering disciplines shown in the capability grid */
export const Capabilities: CollectionConfig = {
  slug: 'capabilities',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['no', 'title', 'tag', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'no', type: 'text', label: 'Number (e.g. 01)', required: true },
    { name: 'title', type: 'text', label: 'Capability title', required: true },
    { name: 'body', type: 'textarea', label: 'Short description', required: true },
    { name: 'tag', type: 'text', label: 'Tag / standard (e.g. AS 4100)' },
    { name: 'order', type: 'number', label: 'Display order', defaultValue: 0 },
  ],
}
