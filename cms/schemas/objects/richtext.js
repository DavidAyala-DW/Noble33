export default {
  type: 'object',
  name: 'richtext',
  title: 'Rich text',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
      hidden: ({document}) => document?.site == "meduza"
    },
    {
      name: 'content',
      type: 'blockContent',
      title: 'Content',
      hidden: ({document}) => document?.site != "meduza"
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Rich text',
      };
    },
  },
};
