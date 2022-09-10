export default {
  type: 'object',
  name: 'menus',
  title: 'Menus',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: 'locations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: "locations"}
          ]
        },
      ],
    },
  ],
  
  preview: {
    select: {
      title: "title",
      media: 'locations.0.image',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'menus',
        media,
      }
    },
  },
}
