export default {
  type: 'object',
  name: 'heroText',
  title: 'Hero with only text',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string"
        },
        {
          name: "link",
          title: "Link",
          type: "link"
        }
      ]      
    },
    {
      name: "onlyPaddingTop",
      type: 'boolean',
      title: 'Only padding top',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Hero text',
      }
    },
  },
}
