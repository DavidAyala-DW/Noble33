export default {
    type: 'object',
    name: 'fullscreenNewsletter',
    title: 'Fullscreen newsletter',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        name: 'placeholder',
        type: 'string',
        title: 'Placeholder',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: `
          Recommended size: 1090x780, Aspect ratio: 1040:100, Max file size: 350kb
        `
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: "image"
      },
      prepare({ title,media }) {
        return {
          title,
          media,
          subtitle: 'Fullscreen newsletter',
        }
      },
    },
  }
  