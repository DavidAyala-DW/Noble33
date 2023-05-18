export default {
  name: 'articleSlider',
  title: 'Featured article slider',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Featured article slider',
      };
    },
  },
}
