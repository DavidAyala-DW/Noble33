import { UserIcon } from '@sanity/icons';

export default {
  name: 'meduzaAuthor',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
