export default {
  type: 'object',
  name: 'news',
  title: 'News',
  fields: [
    {
      name: "site",
      title: "Site",
      readOnly: true,
      hidden: true,
      type: "string",
      options: {
        list: [
          { title: "Noble33", value: "noble33" },
          { title: "Casa Madera", value: "casaMadera" },
          { title: "Sparrow", value: "sparrow" },
          { title: "Meduza", value: "meduza" },
        ],
      },
      default: "noble33"
    },
    {
      name: 'news',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'newsPT'},
            {type: 'meduzaArticles'},
          ],
          options: {
            filter: (props) => {
    
              const {document} = props;
              if(document?.site == "meduza"){
                return {
                  filter: '_type == "meduzaArticles"'
                }
              }
    
  
              if(document?.site == "noble33"){
                return {
                  filter: '_type == "newsPT" '
                }
              }
    
              return {
                filter: '_type == "newsPT" '
              }
    
            }
          }
        },
      ],
    },
  ],
  
  preview: {
    select: {
      media: 'news.0.image',
    },
    prepare({media}) {
      return {
        title: "News",
        subtitle: 'News',
        media,
      }
    },
  },
}
