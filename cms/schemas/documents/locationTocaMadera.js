import { FolderIcon } from '@sanity/icons';
import { orderRankField } from '@sanity/orderable-document-list';

export default {
  name: 'locationTocaMadera',
  type: 'document',
  title: 'Toca Madera - Location',
  icon: FolderIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'locationPage', title: 'Location page' },
    { name: 'menuPage', title: 'Menu page' },
  ],
  fields: [
    orderRankField({ type: 'locationTocaMadera' }),
    {
      name: 'site',
      title: 'Site',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'tocaMadera',
    },
    {
      name: 'comming_soon',
      type: 'boolean',
      title: 'Coming soon',
      initialValue: false,
      group: 'general',
    },
    {
      name: 'title',
      type: 'string',
      group: 'general',
      title: 'Name',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'general',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      group: 'general',
    },
    {
      name: 'reservationsUrl',
      title: 'Reservations URL',
      type: 'url',
      group: 'general',
    },
    {
      name: 'giftCardUrl',
      title: 'Gift card URL',
      type: 'url',
      group: 'general',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'general',
      description: `
        Recommended size: 888x657, Aspect ratio: 135:100, Max file size: 350kb
      `,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo_title_location_page',
      type: 'string',
      title: 'Title Location Page (SEO)',
      group: 'locationPage',
    },
    {
      name: 'description_location_page',
      type: 'text',
      title: 'Description (Location page)',
      group: 'locationPage',
    },
    {
      name: 'openGraphImage_location_page',
      type: 'image',
      title: 'Open Graph image',
      description:
        'Image for sharing previews on Facebook, Twitter etc. (Location page)',
      group: 'locationPage',
    },
    {
      name: 'seo_title_menu_page',
      type: 'string',
      title: 'Title menu Page (SEO)',
      group: 'menuPage',
    },
    {
      name: 'description_menu_page',
      type: 'text',
      title: 'Description (Menu page)',
      group: 'menuPage',
    },
    {
      name: 'openGraphImage_menu_page',
      type: 'image',
      title: 'Open Graph image',
      description:
        'Image for sharing previews on Facebook, Twitter etc. (Menu page)',
      group: 'menuPage',
    },
    {
      name: 'content',
      group: 'locationPage',
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
        { type: 'gallery' },
      ],
      initialValue: [
        {
          _type: 'hero',
        },
      ],
    },
    {
      name: 'menus',
      group: 'menuPage',
      type: 'array',
      title: 'Menus',
      of: [
        {
          type: 'object',
          title: 'Menu',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'slug',
              type: 'slug',
              title: 'Slug',
              options: {
                source: (doc, options) => {
                  const menus = doc?.menus;
                  const actualKey = options?.parentPath[1];
                  return menus.find((menu) => menu?._key == actualKey?._key)
                    ?.title;
                },
                maxLength: 180,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'groups',
              type: 'array',
              title: 'Groups',
              of: [
                {
                  type: 'object',
                  title: 'Group',
                  fields: [
                    {
                      type: 'string',
                      name: 'title',
                      title: 'Group title',
                    },
                    {
                      type: 'array',
                      name: 'courses',
                      title: 'Courses',
                      of: [
                        {
                          type: 'object',
                          name: 'Course',
                          fields: [
                            {
                              type: 'string',
                              name: 'title',
                              title: 'Course title',
                            },
                            {
                              type: 'text',
                              name: 'description',
                              title: 'Description',
                            },
                            {
                              type: 'string',
                              name: 'extra_text',
                              title: 'Extra text',
                            },
                            {
                              name: 'description_size',
                              title: 'Description size',
                              type: 'string',
                              options: {
                                list: [
                                  { title: 'Small', value: 'small' },
                                  { title: 'Medium', value: 'medium' },
                                  { title: 'Large', value: 'large' },
                                ],
                              },
                              initialValue: 'medium',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'menuPageContent',
      group: 'menuPage',
      type: 'array',
      title: 'Menu page - sections',
      of: [
        { type: 'menusContent' },
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
          _type: 'menusContent',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
