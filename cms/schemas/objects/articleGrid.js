export default {
  name: 'articleGrid',
  title: 'Article grid',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hasFeatured',
      title: 'Include featured articles',
      type: 'boolean',
      initialValue: false,
      hidden: ({document}) => document?.site == "meduza"
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Article grid',
      };
    },
  },
};
