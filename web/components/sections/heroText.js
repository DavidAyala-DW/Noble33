import React from 'react'

export default function HeroText(props) {

  const {title, description, cta, onlyPaddingTop} = props;

  return (

    <section className={`px-4 md:px-0 pt-[108px] md:pt-[160px] vw:pt-[8.5vw]  ${!onlyPaddingTop && "pb-[56px] md:pb-[80px]" }  vw:pb-[6.354vw] md:max-w-[93.3%] w-full mx-auto flex flex-col justify-center`}>

      <div className="flex flex-col items-center space-y-6 text-center vw:space-y-[1.25vw]">

        <h1 className="opacity-90 uppercase tracking-[.05em] text-[32px] md:text-[40px] vw:text-[2.08333vw] leading-[1.2] font-extralight">
          {title}
        </h1>

        <p className="opacity-80 max-w-[690px] vw:max-w-[35.9375vw] mx-auto text-[20px] vw:text-[1.0416vw] leading-[1.5] font-light">
          {description}
        </p>

        {cta?.label && cta?.link.href ? (
          <a href={cta.link.href} className="block hover_state_link font-light text-xs vw:text-[.625vw] leading-[1.1] tracking-[.05em] uppercase">{cta.label}</a>
        ) : null}

      </div>

    </section>

  )

}
