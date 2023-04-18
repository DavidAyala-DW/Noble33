import Header from './header'
import Head from "next/head"
import Footer from './footer'
import SkipLinks from './SkipLinks'

function Layout(props) {

  const {
    children,
    stickyHeader,
    siteSettings:{
      mainNav,
      menuImage,
      secondHeaderNav,
      footerNav,
      facebookHandle,
      instagramHandle,
      privacyPolicyHandle,
      cookiesPreferencesHandle,
      reservationsButton,
      newsletter_text
    },
    menus
  } = props

  const globalMenus = [
    mainNav,
    secondHeaderNav,
    footerNav
  ]

  const setGlobalURL = [
    privacyPolicyHandle,
    cookiesPreferencesHandle,
    reservationsButton,
  ]

  setGlobalURL.forEach((menuItem,i) => {

    const {slug = null} = menus.find(item => item._id == menuItem.link._ref);
    
    if(!slug) {
      menuItem.link.url = "/";
      return;
    }

    menuItem.link.url = slug.current != "/" ? `/${slug.current}`: "/"; 

    if (menuItem.externalLink) {
      menuItem.link.url = menuItem.externalLink;
    }

  })
  
  globalMenus.forEach(menuItem => {
    if(!menuItem) return;

    menuItem.forEach(menu => {
      
      if(!menu) return;

      if(menu?.externalLink){
        menu.link = {url: menu.externalLink};
        return;
      }

      const {slug} = menus.find(item => item._id == menu?.link?._ref) ?? {slug : false};
      
      if(!slug) {

        if(menu.link){
          menu.link.url = "/";
        }else{
          menu.link = {url: "/"};
        }
        
        return;
      }

      menu.link.url = slug.current != "/" ? `/${slug.current}`: "/"; 
      if (menu.externalLink) {
        menu.link.url = menu.externalLink;
      }

    })
  });

  return (
    <>

      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
    
      <div
      className="bg-body flex flex-col"
      >

        <SkipLinks/>

        <Header {...{
          mainNav,
          menuImage,
          secondHeaderNav,
          facebookHandle,
          instagramHandle,
          reservationsButton,
          menus,
          stickyHeader
        }}/>

        <div className="w-full min-h-screen flex flex-col relative">
          {children}
        </div>

        <Footer {...{
          facebookHandle,
          instagramHandle,
          menus,
          privacyPolicyHandle,
          cookiesPreferencesHandle,
          footerNav,
          newsletter_text
        }}/>

      </div>
    </>
  )
}

export default Layout
