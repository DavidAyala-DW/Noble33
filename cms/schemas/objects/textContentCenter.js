export default {
  type: 'object',
  name: 'textContentCenter',
  title: 'Text content centered',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'learn_more',
      title: 'Learn more',
      type: 'object',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string"
        },
        {
          name: "link",
          title: "Link",
          type: "string"
        }
      ]
      
    },
    {
      name: "mobileAlignment",
      title: "Mobile alignment",
      hidden: ({document}) => document?.site != "casaMadera",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
        ],
      },
      initialValue: "center"
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text content centered',
      }
    },
  },
}
