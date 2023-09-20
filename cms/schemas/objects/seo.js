export default {
  name: 'seo',
  title: 'SEO & metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title for search results',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Description for search results',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Open Graph image',
      description:
        'Image for sharing previews on Facebook, Twitter, etc. Leave empty to use the default Open Graph image in settings.',
      type: 'image',
    },
    {
      name: 'isHidden',
      title: 'Hide from search engines',
      description: 'Noindex and exclude from sitemap',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
