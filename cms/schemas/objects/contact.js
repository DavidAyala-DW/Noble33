export default {
  type: 'object',
  name: 'contact',
  title: 'Contact',
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
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Contact',
      }
    },
  },
}