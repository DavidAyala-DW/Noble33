export default {
  type: 'object',
  name: 'gallery',
  title: 'Gallery',
  fields: [
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          type: "object",
          fields:[
            {
              name: "image",
              type: "image",
              title: "Image"
            },
            {
              title: 'Format',
              name: 'format',
              type: 'string',
              options: {
                list: [
                  {title: 'Format 1', value: 'format-1'},
                  {title: 'Format 2', value: 'format-2'},
                  {title: 'Format 3', value: 'format-3'},
                  {title: 'Format 4', value: 'format-4'},
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      media: "gallery.0.image"
    },
    prepare({ media }) {
      return {
        title: "Gallery",
        media,
        subtitle: 'Gallery',
      }
    },
  },
}
