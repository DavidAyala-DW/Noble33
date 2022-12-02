export default {
  type: 'object',
  name: 'eventsCarousel',
  title: 'Events carousel',
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
      name: "events",
      type: "array",
      title: "Events",
      of: [
        {
          type: "object",
          fields:[
            {
              name: "image",
              type: "image",
              title: "Image",
              description: `
                Recommended size: 500x294, Aspect ratio: 170:100, Max file size: 350kb
              `
            },
            {
              name: "title",
              title: "Title",
              type: "string"
            },
            {
              name: "description",
              title: "Description",
              type: "string"
            },
            {
              name: "view_more",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string"
                },
                {
                  name: "link",
                  title: "Link",
                  type: "string"
                }
              ]
            }
          ]
        }
      ]
    }
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
        subtitle: 'Events carousel',
      }
    },
  },
}
