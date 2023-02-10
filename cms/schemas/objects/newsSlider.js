export default {
  type: 'object',
  name: 'newsSlider',
  title: 'News Slider',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'view_all',
      type: 'object',
      title: 'View All',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
      ]
    },
    {
      name: "news_slider",
      title: "News Slider",
      type: "array",
      of: [
        {
          type: 'reference',
          to: [
            { type: 'newsPT' },
          ]
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: "news_slider.0.image"
    },
    prepare({ title,media }) {
      return {
        title,
        media,
        subtitle: 'News Slider',
      }
    },
  },
}
