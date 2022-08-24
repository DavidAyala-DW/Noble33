import React from 'react'

export default function HeroText(props) {

  const {title, description} = props;

  return (

    <section className='px-4 md:px-0 pt-[160px] md:pt-[204px] vw:pt-[14.166vw] pb-[120px] md:pb-[190px] vw:pb-[13.194vw] md:max-w-[93.3%] w-full mx-auto flex flex-col justify-center'>

      <div className="flex flex-col space-y-6 vw:space-y-[1.666vw]">

        <h1 className="opacity-90 uppercase tracking-[.05em] text-[32px] md:text-[40px] vw:text-[2.777vw] leading-[1.2] font-light text-center">
          {title}
        </h1>

        <p className="opacity-80 text-center max-w-[690px] vw:max-w-[47.916vw] mx-auto text-[20px] vw:text-[1.388vw] leading-[1.5] font-light">
          {description}
        </p>

      </div>

    </section>

  )

}
