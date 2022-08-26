export default {
  type: 'object',
  name: 'details',
  title: 'Details',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "description",
      type: 'text',
      title: "Description"
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
        title,
        subtitle: 'Details',
        media,
      }
    },
  },
}
