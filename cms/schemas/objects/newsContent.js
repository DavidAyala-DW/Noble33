export default {
  type: 'object',
  name: 'newsContent',
  title: 'News Content',
  fields: [
    {
      name: "show",
      title: "Show?",
      type: "boolean",
      initialValue: true
    }
  ],
  preview: {
    select: {
      show: 'show',
    },
    prepare() {
      return {
        title: "News Content",
      }
    },
  },
}
