import {CogIcon} from "@sanity/icons";

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site configuration',
  icon: CogIcon,
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
    { name: 'general', title: 'General' },
  ],
  fieldsets: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
    { name: 'general', title: 'General' },
  ],
  fields: [
    {
      name: 'mainNav',
      type: 'array',
      title: 'Main nav menu',
      description: 'Select pages for the overlay menu.',
      group: 'header',
      fieldset: 'header',
      of: [
        {
          name: 'myObject',
          type: 'object',
          fields: [
            {
              name: "link",
              type: "string",
              title: "Link",
              initialValue: '/'
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
          ],
          
        },
      ],
    },
    {
      name: 'secondHeaderNav',
      type: 'array',
      title: 'Second nav menu',
      group: 'header',
      fieldset: 'header',
      of: [
        {
          name: 'myObject',
          type: 'object',
          fields: [
            {
              name: "link",
              type: "string",
              title: "Link",
              initialValue: '/'
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
          ],
          
        },
      ],
    },
    {
      name: 'footerNav',
      type: 'array',
      title: 'Footer nav menu',
      group: 'footer',
      fieldset: 'footer',
      of: [
        {
          name: 'myObject',
          type: 'object',
          fields: [
            {
              name: "link",
              type: "string",
              title: "Link",
              initialValue: '/'
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
          ],
          
        },
      ],
    },
    {
      name: 'facebookHandle',
      type: 'url',
      title: 'Facebook handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
    },
    {
      name: 'instagramHandle',
      type: 'url',
      title: 'Instagram Handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
    },
    {
      name: 'privacyPolicyHandle',
      type: 'object',
      title: 'Privacy policy handle',
      placeholder: 'link',
      group: 'general',
      fieldset: 'general',
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Link",
          name: "link",
          type: "string",
        }
      ]
    },
    {
      name: 'cookiesPreferencesHandle',
      type: 'object',
      title: 'Cookies preferences Handle',
      placeholder: 'link',
      group: 'general',
      fieldset: 'general',
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Link",
          name: "link",
          type: "string",
        }
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site configuration", 
      }
    },
  },
}