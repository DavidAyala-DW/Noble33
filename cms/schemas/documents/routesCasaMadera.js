import { LinkIcon } from '@sanity/icons'

export default {
  name: 'routesCasaMadera',
  type: 'document',
  title: 'Casa madera - Routes',
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
          type: 'pagesCasaMadera',
        },
      ],
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
      }
    },
  },
}
