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
      of: [
        {
          type: 'object',
          fields:[
            {
              type: "reference",
              name: "collection",
              title: "Collection",
              to: [
                {type: "nobleVenue"}
              ]
            },
            {
              name: "custom_link",
              "type": "string",
              "title": "Custom Link"
            }
          ],
          preview: {
            select: {
              title: 'collection.title',
              media: 'collection.image',
            },
            prepare({title, media}) {            
              return {
                title,
                subtitle: 'Collection Item',
                media,
              }
            },
          }
        },
      ],
      description: `
        Recommended size: 840x624, Aspect ratio: 134:100, Max file size: 350kb
      `      
    },
    {
      name: "are_coming_soon",
      title: "Are comming Soon?",
      type: "boolean",
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'collections.0.collection.image',
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
