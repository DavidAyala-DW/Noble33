import { LaunchIcon, LinkIcon } from '@sanity/icons';

export default {
  name: 'portableText',
  title: 'Rich text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'link',
            title: 'External link',
            icon: LaunchIcon,
          },
          {
            name: 'internalLink',
            type: 'internalLink',
            title: 'Internal link',
            icon: LinkIcon,
          },
        ],
      },
    },
  ],
};
