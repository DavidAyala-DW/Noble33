export default {
  type: 'object',
  name: 'knowBeforeYouGo',
  title: 'Know Before you Go',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },    
    {
      name: 'content',
      type: 'blockContent',
      title: 'Content'
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Know Before you Go',
      }
    },
  },
}
