import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    useAsTitle: 'filename',
  },
  access: {
    // All authenticated users can upload; public can read
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt text',
    },
  ],
}
