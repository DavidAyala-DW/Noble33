export default {
  type: 'object',
  name: 'menusContent',
  title: 'Menus Content',
  fields: [
    {
      name: "show",
      title: "Show?",
      type: "boolean",
      initialValue: true
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Menus Content",
      }
    },
  },
}
