import { DocumentIcon } from '@sanity/icons';

export default {
  name: 'meduzaPages',
  type: 'document',
  title: 'Meduza - pages',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'site',
      title: 'Site',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'meduza',
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
      description: 'Description shown in search results'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc.'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'headingWithCTA' },
        { type: 'space' },
        { type: 'imageWithText' },
        { type: 'imageSection' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'eventList' },
        { type: 'news' },
        { type: 'contact' },
        { type: 'articleGrid' },
        { type: 'featuredArticles' },
        { type: 'richtext' },
        { type: 'menus' },
        { type: 'careers' },
        { type: 'privateEventsList' },
        { type: 'knowBeforeYouGo' },
        { type: 'newsletter' },
        { type: 'textContentCenter' },
        { type: 'brandBanner' },
      ],
    },
    {
      title: 'Sticky Header?',
      name: 'stickyHeader',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
