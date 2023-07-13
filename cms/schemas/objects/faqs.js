export default {
  type: 'object',
  name: 'faqs',
  title: 'FAQS',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "faqs",
      type: "array",
      title: "FAQs",
      of: [
        {
          type: 'object',
          title: "faq",
          name: "FAQ",
          fields:[
            {
              type: "string",
              name: "question",
              title: "Question"
            },
            {
              type: "text",
              name: "answer",
              title: "Answer"
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title
      }
    },
  },
}