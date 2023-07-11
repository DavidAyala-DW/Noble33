export default {
  name: 'pressList',
  title: 'Press list',
  type: 'object',
  fields: [
    {
      name: 'pressItems',
      title: 'Press items',
      type: 'array',
      of: [
        {
          title: 'Choose press item',
          type: 'reference',
          to: { type: 'pressTocaMadera' },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Press list',
      };
    },
  },
};
