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
      },
      initialValue: "firstImage"
    },
    {
      name: "links",
      title: "Link",
      type: "links",
      hidden: ({document}) => document?.site != "casaMadera",
    },
    {
      name: "socialMedias",
      type: "socialMedias"
    },
    {
      name: "alignment",
      title: "Alignment",
      type: "string",
      hidden: ({document}) => document?.site != "casaMadera",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
      },
      initialValue: "center"
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
