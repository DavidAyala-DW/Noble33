import { BookIcon } from '@sanity/icons';

export default {
  name: 'pressTocaMadera',
  title: 'Toca Madera - Press',
  type: 'document',
  icon: BookIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'simplePortableText',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publicationName',
      title: 'Publication name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publicationLogo',
      title: 'Publication logo',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Cover image',
      type: 'image',
    },
  ],
};
