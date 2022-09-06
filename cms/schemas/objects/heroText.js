export default {
  type: 'object',
  name: 'heroText',
  title: 'Hero with only text',
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
      name: "onlyPaddingTop",
      type: 'boolean',
      title: 'Only padding top',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Hero text',
      }
    },
  },
}
