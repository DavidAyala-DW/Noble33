import groq from "groq"

export function newsDetailsQuery(slug){
  
  return `*[_type == "newsPT" && slug.current == "${slug}" ][0]{
    title,description,link,image
  }`

}

const newsDetails = groq`
  _id,
  title,
  description,
  link,
  image,
`

export const pageContentQuery = groq`
  content[] {
    ...,
    
    _type == 'news' => {
      ...,
      news[] -> {
        ${newsDetails}
      }
    },

    _type == 'newsSlider' => {
      ...,
      news_slider[] -> {
        ${newsDetails}
      }
    }
  }`