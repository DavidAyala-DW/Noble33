export default {
  type: 'object',
  name: 'moreNews',
  title: 'More News',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "url",
          title: "URL",
          type: "string",
        },
      ]
    },
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
      title: 'title',
      media: "news.0.image"
    },
    prepare({ title,media }) {
      return {
        title,
        media,
        subtitle: 'More news',
      }
    },
  },
}
