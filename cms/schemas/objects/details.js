export default {
  type: 'object',
  name: 'details',
  title: 'Details',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: ({document}) => document?.site == "casaMadera",
    },
    {
      name: "description",
      type: 'text',
      title: "Description",
      hidden: ({document}) => document?.site == "casaMadera",
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of:[
        {type: "detail"}
      ]
      
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'details.0.image',
    },
    prepare({ title, media }) {
      return {
        title : (title ? title : "Details"),
        subtitle: 'Details',
        media,
      }
    },
  },
}
