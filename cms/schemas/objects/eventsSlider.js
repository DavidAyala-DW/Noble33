export default {
  type: 'object',
  name: 'eventsSlider',
  title: 'Events Slider',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "links",
      title: "Link",
      type: "links",
    },
    {
      name: "events",
      type: "array",
      title: "Events",
      of: [
        {
          type: "event",
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: "events.0.image"
    },
    prepare({ title,media }) {
      return {
        title,
        media,
        subtitle: 'Events carousel',
      }
    },
  },
}
