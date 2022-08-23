export default {
  type: 'object',
  name: 'collectionCard',
  title: 'Collection Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: "image",
      type: 'image',
      title: 'Image',
    },
    {
      name: "link",
      type: "string",
      title: 'Link'
    }
  ]
}
