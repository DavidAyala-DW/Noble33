import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'page',
  type: 'document',
  title: 'Noble33 - pages',
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
      options: {
        list: [
          { title: "Noble33", value: "noble33" },
          { title: "Casa Madera", value: "casaMadera" },
          { title: "Sparrow", value: "sparrow" },
        ],
      },
      initialValue: "noble33"
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
        { type: 'imageFullWidth' },
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
        { type: 'contact' },
        { type: 'richtext' },
        { type: 'newsSlider' },
      ],
    },
    {
      title: 'Sticky Header?',
      name: 'stickyHeader',
      type: 'boolean'
    },
    // {
    //   title: 'Background color in header?',
    //   name: 'dinamycHeader',
    //   type: 'boolean',
    //   initialValue: false
    // },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
