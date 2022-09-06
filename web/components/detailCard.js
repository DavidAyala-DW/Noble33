import SanityImage from "./sanity-image";

export default function DetailCard({detail}) {

  const {image, title, description} = detail;

  return (

    <div className="flex flex-col w-full">

      <div className="w-full relative mb-6 vw:mb-[1.25vw]">
        <div className="aspect-h-1 w-full aspect-w-[1.491] md:aspect-w-[2.802] lg:aspect-w-[1.719] 3xl:aspect-w-[2.30]">
          <div className="w-full h-full">
            <div className="relative w-full h-full">
              <SanityImage src={image} className="object-cover" layout={"fill"}/>
            </div>
          </div>
        </div>
      </div>

      <h3 className="uppercase opacity-80 tracking-[.05em] text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.16666] font-medium mb-4 vw:mb-[.83333vw]">
        {title}
      </h3>

      <p className="md:max-w-[500px] vw:max-w-[26.041vw] w-full text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] opacity-80 font-light">
        {description}
      </p>

    </div>

  )
}
