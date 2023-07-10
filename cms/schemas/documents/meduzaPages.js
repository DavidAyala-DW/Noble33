import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'meduzaPages',
  type: 'document',
  title: 'Meduza - pages',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "site",
      title: "Site",
      type: "string",
      readOnly: true,
      hidden: true,
      initialValue: "meduza"
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'headingWithCTA' },
        { type: 'space' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'news' },
        { type: 'contact' },
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
