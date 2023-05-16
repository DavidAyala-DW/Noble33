import { PersonIcon } from '@sanity/icons'

export default {
  name: 'authorCasaMadera',
  title: 'Author',
  type: 'document',
  icon: PersonIcon,
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
}
