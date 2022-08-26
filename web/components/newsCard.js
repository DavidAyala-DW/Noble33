import SanityImage from "./sanity-image";

export default function NewsCard({news}) {

  const {title, link, image} = news;

  return (

    <div className="w-full flex flex-col">

      <div
      className="mb-4 lg:mb-6 vw:mb-[1.666vw] w-full aspect-h-1
      aspect-w-[1.435] md:aspect-w-[1.469] lg:aspect-w-[1.308] 3xl:aspect-w-[1.78]"
      >
        <div className="w-full h-full">
          <div className="relative w-full h-full">
            <SanityImage src={image} layout="fill" quality={100} />
          </div>
        </div>
      </div>

      <h3
      className="font-extralight md:font-light text-[24px] lg:text-lg vw:text-[1.25vw]
      leading-7 lg:leading-[21px] vw:leading-[1.1666] tracking-[.05em] mb-8 lg:mb-6 vw:mb-[1.666vw] lg:max-w-[452px] vw:max-w-[31.38vw]"
      >
        {title}
      </h3>

      <a href={link.url} className="block font-light lg:font-normal text-[10px] vw:text-[.694vw] leading-[13px] vw:leading-[1.3] tracking-[.05em] uppercase">
        {link.title}
      </a>

    </div>

  )

}
