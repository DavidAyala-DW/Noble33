export default {
  type: 'object',
  name: 'details',
  title: 'Details',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: ({document}) => document?.site == "casaMadera",
    },
    {
      name: "description",
      type: 'text',
      title: "Description",
      hidden: ({document}) => document?.site == "casaMadera",
    },
    {
      name: "video",
      type: 'url',
      label: 'Video',
      hidden: ({document}) => document?.site != "noble33",
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of:[
        {type: "detail"}
      ],
      description: `
        Recommended size: 840x480, Aspect ratio: 175:100, Max file size: 350kb
      `
      
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'details.0.image',
    },
    prepare({ title, media }) {
      return {
        title : (title ? title : "Details"),
        subtitle: 'Details',
        media,
      }
    },
  },
}
