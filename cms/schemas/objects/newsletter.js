export default {
  type: 'object',
  name: 'newsletter',
  title: 'Newsletter',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: "string"      
    },
    {
      name: 'description',
      title: 'Description',
      type: "text"      
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: "string"      
    },
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: "description"
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle
      }
    },
  },
}
