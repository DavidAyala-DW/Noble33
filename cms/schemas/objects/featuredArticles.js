export default {
  name: 'featuredArticles',
  title: 'Featured articles',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [
        {
          title: 'Article',
          type: 'reference',
          to: { type: 'meduzaArticles' },
        },
        
      ],
      validation: Rule => Rule.max(4)
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Featured articles',
      };
    },
  },
};
