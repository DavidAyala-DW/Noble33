// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import route from './documents/route';
import page from './documents/page';
import siteSettings from './documents/siteSettings';
import newsPT from './documents/news';
import pagesCasaMadera from './documents/pagesCasaMadera';
import routesCasaMadera from './documents/routesCasaMadera';
import locations from './documents/locations';
import eventsCasaMadera from './documents/eventsCasaMadera';
import eventCasaMadera from './documents/eventCasaMadera';
import articleCasaMadera from './documents/articleCasaMadera';
import authorCasaMadera from './documents/authorCasaMadera';
import emailsCasaMadera from './documents/emailsCasaMadera';
import pagesSparrow from './documents/pagesSparrow';
import eventSparrow from './documents/eventSparrow';
import eventsSparrow from './documents/eventsSparrow';
import routesSparrow from './documents/routesSparrow';
import locationsSparrow from './documents/locationsSparrow';
import offers from './documents/offers';
import contact_fields from './documents/contact';
import nobleVenue from './documents/nobleVenue';

//We import Page sections
import heading from './objects/heading';
import testSection from './objects/testSection';
import backgroundImage from './objects/backgroundImage';
import heroHomepage from './objects/heroHomepage';
import simplePortableText from './objects/simple-portable-text';
import link from './objects/link';
import space from './objects/space';
import collectionCard from './objects/collectionCard';
import collectionGrid from './objects/collectionGrid';
import internalLink from './objects/internal-link';
import textContentCenter from './objects/textContentCenter';
import heroText from './objects/heroText';
import eventsCarousel from './objects/eventsCarousel';
import gallery from './objects/gallery';
import imageWithText from './objects/imageWithText';
import bannerWithText from './objects/bannerWithText';
import restaurantsCarousel from './objects/restaurantsCarousel';
import heroWithText from './objects/heroWithText';
import detail from './objects/detail';
import details from './objects/details';
import member from './objects/member';
import team from './objects/team';
import blockContent from './blockContent';
import newsItem from './objects/newsItem';
import news from './objects/news';
import newsletter from './objects/newsletter';
import hero from './objects/hero';
import event from './objects/event';
import events from './objects/events';
import eventList from './objects/eventList';
import links from './objects/links';
import newsContent from './objects/newsContent';
import moreNews from './objects/moreNews';
import contact from './objects/contact';
import richtext from './objects/richtext';
import socialMedia from './objects/socialMedia';
import imageFullWidth from './objects/imageFullWidth';
import eventsSlider from './objects/eventsSlider';
import menus from './objects/menus';
import privateEventsList from './objects/private-events';
import menusContent from './objects/menusContent';
import reservations from './objects/reservations';
import newsSlider from './objects/newsSlider';
import contactLocations from './objects/contactLocations';
import fullscreenNewsletter from './objects/fullscreenNewsletter';
import sparrowEventList from './objects/sparrowEventList';
import sparrowGiftCardList from './objects/sparrowGiftCardList';
import articleSlider from './objects/articleSlider';
import articleGrid from './objects/articleGrid';
import pageTocaMadera from './documents/pageTocaMadera';
import routeTocaMadera from './documents/routeTocaMadera';
import locationTocaMadera from './documents/locationTocaMadera';
import eventTocaMadera from './documents/eventTocaMadera';
import pressTocaMadera from './documents/pressTocaMadera';
import pressList from './objects/pressList';
import privateEventsTocaMadera from './documents/privateEventsTocaMadera';
import portableText from './objects/portableText';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    page,
    newsPT,
    route,
    pagesCasaMadera,
    routesCasaMadera,
    locations,
    eventsCasaMadera,
    eventCasaMadera,
    articleCasaMadera,
    authorCasaMadera,
    emailsCasaMadera,
    pagesSparrow,
    eventSparrow,
    eventsSparrow,
    routesSparrow,
    locationsSparrow,
    pageTocaMadera,
    routeTocaMadera,
    locationTocaMadera,
    eventTocaMadera,
    privateEventsTocaMadera,
    pressTocaMadera,
    offers,
    contact_fields,
    nobleVenue,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    link,
    internalLink,
    simplePortableText,
    portableText,
    heading,
    backgroundImage,
    heroHomepage,
    space,
    collectionCard,
    collectionGrid,
    textContentCenter,
    heroText,
    eventsCarousel,
    gallery,
    imageWithText,
    bannerWithText,
    restaurantsCarousel,
    heroWithText,
    detail,
    details,
    member,
    team,
    newsItem,
    news,
    newsletter,
    hero,
    event,
    events,
    newsSlider,
    links,
    newsContent,
    moreNews,
    contact,
    richtext,
    socialMedia,
    imageFullWidth,
    eventsSlider,
    menus,
    menusContent,
    privateEventsList,
    reservations,
    testSection,
    eventList,
    contactLocations,
    fullscreenNewsletter,
    sparrowEventList,
    sparrowGiftCardList,
    articleGrid,
    articleSlider,
    pressList,
  ]),
});
