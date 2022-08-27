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
        { type: 'heroHomepage' },
        { type: 'space' },
        { type: 'collectionGrid' },
        { type: 'textContentCenter' },
        { type: 'heroText' },
        { type: 'eventsCarousel' },
        { type: 'gallery' },
        { type: 'imageWithText' },
        { type: 'bannerWithText' },
        { type: 'restaurantsCarousel' },
        { type: 'heroWithText' },
        { type: 'details' },
        { type: 'team' },
        { type: 'news' },
        { type: 'newsletter' },
        { type: 'hero' },
        { type: 'events' },
      ],
    },
    {
      title: 'Sticky Header?',
      name: 'stickyHeader',
      type: 'boolean'
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
