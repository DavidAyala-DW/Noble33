import groq from "groq"

export function newsDetailsQuery(slug){
  
  return `*[_type == "newsPT" && slug.current == "${slug}" ][0]{
    title,description,link,image
  }`

}

export function collectionsQuery(ref){

  if(!ref) return;
  
  return `*[_type == "nobleVenue" && _id == "${ref}" ][0]{
    _id,title,location,image,mobile_image,hover_state_image,link
  }`

}

const newsDetails = groq`
  _id,
  title,
  slug,
  description,
  link,
  image,
  publicationLogo,
`;

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

  },
  stickyHeader`