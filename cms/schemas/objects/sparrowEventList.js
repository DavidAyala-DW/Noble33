export default {
  type: 'object',
  name: 'sparrowEventList',
  title: 'Events List',
  fields: [
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields:[
            {
              type: "reference",
              name: "event",
              title: "Event",
              to: [
                {type: "eventSparrow"}
              ]
            },
            {
              name: "position",
              title: "Position",
              type: "string",
              options: {
                list:[
                  {title: "First image", value: "firstImage"},
                  {title: "First text", value: "fistText"},
                ]
              },
              initialValue: "firstImage",
            }
          ],
          preview: {
            select: {
              title: 'event.title',
              media: 'event.image',
            },
            prepare({title, media}) {            
              return {
                title,
                subtitle: 'Event Item',
                media,
              }
            },
          }
        },
      ]     
    },
  ],
  preview: {
    select: {
      media: "events.0.event.image"
    },
    prepare({ media }) {
      return {
        title: "Events list",
        media,
        subtitle: 'Events List',
      }
    },
  },
}