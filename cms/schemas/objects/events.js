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
      ],
      description: `
        Recommended size: 765x637.5, Aspect ratio: 125:100, Max file size: 350kb
      `
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
