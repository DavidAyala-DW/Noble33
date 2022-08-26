export default {
  type: 'object',
  name: 'news',
  title: 'News',
  fields: [
    {
      name: 'news',
      title: 'News',
      type: 'array',
      of:[
        {type: "newsItem"}
      ]
      
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
