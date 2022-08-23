// import { useEffect } from 'react'
// import Head from 'next/head'
// import { LogoJsonLd } from 'next-seo'
// import { useRouter } from 'next/router'
// import clsx from 'clsx'

// import { useAppContext } from '@/contexts/app-context'
import Header from './header'
import Footer from './footer'
// import dynamic from 'next/dynamic'
// import { useHijackTourLinks } from '@/lib/use-hijack-tour-links'

// const ReserveDialog = dynamic(() => import('@/components/reserve-dialog'))

function Layout(props) {

  const {
    children,
    siteSettings:{
      mainNav,
      secondHeaderNav,
      footerNav,
      facebookHandle,
      instagramHandle,
      privacyPolicyHandle,
      cookiesPreferencesHandle
    }
  } = props

  return (
    <>

      {/* <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head> */}
    
      <div
      className="bg-body flex flex-col"
      >

        <Header {...{
          mainNav,
          secondHeaderNav,
          facebookHandle,
          instagramHandle
        }}/>

        <div className="w-full min-h-screen flex flex-col relative">
          {children}
        </div>

        <Footer {...{
          facebookHandle,
          instagramHandle,
          privacyPolicyHandle,
          cookiesPreferencesHandle,
          footerNav
        }}/>

      </div>
    </>
  )
}

export default Layout
