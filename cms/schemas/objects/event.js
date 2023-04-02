export default {
  type: 'object',
  name: 'event',
  title: 'Event',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      hidden: ({document}) => document?.site == "casaMadera",
    },
    {
      name: "description2",
      title: "Description",
      type: 'simplePortableText',
      hidden: ({document}) => document?.site != "casaMadera",
    },
    {
      name: "image",
      type: 'image',
      title: 'Image',
      description: `
        Recommended size: 1050x810, Aspect ratio: 130:100, Max file size: 350kb
      `
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alt Text"
    },
    {
      name: "link",
      title: "Link",
      type: 'object',
      fields: [
        {
          name: "title",
          title: "Title",
          type: 'string',
        },
        {
          name: "url",
          title: "URL",
          type: 'string',
        }
      ]
    },
    {
      name: "date",
      title: "Date",
      type: 'datetime',
      hidden: ({document}) => document?.site == "sparrow",
      options: {
        dateFormat: 'LLLL',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
    },
    {
      name: "dates",
      title: "Dates",
      type: 'string',
      hidden: ({document}) => document?.site != "sparrow",
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
      initialValue: "firstImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Event',
        media,
      }
    },
  },
  
}
