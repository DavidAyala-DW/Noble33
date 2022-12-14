import '../styles/globals.scss'
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import GTM from "@/components/GTM";
import Cookies from 'js-cookie'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {

    const allCookies =Cookies.get("_gtm_all_cookies");
    
    if(allCookies && allCookies == true){
      const dataLayer = window.dataLayer;
      if(typeof dataLayer !== 'undefined'){
        dataLayer.push({event: "all-cookies"});
      }
    }

  }, []);

  return (
    <>
      <GTM/>
      <Component {...pageProps} />
      <CookieConsent
        containerClasses="cookie"
        contentClasses="cookieContent"
        declineButtonClasses="cookieDeclineButton"
        declineButtonText="Decline"
        buttonClasses="cookieButton"
        buttonWrapperClasses="CookitButtonsWrapper"
        disableStyles={true}
        enableDeclineButton={true}
        location="bottom"
        buttonText="Accept All"
        cookieName="_gtm_all_cookies"
        expires={150}
        onAccept={() => {
          const dataLayer = window.dataLayer;
          if(typeof dataLayer !== 'undefined'){
            dataLayer.push({event: "all-cookies"});
          }
        }}
      >

        We use cookies to ensure that we give you the best experience on our website.
        visit
        
        <Link href="/privacy-policy" passHref>
          <a className="px-2 hover_state_link underline pointer ">
            Privacy policy
          </a>            
        </Link>
        
        and

        <Link href="/cookies-preference" passHref>
          <a className="px-2 hover_state_link underline pointer ">
            Cookies preferences
          </a>          
        </Link>

      </CookieConsent>
    </>
  )
}

export default MyApp