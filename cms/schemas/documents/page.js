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
        { type: 'fullscreenNewsletter' }
      ],
    },
    {
      title: 'Sticky header',
      name: 'stickyHeader',
      type: 'boolean',
      initialValue: true,
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
