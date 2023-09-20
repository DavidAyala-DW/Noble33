import { LockIcon } from '@sanity/icons';
import { orderRankField } from '@sanity/orderable-document-list';

export default {
  name: 'privateEventsTocaMadera',
  type: 'document',
  title: 'Toca Madera - Private Events Page',
  icon: LockIcon,
  fields: [
    orderRankField({ type: 'privateEventsTocaMadera' }),
    {
      name: 'isComingSoon',
      title: 'Coming soon',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'site',
      title: 'Site',
      type: 'string',
      hidden: true,
      initialValue: 'tocaMadera',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo_title',
      type: 'string',
      title: 'Title (SEO)',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 180,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: `
        Recommended size: 888x657, Aspect ratio: 135:100, Max file size: 350kb
      `,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'book_link',
      type: 'string',
      title: 'Book Link',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Sections',
      of: [
        { type: 'hero' },
        { type: 'bannerWithText' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'details' },
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
      name: 'seo',
      title: 'SEO & metadata',
      type: 'seo',
    },
  ],
};
