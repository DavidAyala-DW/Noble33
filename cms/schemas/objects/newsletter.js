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
      name: 'is_h1',
      type: 'boolean',
      title: 'Is H1?'
    },
    {
      title: 'Title size',
      name: 'titleSize',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'normal'},
          {title: 'Large', value: 'large'},
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: "text"      
    },
    {
      title: 'Description size',
      name: 'descriptionSize',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'normal'},
          {title: 'Large', value: 'large'},
        ]
      }
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
