import groq from "groq"

export function newsDetailsQuery(slug){
  
  return `*[_type == "newsPT" && slug.current == "${slug}" ][0]{
    title,description,link,image
  }`

}

export function collectionsQuery(ref){

  if(!ref) return;
  
  return `*[_type == "nobleVenue" && _id == "${ref}" ][0]{
    _id,title,location,image,alt_text,mobile_image,hover_state_image,link
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
  image_alt_text,
  publication_logo_alt_text
`;

export const pageContentQuery = groq`
  title,
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
  stickyHeader,
  seo_title,
  description,
  openGraphImage
`