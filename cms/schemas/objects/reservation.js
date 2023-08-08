export default {
  type: 'object',
  name: 'reservation',
  title: 'Reservation',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Reservations',
    },
    {
      name: 'reservation_image',
      type: 'image',
      title: 'Image'
    },
    {
      name: "reservation_title",
      type: "string",
      title: "Title"
    },
    {
      name: 'reservation_links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'reservation',
          fields: [
            {
              type: 'string',
              name: 'text',
              title: 'Text',
            },
            {
              type: 'url',
              name: 'link',
              title: 'Link',
            }
          ],
        },
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'reservation_image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Reservations',
        media,
      };
    },
  },
};
