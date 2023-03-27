import S from '@sanity/desk-tool/structure-builder'
import { CogIcon } from '@sanity/icons'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    'offers',
    'contact_fields',
    'siteSettings',
    'page',
    'pagesCasaMadera',
    'pagesSparrow',
    'route',
    'routesCasaMadera',
    'eventsSparrow',
    'routesSparrow',
    'locations',
    'eventCasaMadera',
    'eventsCasaMadera',
    'emailsCasaMadera',
    'locationsSparrow',
    'news',
    'media.tag',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Documents')
    .items([
      S.documentTypeListItem('siteSettings').title('Site settings'),
      S.divider(),
      S.documentTypeListItem('contact_fields').title('Contact'),
      S.documentTypeListItem('offers').title('Offers'),
      S.divider(),
      S.documentTypeListItem('page').title('Pages Noble33'),
      S.documentTypeListItem('route').title('Routes Noble33'),
      S.documentTypeListItem('news').title('News Noble33'),
      S.documentTypeListItem('pagesCasaMadera').title('Pages CasaMadera'),
      S.documentTypeListItem('routesCasaMadera').title('Routes CasaMadera'),
      S.documentTypeListItem('locations').title('Locations CasaMadera'),
      S.documentTypeListItem('eventCasaMadera').title('Events CasaMadera'),
      S.documentTypeListItem('eventsCasaMadera').title('Private events CasaMadera'),
      S.documentTypeListItem('emailsCasaMadera').title('Emails CasaMadera'),
      S.documentTypeListItem('pagesSparrow').title('Pages Sparrow'),          
      S.documentTypeListItem('eventsSparrow').title('Events Sparrow'),          
      S.documentTypeListItem('routesSparrow').title('Routes Sparrow'),      
      S.documentTypeListItem('locationsSparrow').title('Locations Sparrow'),
      
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
