import { LinkIcon } from '@sanity/icons';

export default {
  name: 'routeTocaMadera',
  type: 'document',
  title: 'Toca Madera - Route',
  description: 'Map urls to pages',
  icon: LinkIcon,
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'pageTocaMadera',
        },
      ],
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      subtitle: 'page.title',
    },
    prepare({ slug, subtitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle,
      };
    },
  },
};
