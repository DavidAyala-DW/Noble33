export default {
  type: 'object',
  name: 'textContentCenter',
  title: 'Text content centered',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'is_h1',
      type: 'boolean',
      title: 'Is H1?',
      initialValue: false,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      hidden: ({document}) => document?.site != "noble33",
    },
    {
      name: "description2",
      title: "Description",
      type: 'simplePortableText',
      hidden: ({document}) => document?.site == "noble33",
    },
    {
      name: 'learn_more',
      title: 'Learn more',
      type: 'object',
      fields: [
        {
          name: "title",
          title: "Title",
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
      name: "show_locations",
      title: "Show Locations?",
      type: "boolean",
      initialValue: false,
      hidden: ({document}) => document?.site == "noble33"
    },
    {
      name: "show_menu_buttton",
      title: "Show menu buttton?",
      type: "boolean",
      initialValue: false,
      hidden: ({document}) => {
        if(document._type != "locationsSparrow" && document._type != "locations"){
          return true;
        }
      }
    },
    {
      name: "mobileAlignment",
      title: "Mobile alignment",
      hidden: ({document}) => document?.site == "noble33",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
        ],
      },
      initialValue: "center"
    },
    {
      name: "titleSize",
      title: "Size title",
      hidden: ({document}) => document?.site == "noble33",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Normal", value: "normal" },
          { title: "Large", value: "large" },
        ],
      },
      initialValue: "normal"
    },
    {
      name: "descriptionContent",
      title: "Description content",
      hidden: ({document}) => document?.site == "noble33",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Normal", value: "normal" },
          { title: "Large", value: "large" },
        ],
      },
      initialValue: "normal"
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text content centered',
      }
    },
  },
}
