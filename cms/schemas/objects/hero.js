export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'backgroundImage',
      type: 'backgroundImage',
      title: "image",
      description: `
        Desktop: Recommended size: 1900x730, Aspect ratio: 260:100, Max file size: 450kb,
        Mobile: Recommended size: 675x380, Aspect ratio: 178:100, Max file size: 250kb,
      `
    },
  ],
  preview: {
    select: {
      media: 'backgroundImage.image',
    },
    prepare({ media }) {
      return {
        title: "Hero",
        subtitle: 'Hero with text',
        media,
      }
    },
  },
}
