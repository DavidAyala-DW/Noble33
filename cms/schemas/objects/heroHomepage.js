export default {
  type: 'object',
  name: 'heroHomepage',
  title: 'Hero Homepage',
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
      name: 'reservation',
      title: 'Reservation',
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
          type: "string"
        }
      ]
      
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of:[
        {type: "backgroundImage"}
      ],
      description: `
        Desktop: recommended size: 2016x735, Aspect ratio: 274:100, Max file size: 350kb,
        Mobile: Recommended size: 515x241.5, Aspect ratio: 213:100, Max file size: 150kb
      `
    }

  ],
  preview: {
    select: {
      title: 'title',
      media: 'slides.0.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero Homepage',
        media,
      }
    },
  },
}
