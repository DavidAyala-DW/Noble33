export default {
  type: 'object',
  name: 'news',
  title: 'News',
  fields: [
    {
      name: 'news',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: "newsPT"}
          ]
        },
      ],
    },
  ],
  
  preview: {
    select: {
      media: 'news.0.image',
    },
    prepare({media}) {
      return {
        title: "News",
        subtitle: 'News',
        media,
      }
    },
  },
}
