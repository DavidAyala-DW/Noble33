export default {
  type: 'object',
  name: 'sparrowGiftCardList',
  title: 'Gift Card List',
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
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'location',
              title: 'Location',
              type: 'reference',
              to: { type: 'locationsSparrow' },
              validation: (Rule) => Rule.required()
            },
            {
              name: 'giftCardUrl',
              title: 'Gift Card URL',
              type: 'url',
              validation: (Rule) => Rule.required()
            },
          ],
          preview: {
            select: {
              title: 'location.title',
              giftCardUrl: 'giftCardUrl',
              media: 'location.image',
            },
            prepare({ title, giftCardUrl, media }) {
              return {
                title,
                subtitle: `Gift card URL: ${giftCardUrl}`,
                media,
              };
            },
          },
        },
      ],
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
