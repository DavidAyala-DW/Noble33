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

          return {
            
          }

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
      hidden: ({document }) => !document?.mainNav?.length,

    }
  ]
}
