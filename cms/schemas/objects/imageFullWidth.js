export default {
  type: 'object',
  name: 'imageFullWidth',
  title: 'Image full width',
  fields: [
    {
      name: "image",
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({ media }) {
      return {
        title: "Image full width",
        subtitle: 'Image full width',
        media,
      }
    },
  },
}
