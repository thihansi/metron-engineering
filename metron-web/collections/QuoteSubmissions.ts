import type { CollectionConfig } from 'payload'

/**
 * Public-facing quote/enquiry form submissions.
 * Create access is public, read/update/delete is admin-only.
 */
export const QuoteSubmissions: CollectionConfig = {
  slug: 'quote-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'serviceRequired', 'createdAt'],
    group: 'Forms',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'company', type: 'text', label: 'Company' },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'phone', type: 'text', label: 'Phone' },
    {
      name: 'serviceRequired',
      type: 'text',
      label: 'Service required',
      required: true,
    },
    { name: 'projectLocation', type: 'text', label: 'Project location' },
    { name: 'indicativeTiming', type: 'text', label: 'Indicative timing' },
    { name: 'description', type: 'textarea', label: 'Project description', required: true },
    {
      name: 'attachments',
      type: 'array',
      label: 'Attached file names',
      fields: [
        { name: 'filename', type: 'text' },
        { name: 'size', type: 'text' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Reviewed', value: 'reviewed' },
        { label: 'Quoted', value: 'quoted' },
        { label: 'Won', value: 'won' },
        { label: 'Lost', value: 'lost' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal notes',
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
