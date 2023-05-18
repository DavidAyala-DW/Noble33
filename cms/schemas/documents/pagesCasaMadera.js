import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'pagesCasaMadera',
  type: 'document',
  title: 'Casa madera - pages',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
    },
    {
      name: 'seo_title',
      type: 'string',
      title: 'Title (SEO)',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description shown in search results'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc.'
    },
    {
      name: "site",
      title: "Site",
      type: "string",
      readOnly: true,
      hidden: true,
      options: {
        list: [
          { title: "Noble33", value: "noble33" },
          { title: "Casa Madera", value: "casaMadera" },
        ],
      },
      initialValue: "casaMadera"
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'eventList' },
        { type: 'details' },
        { type: 'event' },
        { type: 'newsletter' },
        { type: 'contact' },
        { type: 'richtext' },
        { type: 'menus' },
        { type: 'privateEventsList' },
        { type: 'reservations' },
        { type: 'articleGrid' },
        { type: 'articleSlider' },
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
