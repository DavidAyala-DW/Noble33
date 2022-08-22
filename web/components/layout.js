// import { useEffect } from 'react'
// import Head from 'next/head'
// import { LogoJsonLd } from 'next-seo'
// import { useRouter } from 'next/router'
// import clsx from 'clsx'

// import { useAppContext } from '@/contexts/app-context'
// import Header from './header'
// import Footer from './footer'
// import dynamic from 'next/dynamic'
// import { useHijackTourLinks } from '@/lib/use-hijack-tour-links'

// const ReserveDialog = dynamic(() => import('@/components/reserve-dialog'))

function Layout(props) {
  const {children } = props
  // // const { isReady, setIsReady, reserveDialog } = useAppContext()
  // // const router = useRouter()

  // useEffect(() => {
  //   if (router.asPath !== '/') {
  //     setIsReady(true)
  //   }
  // }, [router.asPath, setIsReady])

  // useHijackTourLinks()

  // if (!config) {
  //   console.error('Missing config')
  //   return <div>Missing config</div>
  // }

  // const {
  //   title,
  //   mainNav,
  //   footerNav,
  //   footerNav2,
  //   logo,
  //   logoMobile,
  //   navImage,
  //   url,
  //   instagramHandle,
  //   tiktokHandle,
  //   footerImage,
  //   reserveFlow,
  // } = config
  // const logoUrl = logo?.asset?.url

  return (
    <>
      {/* <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head> */}

      

      <div
      >
        {/* <Header
          {...{
            title,
            mainNav,
            logo,
            logoMobile,
            navImage,
            instagramHandle,
            tiktokHandle,
          }}
        /> */}

        {/* <button
          type="button"
          className={`
            reserve-flow-toggle
            button button-size-short flex fixed bottom-0 inset-x-0 md:left-auto md:bottom-[5vw] z-30
            border-y md:border-l bg-black/80
          `}
          onClick={() => reserveDialog.open()}
        >
          Reserve
        </button> */}

        <div className="w-full min-h-screen flex flex-col relative">
          {children}
          {/* <Footer
            {...{
              title,
              logo,
              logoMobile,
              footerNav,
              footerNav2,
              footerImage,
              instagramHandle,
              tiktokHandle,
            }}
          /> */}
          {/* Side lines */}

        </div>

        {/* {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />} */}
      </div>
    </>
  )
}

export default Layout
