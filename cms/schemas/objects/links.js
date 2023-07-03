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
        {type: 'route'},
        {type: 'routesCasaMadera'},
        {type: 'locations'},
        {type: 'routesSparrow'},
        {type: 'locationsSparrow'},
        {type: 'meduzaRoutes'},
        {type: 'meduzaLocations'},
      ],
      options: {
        filter: (props) => {

          const {document} = props;
          if(document?.site == "sparrow"){
            return {
              filter: '_type == "routesSparrow"  || _type == "locationsSparrow" '
            }
          }

          if(document?.site == "casaMadera"){
            return {
              filter: '_type == "routesCasaMadera" || _type == "locations" '
            }
          }

          if(document?.site == "noble33"){
            return {
              filter: '_type == "route" '
            }
          }

          if(document?.site == "meduza"){
            return {
              filter: '_type == "meduzaRoutes" || _type == "meduzaLocations" '
            }
          }

          return {}

        }
      }
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    },
    {
      name: "title",
      type: "string",
      title: 'Title'
    },
    {
      name: "image",
      title: 'Image',
      type: 'image',
      description: `
        Recommended size: 500x960, Aspect ratio: 52:100, Max file size: 350kb
      `,
      hidden: ({document }) => !document?.mainNav?.length,
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alt Text"
    },
    {
      name: "is_the_main_menu_option",
      title: "Is it the primary menu option? ",
      type: "boolean",
      description: "Active it only to menu option in navigation menu",
      hidden: ({document, parent }) => parent.title != "Menus",
    },
    {
      name: "isDisabled",
      title: "Disabled",
      type: "boolean",
      description: "Visible, but users can't interact with it",
      hidden: ({ document }) => document.site !== "noble33",
      initialValue: false,
    }
  ]
}
