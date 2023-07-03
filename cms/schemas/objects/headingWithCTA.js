export default {
  type: 'object',
  name: 'headingWithCTA',
  title: 'Heading with CTA',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'is_h1',
      type: 'boolean',
      title: 'Is H1?'
    },
    {
      name: "is_newsletter",
      type: "boolean",
      title: "Is newsletter?",
    },
    {
      name: "description",
      title: "Description",
      type: 'simplePortableText'
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string"
        },
        {
          name: "link",
          title: "Link",
          type: "string"
        }
      ]
      
    }
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text with CTA',
      }
    },
  },
}
