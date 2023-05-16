import S from '@sanity/desk-tool/structure-builder';

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
    'eventSparrow',
    'eventsSparrow',
    'routesSparrow',
    'locations',
    'eventCasaMadera',
    'eventsCasaMadera',
    'articleCasaMadera',
    'authorCasaMadera',
    'emailsCasaMadera',
    'locationsSparrow',
    "nobleVenue",
    'newsPT',
    'media.tag',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Documents')
    .items([
      S.documentTypeListItem('siteSettings').title('Site settings'),
      S.divider(),
      S.documentTypeListItem('contact_fields').title('Contact'),
      S.documentTypeListItem('offers').title('Offers'),
      S.divider(),
      S.documentTypeListItem('page').title('Noble 33 - Pages'),
      S.documentTypeListItem('route').title('Noble 33 - Routes'),
      S.documentTypeListItem('nobleVenue').title('Noble 33 - Venues'),
      S.documentTypeListItem('newsPT').title('Noble 33 - News'),
      S.divider(),
      S.documentTypeListItem('pagesCasaMadera').title('Casa Madera - Pages'),
      S.documentTypeListItem('routesCasaMadera').title('Casa Madera - Routes'),
      S.documentTypeListItem('locations').title('Casa Madera - Locations'),
      S.documentTypeListItem('eventCasaMadera').title('Casa Madera - Events'),
      S.documentTypeListItem('eventsCasaMadera').title('Casa Madera - Private Events'),
      S.documentTypeListItem('articleCasaMadera').title('Casa Madera - Articles'),
      S.documentTypeListItem('authorCasaMadera').title('Casa Madera - Authors'),
      S.documentTypeListItem('emailsCasaMadera').title('Casa Madera - Emails'),
      S.divider(),
      S.documentTypeListItem('pagesSparrow').title('Sparrow - Pages'),
      S.documentTypeListItem('routesSparrow').title('Sparrow - Routes'),
      S.documentTypeListItem('locationsSparrow').title('Sparrow - Locations'),
      S.documentTypeListItem('eventSparrow').title('Sparrow - Events'),
      S.documentTypeListItem('eventsSparrow').title('Sparrow - Private Events'),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
