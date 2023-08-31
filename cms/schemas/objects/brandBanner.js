export default {
  name: 'brandBanner',
  title: 'Brand banner',
  type: 'object',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'A Mediterranean Inspired Restaurant Experience',
    },
  ],
  preview: {
    select: {
      title: 'subtitle',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Brand banner',
      };
    },
  },
};
