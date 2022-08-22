import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'heading' },
        { type: 'testSection' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
