export default {
  type: 'object',
  name: 'imageWithText',
  title: 'Image with text',
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
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list:[
          {title: "First image", value: "firstImage"},
          {title: "First text", value: "fistText"},
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({title,media }) {
      return {
        title,
        subtitle: 'Image with text',
        media
      }
    },
  },
}
