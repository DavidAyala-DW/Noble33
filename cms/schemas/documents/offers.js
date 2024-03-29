import { BillIcon } from '@sanity/icons'

export default {
  name: 'offers',
  type: 'document',
  title: 'Offers',
  icon: BillIcon,
  fields: [
    {
      name: "site",
      title: "Site",
      type: "string",
      readOnly: true,
      hidden: true,
      options: {
        list: [
          { title: "Noble33", value: "noble33" },
          { title: "Casa Madera", value: "casaMadera" },
          { title: "Sparrow", value: "sparrow" },
        ],
      },
      initialValue: "casaMadera"
    },
    {
      name: "active",
      title: "Active",
      type: "boolean"
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "string"
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description',
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: `
        Recommended size: 888x657, Aspect ratio: 135:100, Max file size: 350kb
      `
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alt Text"
    },
    {
      name: "date",
      title: "Date",
      type: 'datetime',
      options: {
        dateFormat: 'LLLL',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    },
    prepare({ title, media }) {
      return {
        title,
        media
      }
    },
  },
}
