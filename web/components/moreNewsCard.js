import SanityImage from "./sanity-image";

export default function MoreNewsCard({news}) {

  const {title, image, description, slug} = news;

  return (
    
    <div className="flex flex-col lg:grid lg:grid-cols-[35.90%_calc(64.1%-65px)] vw:grid-cols-[35.90%_calc(64.1%-4.513vw)] lg:gap-x-[65px] vw:gap-x-[3.3854vw] w-full">

      <div className="w-full mb-4 vw:mb-[.8333vw]">
        <div className="w-full aspect-h-1 aspect-w-[1.435] md:aspect-w-[2.91] lg:aspect-w-[1.25]">
          <div className="w-full">
            <div className="w-full h-full relative">
              {
                image && (
                  <SanityImage className="object-cover" src={image} alt="Event image" layout="fill"/>
                )
              }              
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:justify-between h-full w-full">

        <div className="flex flex-col w-full mb-8 lg:mb-0">

          <h3 className="font-light text-[24px] lg:text-[32px] vw:text-[1.6666vw] leading-7 lg:leading-[37px] vw:leading-[1.156] tracking-[.05em] md:max-w-[338px] lg:max-w-[616px] vw:max-w-[32.083vw]">
            {title}
          </h3>

          <div className="hidden mt-8 lg:mt-5 vw:mt-[1.0416vw] lg:block text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666vw] font-light opacity-80 md:max-w-[533px] vw:max-w-[27.760vw]">
            {description}
          </div>

        </div>

        <a href={`/news/${slug.current}`} className="max-w-max flex items-center opacity-80">

          <p className="font-light hover_state_link md:font-normal text-xs vw:text-[.625vw] leading-[1.1] tracking-[.05em] uppercase">
            View
          </p>

        </a>

      </div>

    </div>

  )
}
