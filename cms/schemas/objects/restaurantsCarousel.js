export default {
  type: 'object',
  name: 'restaurantsCarousel',
  title: 'Restaurants carousel',
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
      media: "events.0.image"
    },
    prepare({ title,media }) {
      return {
        title,
        media,
        subtitle: 'Restaurants carousel',
      }
    },
  },
}
