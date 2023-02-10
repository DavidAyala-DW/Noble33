export default {
  type: 'object',
  name: 'privateEventsList',
  title: 'Private events list',
  fields: [
    {
      title: "Page title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      name: 'eventsList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: "eventsCasaMadera"},
          ],
        },
      ],
    },
  ],
  
  preview: {
    select: {
      title: "title",
      media: 'eventsCasaMadera.0.image',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Private Events',
        media,
      }
    },
  },
}
