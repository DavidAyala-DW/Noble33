export default {
  type: 'object',
  name: 'reservations',
  title: 'Reservations',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: 'reservations',
      type: 'array',
      of: [
        {
          type: 'object',
          name: "reservation",
          fields:[
            {
              type: "image",
              name: "image",
              title: "Image"
            },
            {
              type: "string",
              name: "alt_text",
              title: "Alt text"
            },
            {
              type: "string",
              name: "heading",
              title: "Heading"
            },
            {
              type: "string",
              name: "reservation_link",
              title: "Reservation Link"
            }
          ]
        },
      ],
    },
  ],
  
  preview: {
    select: {
      title: "title",
      media: 'reservations.0.image',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Reservations',
        media,
      }
    },
  },
}
