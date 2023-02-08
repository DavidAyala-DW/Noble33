import { CommentIcon } from '@sanity/icons'

export default {
  name: 'emailsCasaMadera',
  type: 'document',
  title: 'Emails Casa Madera',
  icon: CommentIcon,
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
      name: "location",
      type: "string",
      title: 'Location'
    }

  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title
      }
    },
  },
}
