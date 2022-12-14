export default {
  type: 'object',
  name: 'menus',
  title: 'Menus',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: 'locations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: "locations"},
            {type: "locationsSparrow"},
          ],
          options: {
            filter: (props) => {
    
              const {document} = props;
              if(document?.site == "sparrow"){
                return {
                  filter: '_type == "locationsSparrow"'
                }
              }
    
              if(document?.site == "casaMadera"){
                return {
                  filter: '_type == "locations"'
                }
              }
    
              return {
                
              }
    
            }
          }
        },
      ],
    },
  ],
  
  preview: {
    select: {
      title: "title",
      media: 'locations.0.image',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'menus',
        media,
      }
    },
  },
}
