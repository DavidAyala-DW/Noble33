export default {
  type: 'object',
  name: 'heroHomepage',
  title: 'Hero Homepage',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description',
    },
    {
      name: 'reservation',
      title: 'Reservation',
      type: 'object',
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string"
        },
        {
          name: "link",
          title: "Link",
          type: "string"
        }
      ]
      
    },
    {
      name: 'backgroundImage',
      type: 'backgroundImage',
      title: "image"
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero Homepage',
        media,
      }
    },
  },
}
