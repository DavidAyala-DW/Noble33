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
      name: "hover_state_image",
      type: 'image',
      title: 'Hover state image',
    },
    {
      name: "link",
      type: "string",
      title: 'Link'
    },
    {
      name: "is_reservation",
      type: "boolean",
      title: 'Is reservation?',
      initialValue: false
    }
  ]
}
