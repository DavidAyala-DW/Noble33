import { FolderIcon } from '@sanity/icons'

export default {
  name: 'newsPT',
  type: 'document',
  title: 'Noble33 - News',
  icon: FolderIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'newsPage', title: 'News Page' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      group: 'general',
      title: 'Title'
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      group: 'general'
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'general',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 180,
      },
    },
    {
      name: 'link',
      type: 'object',
      group: 'general',
      title: 'Link',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string"
        },
        {
          name: "url",
          title: "URL",
          type: "string"
        }
      ]
    },
    {
      name: "image",
      type: 'image',
      group: 'general',
      title: 'Image',
    },
    {
      name: 'content',
      group: "newsPage",
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'newsContent' },
        { type: 'heading' },
        { type: 'moreNews' },
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
      initialValue: [
        { _type: 'newsContent' },
        { 
          _type: 'space',
          heightDesktop: 110,
          heightMobile: 120
        },
        { _type: 'moreNews' },
        {
          _type: 'space',
          heightDesktop: 210,
          heightMobile: 120
        },
        {
          _type: 'newsletter',
          title: "Stay Updated",
          titleSize: "normal",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sem ultricies, scelerisque arcu ut, ornare nisi.",
          descriptionSize: "normal",
          placeholder: "Enter your email address"
        },
        {
          _type: 'space',
          heightDesktop: 277,
          heightMobile: 190
        },
      ]
    },
    
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
