import { LockIcon } from '@sanity/icons'

export default {
  name: 'meduzaPrivateEvents',
  type: 'document',
  title: 'Meduza Private Events',
  icon: LockIcon,
  fields: [
    {
      name: "site",
      title: "Site",
      type: "string",
      readOnly: true,
      hidden: true,
      initialValue: "meduza"
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc.'
    },
    {
      name: 'slug', 
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 180,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: `
        Recommended size: 888x657, Aspect ratio: 135:100, Max file size: 350kb
      `
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alt Text"
    },
    {
      name: "book_link",
      type: "string",
      title: "Book Link"
    },
    {
      name: "reservation_link",
      type: "string",
      title: "Reservation Link"
    },
    {
      name: 'content',
      type: 'array',
      title: 'Sections',
      of: [
        { type: 'hero' },
        { type: 'bannerWithText' },
        { type: 'space' },
        { type: 'headingWithCTA' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'details' },
        { type: 'event' },
        { type: 'newsletter' },
        { type: 'contact' },
        { type: 'richtext' },
        { type: 'gallery' },
      ],
      initialValue: [
        { 
          _type: 'hero',
        },
        {
          _type: 'space',
          heightDesktop: 210,
          heightTablet: 150,
          heightMobile: 120
        },
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    },
    prepare({ title, media }) {
      return {
        title,
        media
      }
    },
  },
}
