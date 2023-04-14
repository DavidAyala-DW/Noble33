import { LemonIcon } from '@sanity/icons'

export default {
  name: 'nobleVenue',
  type: 'document',
  title: 'Noble Venue',
  icon: LemonIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: "image",
      type: 'image',
      title: 'Image (Desktop)',
    },
    {
      name: "mobile_image",
      type: 'image',
      title: 'Image (Mobile)',
    },
    {
      name: "hover_state_image",
      type: 'image',
      title: 'Hover state image',
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt text',
    },
    {
      name: "link",
      type: "string",
      title: 'Link'
    },
    {
      name: "is_coming_soon",
      type: "boolean",
      title: 'Is coming soon?'      
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
