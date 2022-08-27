export default {
  type: 'object',
  name: 'events',
  title: 'Events',
  fields: [
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of:[
        {type: "event"}
      ]
      
    },
  ],
  preview: {
    select: {
      media: 'events.0.image',
    },
    prepare({ media }) {
      return {
        title: "Events",
        subtitle: 'Events',
        media,
      }
    },
  },
}
