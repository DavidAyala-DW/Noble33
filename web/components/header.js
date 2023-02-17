import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import SanityImage from './sanity-image'
import Link from "next/link";
import Logo from "@/public/images/logo.png"
import clsx from "clsx";

export default function Header(props) {

  const router = useRouter();

  const {
    mainNav,
    menuImage,
    secondHeaderNav,
    facebookHandle,
    instagramHandle,
    reservationsButton,
    stickyHeader
  } = props;
  
  const [openModal, setOpenModal] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [activeMenuImage, setActiveMenuImage] = useState();
  const [existHero, setExistHero] = useState(false);
  const [heroVisible, setHeroVisible] = useState(null)
  const [entryObserver, setEntryObserver] = useState(false)

  function toggleModalOpen() {
    setOpenModal((val) => !val);
  }

  function resetActiveMenuImage() {
    setActiveMenuImage(menuImage)
  }

  useEffect(() => {

    setActiveModal(true);

    if(menuImage){
      resetActiveMenuImage()
    }
    
  }, []);

  useEffect(() => {

    const mainHero = document.getElementById("mainHero");

    if(!mainHero){
      setExistHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setHeroVisible(true);
          return;
        }
        setHeroVisible(false);
      },
      {
        root: null,
        threshold: .45
      }
    )

    observer.observe(mainHero);
    
    setExistHero(true);

  }, [router.asPath,entryObserver]);

  function NavLink(props) {
    const { item, secondary = false } = props

    if (!item) {
      return null
    }

    return (
      <Link href={item.link.url}>
        <a
          onMouseEnter={item.image ? () => setActiveMenuImage(item.image) : undefined}
          onMouseLeave={resetActiveMenuImage}
          onClick={toggleModalOpen}
          className={clsx(
            'block uppercase tracking-[.05em] font-light opacity-90',
            !item.isDisabled ? 'hover_state_link' : 'opacity-50 pointer-events-none',
            secondary
              ? 'text-[24px] leading-[28px] vw:leading-[1.166]'
              : 'text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2]'
          )}
          tabIndex={item.isDisabled ? -1 : 0}
          aria-disabled={item.isDisabled}
        >
          {item.title}
        </a>
      </Link>
    )
  }

  return (

    <>

      <header
      className={`${  existHero ? ((heroVisible == false && openModal == false ) ? "bg-body duration-[200ms]  " : "bg-transparent duration-[300ms]") : "bg-body" } z-[100] 
      ${ openModal ? "justify-center md:!bg-transparent right-0 fixed md:inset-x-0" : `justify-between ${stickyHeader ? "sticky bg-body" :  "fixed inset-x-0"} `} 
      top-0 px-4 md:px-[3.35%] w-full md:mx-auto flex items-center md:justify-between
      py-6 md:pt-5 vw:pt-[1.666vw] md:pb-6 vw:pb-[2.0833vw]`}
      id="header"
      >

        <div className={`cursor-pointer order-3 md:order-1 select-none md:opacity-50 ${openModal && "absolute right-4 md:left-0 md:relative"}`}>

          <div onClick={toggleModalOpen} className={`${openModal && "hidden"} w-[25px] vw:!w-[1.302vw]`}>
            <Image
              src={"/images/burguer.svg"}
              alt="burger"
              layout="responsive"
              width={25}
              height={16}
            />
          </div>

          <div onClick={toggleModalOpen} className={`${!openModal && "hidden"} w-[21px] vw:!w-[1.093vw]`}>
            <Image
              src={"/images/close.svg"}
              alt="burger"
              layout="responsive"
              width={21}
              height={20}
            />
          </div>
          
        </div>

        <div className={`order order-1 md:absolute md:inset-0 md:w-max md:top-[-5px] vw:top-[-.260vw] md:m-auto md:h-max select-none md:order-2`}>
          
          <Link href="/" passHref>
            <a onClick={ () => setOpenModal(false)  } className="block cursor-pointer w-[115px] vw:w-[5.989vw]">
              <Image
                src={Logo}
                alt="logo.png"
                layout="responsive"
              />
            </a>            
          </Link>

        </div>

        <div className="hidden md:block order-3 select-none">

          <Link href={reservationsButton?.link?.url} passHref>
            <a className="button">
              {reservationsButton?.title}
            </a>
          </Link>

        </div>
        
      </header>

      <div
        className={`fixed inset-0 h-full w-full transition-[transform] !duration-[300ms] ${openModal ? "!translate-x-0" : `${(!activeModal && "invisible")}` } -translate-x-full bg-body
        min-h-screen z-[90] w-full flex items-start`}
      >

        <div className={`md:pl-[3.35%] w-full h-full max-w-full md2:max-w-[73.6%] 3xl:max-w-[66.666%] flex flex-col items-center md:items-start justify-between pt-[152px] md:pt-[108px] vw:pt-[5.625vw] pb-6 vw:pb-[1.25vw]`}>

          <div className="flex flex-col w-full md:flex-row space-y-2 md:space-y-0 items-start md:space-x-16 vw:space-x-[3.333vw]">

            <div className="flex flex-col w-full md:w-auto items-center md:items-start space-y-2 vw:space-y-[.416vw]">

              {mainNav.slice(0, 4).map((item) => (
                <NavLink key={item._key} item={item} />
              ))}

            </div>

            <div className="flex flex-col w-full md:w-auto items-center md:items-start space-y-2 vw:space-y-[.416vw]">
              {mainNav.slice(4).map((item) => item.link?.url !== '/locations' ? (
                <NavLink key={item._key} item={item} />
              ) : (
                <div key="secondary" className="group">
                  <NavLink item={item} />

                  <div className={`
                    pt-6 vw:pt-[1.25vw] hidden md:flex flex-col space-y-2 vw:space-y-[.416vw] h-0 overflow-hidden opacity-0
                    group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible group-focus-within:opacity-100 group-focus-within:h-auto group-focus-within:overflow-visible
                  `}>
                    {secondHeaderNav.map((item) => (
                      <NavLink key={item._key} item={item} secondary />
                    ))}
                  </div>
                </div>
              ))}

              <Link key="reservations" href={reservationsButton?.link?.url} passHref>
                <a onClick={toggleModalOpen} className="md:hidden hover_state_link block uppercase tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                  {reservationsButton?.title}
                </a>
              </Link>

            </div>

          </div>

          <div className="flex items-center space-x-6 vw:space-x-[1.25vw]">

            <a onClick={toggleModalOpen} href={facebookHandle} className="block w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/facebook.svg"}
                alt="facebook logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

            <a onClick={toggleModalOpen} href={instagramHandle} className="block w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/instagram.svg"}
                alt="instagram logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

          </div>

        </div>

        <div className={`hidden ${!activeMenuImage && "bg-body"} lg:flex relative w-full h-full max-w-[26.4%] 3xl:max-w-[33.3333%]`}>

          {
            [...secondHeaderNav,...mainNav,{image:menuImage, _key: "_falseKey"}].map((item) => {
              const {image, _key} = item;

              return image ? (
                <div key={_key} className={`${image.asset._ref === activeMenuImage?.asset._ref ? "block" : "hidden" } relative w-full h-full`}>
                  <SanityImage
                    priority                    
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                  />
                </div>
              ) : null
            })
          }
          
        </div>

      </div>

    </>

  )

}