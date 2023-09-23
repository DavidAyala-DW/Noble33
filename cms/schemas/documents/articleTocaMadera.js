import { DocumentTextIcon } from '@sanity/icons';

export default {
  name: 'articleTocaMadera',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'articlePageSeo',
      title: 'Menu page - SEO & metadata',
      type: 'seo'
    },
    {
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'authorTocaMadera' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      publishDate: 'publishDate',
    },
    prepare({ title, media, publishDate }) {
      return {
        title,
        subtitle: new Date(publishDate).toLocaleDateString(undefined, {
          dateStyle: 'medium',
        }),
        media,
      };
    },
  },
};
