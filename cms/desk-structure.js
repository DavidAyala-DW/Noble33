import S from '@sanity/desk-tool/structure-builder'
import { CogIcon } from '@sanity/icons'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    'siteSettings',
    'page',
    'pagesCasaMadera',
    'pagesSparrow',
    'route',
    'routesCasaMadera',
    'routesSparrow',
    'locations',
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
      S.documentTypeListItem('page').title('Pages Noble33'),
      S.documentTypeListItem('pagesCasaMadera').title('Pages CasaMadera'),
      S.documentTypeListItem('pagesSparrow').title('Pages Sparrow'),
      S.documentTypeListItem('route').title('Routes Noble33'),
      S.documentTypeListItem('routesCasaMadera').title('Routes CasaMadera'),
      S.documentTypeListItem('routesSparrow').title('Routes Sparrow'),
      S.documentTypeListItem('locations').title('Locations CasaMadera'),
      S.documentTypeListItem('locationsSparrow').title('Locations Sparrow'),
      S.documentTypeListItem('news').title('News Noble33'),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
