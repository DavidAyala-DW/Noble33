import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import SanityImage from './sanity-image'
import Link from "next/link";
import Logo from "@/public/images/logo.png"

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

  function handleClick(){
    const updatedModalValue = !openModal;
    setOpenModal(updatedModalValue);
  }

  function handleMouseOver(image){
    setActiveMenuImage(image)
  }

  function handleMouseDown(){
    setActiveMenuImage(menuImage)
  }

  useEffect(() => {

    setActiveModal(true);

    if(menuImage){
      handleMouseDown()
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

  return (

    <>

      <header
      className={`${  existHero ? ((heroVisible == false && openModal == false ) ? "bg-body duration-[200ms]  " : "bg-transparent duration-[300ms]") : "bg-body" } z-[100] 
      ${ openModal ? "justify-center md:!bg-transparent right-0 fixed md:inset-x-0" : `justify-between ${stickyHeader ? "sticky bg-body" :  "fixed inset-x-0"} `} 
      top-0 px-4 md:px-[3.35%] w-full md:mx-auto flex items-center md:justify-between
      py-6 md:pt-8 vw:pt-[1.666vw] md:pb-10 vw:pb-[2.0833vw]`}
      id="header"
      >

        <div className={`cursor-pointer order-3 md:order-1 select-none md:opacity-50 ${openModal && "absolute right-4 md:left-0 md:relative"}`}>

          <div onClick={handleClick} className={`${openModal && "hidden"} w-[25px] vw:!w-[1.302vw]`}>
            <Image
              src={"/images/burguer.svg"}
              alt="burger"
              layout="responsive"
              width={25}
              height={16}
            />
          </div>

          <div onClick={handleClick} className={`${!openModal && "hidden"} w-[21px] vw:!w-[1.093vw]`}>
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
            <a className="block">
              <p className="font-medium hover_state_link text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] tracking-[.05em] uppercase opacity-70 hover_state_link">
                {reservationsButton?.title}
              </p>
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

              { mainNav.map((item,index) => {

                if(index < 4){

                  const {title, link, image, _key} = item;

                  return (
                    <Link href={link?.url} passHref key={_key} >
                      <a onMouseLeave={handleMouseDown} onMouseEnter={() => handleMouseOver(image)} onClick={handleClick} className="block uppercase hover_state_link tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                        {title}
                      </a>
                    </Link>
                  )

                }

              })}

            </div>

            <div className="flex flex-col w-full md:w-auto items-center md:items-start space-y-2 vw:space-y-[.416vw]">

              {mainNav.map((item,index) => {

                if(index >= 4){

                  const {title, link, image, _key} = item;

                  return (
                    <Link href={link?.url} passHref key={_key} >
                      <a onMouseLeave={handleMouseDown} onMouseEnter={() => handleMouseOver(image)} onClick={handleClick} className="block hover_state_link uppercase tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                        {title}
                      </a>
                    </Link>
                  )

                }

              })}

              <Link href={reservationsButton?.link?.url} passHref>
                <a onClick={handleClick} className="md:hidden hover_state_link block uppercase tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                  {reservationsButton?.title}
                </a>
              </Link>
              
              <div className="pt-6 vw:pt-[1.25vw] hidden md:flex flex-col space-y-2 vw:space-y-[.416vw]">

                {secondHeaderNav.map( (item,index)  => {

                  const {title, link, image, _key} = item;

                  return (
                    <Link href={link?.url} passHref key={_key} >
                      <a onMouseLeave={handleMouseDown} onMouseEnter={() => handleMouseOver(image)} onClick={handleClick} className="block hover_state_link uppercase tracking-[.05em] text-[24px] vw:text-[1.25vw] leading-[28px] vw:leading-[1.166] font-light opacity-80">
                        {title}
                      </a>
                    </Link>
                  )

                })}

              </div>

            </div>

          </div>

          <div className="flex items-center space-x-6 vw:space-x-[1.25vw]">

            <a onClick={handleClick} href={facebookHandle} className="block w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/facebook.svg"}
                alt="facebook logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

            <a onClick={handleClick} href={instagramHandle} className="block w-6 vw:w-[1.25vw]">

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
              return (
                <div key={_key} className={`${JSON.stringify(image) == JSON.stringify(activeMenuImage) ? "block" : "hidden" } relative w-full h-full`}>
                  <SanityImage                    
                    priority={true}
                    className={`object-cover`}
                    src={image}
                    layout="fill"
                    quality={80}
                  />
                </div>
              )
            })
          }
          
        </div>

      </div>

    </>

  )

}