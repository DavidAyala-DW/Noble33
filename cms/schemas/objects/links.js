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
      ],
      options: {
        filter: (props) => {

          const {document} = props;

          if(document?.site == "casaMadera"){
            return {
              filter: '_type == "routesCasaMadera" '
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
      type: 'image'
    }
  ]
}
