export default {
  type: 'object',
  name: 'links',
  title: 'Link',
  fields: [
    {
      name: 'link',
      title: 'Internal link',
      type: 'reference',
      to: [
        { type: 'route' },
        { type: 'routesCasaMadera' },
        { type: 'locations' },
        { type: 'routeTocaMadera' },
        { type: 'locationTocaMadera' },
        { type: 'routesSparrow' },
        { type: 'locationsSparrow' },
      ],
      options: {
        filter: (props) => {
          const { document } = props;
          if (document?.site == 'sparrow') {
            return {
              filter:
                '_type == "routesSparrow" || _type == "locationsSparrow" ',
            };
          }

          if (document?.site == 'casaMadera') {
            return {
              filter: '_type == "routesCasaMadera" || _type == "locations" ',
            };
          }

          if (document?.site == 'tocaMadera') {
            return {
              filter:
                '_type == "routeTocaMadera" || _type == "locationTocaMadera"',
            };
          }

          if (document?.site == 'noble33') {
            return {
              filter: '_type == "route" ',
            };
          }

          return {};
        },
      },
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: `
        Recommended size: 500x960, Aspect ratio: 52:100, Max file size: 350kb
      `,
      hidden: ({ document }) => !document?.mainNav?.length,
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'is_the_main_menu_option',
      title: 'Primary menu option',
      type: 'boolean',
      description: 'Make this the only menu option',
      hidden: ({ parent }) => parent.title != 'Menus',
    },
    {
      name: 'isDisabled',
      title: 'Disabled',
      type: 'boolean',
      description: "Visible, but users can't interact with it",
      hidden: ({ document }) => document.site !== 'noble33',
      initialValue: false,
    },
  ],
  // TODO: Take another crack at this - this version makes every links object required,
  // which causes issues in some sections
  // validation: (Rule) =>
  //   Rule.custom((fields) => {
  //     if (!fields.link && !fields.externalLink) {
  //       return 'Choose a document to link to or enter an external URL';
  //     }

  //     return true;
  //   }),
};
