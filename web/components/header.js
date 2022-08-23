import { useState } from "react";
import Link from "next/link";
import Burger from "@/public/images/burguer.svg"
import Close from "@/public/images/close.svg"
import Logo from "@/public/images/logo.svg"
import Facebook from "@/public/images/facebook.svg"
import Instagram from "@/public/images/instagram.svg"

export default function Header(props) {
  
  const {
    mainNav,
    secondHeaderNav,
    facebookHandle,
    instagramHandle
  } = props;
  
  const [openModal, setOpenModal] = useState(false);

  function handleClick(){

    const updatedModalValue = !openModal;
    setOpenModal(updatedModalValue);

    const body = document.querySelector('body');

    if(updatedModalValue){
      body.classList.add("overflow-hidden");
      return;
    }

    body.classList.remove("overflow-hidden");

  }

  return (

    <>

      <header
      className={`bg-body transition-all duration-300 md:bg-transparent z-[100] ${openModal ? "justify-center !pl-0 right-0 fixed md:inset-x-0" : "justify-between sticky"} top-0 px-4 md:px-0 
      md:max-w-[93.3%] w-full md:mx-auto flex items-center md:justify-between py-6 md:pt-8 md:pb-10`}
      >

        <div className={`cursor-pointer order-3 md:order-1 select-none opacity-50 ${openModal && "absolute md:relative right-3"}`}>

          <div onClick={handleClick} className={`${openModal && "hidden"}`}>
            <Burger/>
          </div>

          <div onClick={handleClick} className={`${!openModal && "hidden"}`}>
            <Close/>
          </div>
          
        </div>

        <div className={`order order-1 select-none md:order-2 ${openModal && "ml-[50px] md:ml-0"}`}>
          
          <Link href="/" passHref>
            <a className="block">
              <Logo className="cursor-pointer"/>
            </a>            
          </Link>

        </div>

        <div className="hidden md:block order-3 select-none">

          <Link href="/reservations">
            <p className="font-medium text-lg leading-[21px] tracking-[.05em] uppercase opacity-70">Reservations</p>
          </Link>

        </div>
        
      </header>

      <div
        className={`pl-[3.35%] fixed inset-0 h-full w-full transition-transform duration-300 ${openModal && "!translate-x-0"} -translate-x-full bg-body
        pt-[152px] md:pt-[108px] pb-6 min-h-screen flex flex-col items-center md:items-start justify-between z-[90] w-full max-w-full md2:max-w-[73.6%]`}
      >

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-start md:space-x-16">

          <div className="flex flex-col w-full items-center md:items-start space-y-2">

            {mainNav.map((item,index) => {

              if(index < 4){

                const {title,link} = item;
                console.log(link);
                return (
                  <a href={link} key={index} className="block uppercase tracking-[.05em] text-[32px] md:text-[48px] leading-[1.2] font-light opacity-90">
                    {title}
                  </a>
                )

              }

            })}

          </div>

          <div className="flex flex-col w-full items-center md:items-start space-y-2">

            {mainNav.map((item,index) => {

              if(index >= 4){

                const {title,link} = item;

                return (
                  <a href={link} key={index} className="block uppercase tracking-[.05em] text-[32px] md:text-[48px] leading-[1.2] font-light opacity-90">
                    {title}
                  </a>
                )

              }

            })}

            <Link href="/" passHref>
              <a className="md:hidden block uppercase tracking-[.05em] text-[32px] md:text-[48px] leading-[1.2] font-light opacity-90">
                RESERVATIONS
              </a>
            </Link>
            
            <div className="pt-6 hidden md:flex flex-col space-y-2">

              {secondHeaderNav.map( (item,i)  => {

                const {title,link} = item;

                return (
                  <a href={link} key={i} className="block uppercase tracking-[.05em] text-[24px] leading-[28px] font-light opacity-80">
                    {title}
                  </a>
                )

              })}

            </div>

          </div>

        </div>

        <div className="flex items-center space-x-6">

          <a href={facebookHandle}>
            <Facebook/>
          </a>

          <a href={instagramHandle}>
            <Instagram/>
          </a>

        </div>

      </div>

    </>

  )

}
