export default {
  type: 'object',
  name: 'newsItem',
  title: 'News item',
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
          type: "string"
        },
        {
          name: "url",
          title: "URL",
          type: "string"
        }
      ]
    },
    {
      name: "image",
      type: 'image',
      title: 'Image',
    }
  ]
}
