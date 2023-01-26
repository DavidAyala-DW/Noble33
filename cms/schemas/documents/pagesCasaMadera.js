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
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
        { type: 'details' },
        { type: 'event' },
        { type: 'newsletter' },
        { type: 'contact' },
        { type: 'richtext' },
        { type: 'menus' },
        { type: 'privateEventsList' },
        { type: 'reservations' }
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
