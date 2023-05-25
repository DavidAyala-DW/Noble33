import { LockIcon } from '@sanity/icons'

export default {
  name: 'eventCasaMadera',
  type: 'document',
  title: 'Event Casa Madera',
  icon: LockIcon,
  fields: [
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
      initialValue: "casaMadera"
    },
    {
      name: "active",
      title: "Active",
      type: "boolean"
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          title: 'Choose location',
          type: 'reference',
          to: { type: 'locations' },
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description',
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
      name: "date",
      title: "Date",
      type: 'string'
    },
    {
      name: "book_button_text",
      type: "string",
      title: "Book button text"
    },
    {
      name: "book_button_link",
      type: "string",
      title: "Book button link"
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
