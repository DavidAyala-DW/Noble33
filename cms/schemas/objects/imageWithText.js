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
      description: `
        Recommended size: 1090x780, Aspect ratio: 1040:100, Max file size: 350kb
      `
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
      hidden: ({document}) => document?.site == "noble33",
    },
    {
      name: "socialMedias",
      type: "socialMedias",
      hidden: ({document}) => document?.site == "noble33",
    },
    {
      name: "menus",
      title: "Show Menus?",
      type: "boolean",
      initialValue: false,
      hidden: ({document}) => document?.site == "noble33",
    },
    {
      name: "show_locations",
      title: "Show Locations?",
      type: "boolean",
      initialValue: false,
      hidden: ({document}) => document?.site == "noble33",
    },
    {
      name: "imageAspectRatio",
      title: "Image aspect ratio (Desktop)",
      type: "string",
      hidden: ({document}) => document?.site == "noble33",
      options: {
        list: [
          { title: "Landscape", value: "landscape" },
          { title: "Portrait", value: "portrait" },
        ],
      },
      initialValue: "landscape"
    },
    {
      name: "imagesPosition",
      title: "Image position (Ultrawide)",
      type: "string",
      hidden: ({document}) => document?.site == "noble33",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
      },
      initialValue: "center"
    },
    {
      name: "imagePositionTablet",
      title: "Image position (Tablet)",
      type: "string",
      hidden: ({document}) => document?.site == "noble33",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
      },
      initialValue: "center"
    },
    {
      name: "alignment",
      title: "Alignment",
      type: "string",
      hidden: ({document}) => document?.site == "noble33",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
      },
      initialValue: "center"
    },
    {
      name: "isPressPage",
      title: "Is press page?",
      type: "boolean",
      hidden: ({document}) => document?.site == "noble33",
      initialValue: false
    },
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