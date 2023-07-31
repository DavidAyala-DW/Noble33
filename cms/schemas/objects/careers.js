export default {
  type: 'object',
  name: 'careers',
  title: 'Careers',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'ubication',
      type: 'string',
      title: 'Ubication',
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      name: "jobs",
      type: "array",
      title: "Jobs",
      of: [
        {
          type: 'object',
          title: "job",
          name: "Job",
          fields:[
            {
              type: "string",
              name: "role",
              title: "Role"
            },
            {
              type: "text",
              name: "description",
              title: "Description"
            }
          ]
        }
      ]
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "email",
      type: "string",
      title: "Email"
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media
      }
    },
  },
}