import { FolderIcon } from '@sanity/icons'

export default {
  name: 'meduzaNews',
  type: 'document',
  title: 'Meduza - News',
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
      description: `Recommended: SVG or PNG`
    },
    {
      name: "publication_logo_alt_text",
      type: "string",
      title: "Publication logo - Alt text"
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
      name: "image_alt_text",
      type: "string",
      title: "Featured Image - Alt text"
    },
    {
      name: 'content',
      group: "newsPage",
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'space' },
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
