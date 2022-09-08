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
      options: {
        dateFormat: 'LLLL',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
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
      hidden: ({document}) => document?.site != "casaMadera",
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
