import React from 'react'

export default function HeroText(props) {

  const {title, description, onlyPaddingTop} = props;

  return (

    <section className={`px-4 md:px-0 pt-[120px] md:pt-[208px] vw:pt-[10.8333vw]  ${!onlyPaddingTop && "pb-[120px] md:pb-[122px]" }  vw:pb-[6.354vw] md:max-w-[93.3%] w-full mx-auto flex flex-col justify-center`}>

      <div className="flex flex-col space-y-6 vw:space-y-[1.25vw]">

        <h1 className="opacity-90 uppercase tracking-[.05em] text-[32px] md:text-[40px] vw:text-[2.08333vw] leading-[1.2] font-extralight text-center">
          {title}
        </h1>

        <p className="opacity-80 text-center max-w-[690px] vw:max-w-[35.9375vw] mx-auto text-[20px] vw:text-[1.0416vw] leading-[1.5] font-light">
          {description}
        </p>

      </div>

    </section>

  )

}
