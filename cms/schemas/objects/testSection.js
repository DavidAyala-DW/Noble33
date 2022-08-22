export default {
  type: 'object',
  name: 'testSection',
  title: 'Test Section',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({ description,media }) {
      const block = (description || []).find((block) => block._type === 'block')
      const title = block.children
        .filter((child) => child._type === 'span')
        .map((span) => span.text)
        .join('')

      return {
        title,
        subtitle: 'Test Section',
        media
      }
    },
  },
}
