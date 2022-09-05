export default {
  type: 'object',
  name: 'detail',
  title: 'Details',
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
    },
    {
      name: "image",
      type: 'image',
      title: 'Image',
    },
    {
      name: "featuredDetail",
      type: "boolean",
      title: 'Featured detail',
      hidden: ({document}) => document?.site == "casaMadera",
    },
    
  ]
}
