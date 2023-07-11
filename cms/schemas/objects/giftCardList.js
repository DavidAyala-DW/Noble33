export default {
  type: 'object',
  name: 'giftCardList',
  title: 'Gift card list',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Gift Cards',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'simplePortableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'locations.0.location.image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Gift Card List',
      };
    },
  },
};
