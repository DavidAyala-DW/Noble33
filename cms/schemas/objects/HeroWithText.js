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
      title: "image",
      description: `
        Desktop: Recommended size: 1900x650, Aspect ratio: 292:100, Max file size: 350kb,
        Mobile: Recommended size: 500x275, Aspect ratio: 182:100, Max file size: 150kb,
      `
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
