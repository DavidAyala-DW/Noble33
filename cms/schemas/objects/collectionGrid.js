export default {
  type: 'object',
  name: 'collectionGrid',
  title: 'Collection Grid',
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
          title: "Title",
          name: "title",
          type: "string"
        },
        {
          title: "Link",
          name: "link",
          type: "string"
        }
      ]
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of:[
        {type: "collectionCard"}
      ]
      
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'collections.0.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Collection Grid',
        media,
      }
    },
  },
}
