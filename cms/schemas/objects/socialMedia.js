export default {
  type: 'object',
  name: 'socialMedias',
  title: 'Social medias',
  fields: [
    {
      name: 'socialMedias',
      title: 'Social medias',
      type: 'array',
      of:[
        {
          type: "object",
          fields:[
            {
              name: "SocialMedia",
              title: 'Social media',
              type: "string",
              options: {
                list:[
                  {title: "Spotify", value: "spotify"},
                  {title: "SoundCloud", value: "soundCloud"},
                  {title: "Facebook", value: "facebook"},
                  {title: "Instagram", value: "intagram"},
                ]
              },
              initialValue: "spotify"
            },
            {
              name: "link",
              title: "Link",
              type: "url"
            }
          ]
        }
      ]
    }
  ]
}
