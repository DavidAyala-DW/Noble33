export default {
  type: 'object',
  name: 'event',
  title: 'Event',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: "image",
      type: 'image',
      title: 'Image',
    },
    {
      name: "link",
      title: "Link",
      type: 'object',
      fields: [
        {
          name: "title",
          title: "Title",
          type: 'string',
        },
        {
          name: "url",
          title: "URL",
          type: 'string',
        }
      ]
    },
    {
      name: "date",
      title: "Date",
      type: 'datetime',
      options: {
        dateFormat: 'LLLL',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
    }
  ]
}
