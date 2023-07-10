export default {
  type: 'object',
  name: 'contact',
  title: 'Contact',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "description",
      type: 'text',
      title: "Description"
    },
    {
      name: "locations",
      type: "array",
      title: "Locations",
      of: [
        {
          type: 'object',
          title: "Location",
          name: "location",
          fields:[
            {
              type: "string",
              name: "title",
              title: "Title"
            },
            {
              type: "string",
              name: "phone_number",
              title: "Phone number"
            }
          ]
        }
      ],
      hidden: ({document}) => document?.site != "meduza",
    },
    {
      name: "consent_message",
      type: "text",
      title: "Consent message",
      hidden: ({document}) => document?.site != "meduza",
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Contact',
      }
    },
  },
}