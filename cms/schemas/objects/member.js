export default {
  type: 'object',
  name: 'member',
  title: 'Member',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: "image",
      type: 'image',
      title: 'Image',
      description: `
        Recommended size: 600x600, Aspect ratio: 1:1, Max file size: 350kb
      `
    }
  ]
}
