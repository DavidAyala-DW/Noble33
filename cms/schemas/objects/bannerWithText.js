export default {
  type: 'object',
  name: 'bannerWithText',
  title: 'Banner with text',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description',
    },
    {
      name: 'learn_more',
      title: 'Learn more',
      type: 'object',
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
      
    },
    {
      name: 'backgroundImage',
      type: 'backgroundImage',
      title: "image"
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero Homepage',
        media,
      }
    },
  },
}
