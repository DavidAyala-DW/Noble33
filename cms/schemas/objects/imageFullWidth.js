export default {
  type: 'object',
  name: 'imageFullWidth',
  title: 'Image full width',
  fields: [
    {
      name: "image",
      type: 'image',
      title: 'Image',
      description: `
        Recommended size: 1780x868, Aspect ratio: 205:100, Max file size: 350kb
      `
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alt Text"
    }
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
