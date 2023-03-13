export default {
  type: 'object',
  name: 'eventList',
  title: 'Event List',
  fields: [
    {
      name: "events",
      type: "array",
      title: "Events",
      of: [        
        {
          type: "reference",
          to: [
            {
              type: 'eventCasaMadera',
            },
          ],
        }
      ]
    }
  ],
  preview: {
    select: {
      media: "events.0.image"
    },
    prepare({ media }) {
      return {
        title: "Events",
        media,
        subtitle: 'Event list',
      }
    },
  },
}