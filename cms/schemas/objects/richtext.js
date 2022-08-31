export default {
  type: 'object',
  name: 'richtext',
  title: 'Richtext',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {

      return {
        title,
        subtitle: 'Only text section',
      }
    },
  },
}
