export default {
  name: 'imageSection',
  title: 'Image section',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'maxWidth',
      title: 'Max width (px)',
      type: 'number',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'links',
    },
  ],
  preview: {
    select: {
      title: 'image.asset.originalFilename',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Image section',
        media,
      };
    },
  },
};
