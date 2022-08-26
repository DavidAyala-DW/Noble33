export default {
  type: 'object',
  name: 'heroWithText',
  title: 'Hero with text',
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
        subtitle: 'Hero with text',
        media,
      }
    },
  },
}
