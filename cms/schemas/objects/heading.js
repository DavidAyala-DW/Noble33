export default {
  type: 'object',
  name: 'heading',
  title: 'Heading',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title}) {
      return {
        title,
        subtitle: 'Heading',    
      }
    },
  },
}
