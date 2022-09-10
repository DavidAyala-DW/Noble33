import { FolderIcon } from '@sanity/icons'

export default {
  name: 'locations',
  type: 'document',
  title: 'Casa madera - Locations',
  icon: FolderIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'locationPage', title: 'Location page' },
    { name: 'menuPage', title: 'Menu page' },
  ],
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
        ],
      },
      initialValue: "casaMadera"
    },
    {
      name: 'title',
      type: 'string',
      group: 'general',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'general',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 180,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      group: 'general'
    },
    {
      name: 'content',
      group: "locationPage",
      type: 'array',
      title: 'Location page - sections',
      of: [
        { type: 'hero' },
        { type: 'bannerWithText' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'details' },
        { type: 'event' },
        { type: 'newsletter' },
        { type: 'contact' },
        { type: 'richtext' },
      ],
      initialValue: [
        { 
          _type: 'hero',
        },
        {
          _type: 'space',
          heightDesktop: 210,
          heightTablet: 150,
          heightMobile: 120
        },
      ]
    },
    {
      name: 'menus',
      group: "menuPage",
      type: 'array',
      title: 'Menu page sections',
      of: [
        {
          type: 'object',
          title: "Menu",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: 'slug',
              type: 'slug',
              title: 'Slug',
              options: {
                source: (doc,options) => {
                  const menus = doc?.menus;
                  const actualKey = options?.parentPath[1];
                  return menus.find(menu => menu?._key == actualKey?._key)?.title;
                },
                maxLength: 180,
              },
            },
            {
              name: 'content',
              type: 'simplePortableText',
              title: 'Content',
            },
          ]
        },
      ]
    },
    
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
