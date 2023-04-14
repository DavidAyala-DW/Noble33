export default {
  title: 'Background image',
  name: 'backgroundImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Desktop',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'imageMobile',
      type: 'image',
      title: 'Mobile',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt text',
    }
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare(props) {
      const { media } = props;
      return {
        title: "Background Image",
        media
      }
    },
  },
}
