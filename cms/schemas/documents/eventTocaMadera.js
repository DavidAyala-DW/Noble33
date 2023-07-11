import { CalendarIcon } from '@sanity/icons';

export default {
  name: 'eventTocaMadera',
  type: 'document',
  title: 'Toca Madera - Event',
  icon: CalendarIcon,
  fields: [
    {
      name: 'site',
      title: 'Site',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'tocaMadera',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          title: 'Choose location',
          type: 'reference',
          to: { type: 'locationTocaMadera' },
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: `
        Recommended size: 888x657, Aspect ratio: 135:100, Max file size: 350kb
      `,
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'book_button_text',
      type: 'string',
      title: 'Book button text',
    },
    {
      name: 'book_button_link',
      type: 'string',
      title: 'Book button link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
