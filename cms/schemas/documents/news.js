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
      name: 'seo_title',
      type: 'string',
      title: 'Title (SEO)',
    },
    {
      name: 'description_seo',
      type: 'text',
      title: 'Description (SEO',
      description: 'Description shown in search results'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc.'
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
      name: "publicationLogo",
      type: 'image',
      group: 'general',
      title: 'Publication logo',
      description: `
        Recommended: SVG or PNG
      `
    },
    {
      name: "image",
      type: 'image',
      group: 'general',
      title: 'Image',
      description: `
        Recommended size: 1050x810, Aspect ratio: 130:100, Max file size: 350kb
      `
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
          heightTablet: 77,
          heightMobile: 120
        },
        { 
          _type: 'moreNews',
          title: "More in the News",
          Link: {
            title: "VIEW ALL",
            url: "/press"
          }
        },
        {
          _type: 'space',
          heightDesktop: 210,
          heightTablet: 150,
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
          heightTablet: 196,
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
