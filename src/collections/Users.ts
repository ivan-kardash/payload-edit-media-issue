import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    // Email added by default
    // Add more fields as needed
  ],
}
