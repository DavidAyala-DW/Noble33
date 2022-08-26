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
      title: 'Description container',
      name: 'description_container',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'format-1'},
          {title: 'Large', value: 'format-2'},
        ]
      }
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
    {
      title: 'Image size',
      name: 'image_size',
      type: 'string',
      options: {
        list: [
          {title: 'Original', value: 'original'},
          {title: 'Format 1', value: 'format-1'},
          {title: 'Format 2', value: 'format-2'},
        ]
      }
    }
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
