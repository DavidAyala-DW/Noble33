export default {
  type: 'object',
  name: 'team',
  title: 'Team',
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
      name: 'team',
      title: 'Team',
      type: 'array',
      of:[
        {type: "member"}
      ]
      
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'team.0.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Team',
        media,
      }
    },
  },
}
