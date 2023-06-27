export default {
  type: 'object',
  name: 'menus',
  title: 'Menus',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'locations',
      type: 'array',
      of: [
        {
          title: 'Choose location',
          type: 'reference',
          to: [
            { type: 'locations' },
            { type: 'locationsSparrow' },
            { type: 'locationTocaMadera' },
          ],
          options: {
            filter: (props) => {
              const { document } = props;
              if (document?.site == 'sparrow') {
                return {
                  filter: '_type == "locationsSparrow"',
                };
              }

              if (document?.site == 'casaMadera') {
                return {
                  filter: '_type == "locations"',
                };
              }

              if (document?.site == 'tocaMadera') {
                return {
                  filter: '_type == "locationTocaMadera"',
                };
              }

              return {};
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'locations.0.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'List of menus by location',
        media,
      };
    },
  },
};
