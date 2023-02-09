import SanityImage from "./sanity-image";

export default function MemberCard({member}) {

  const {image, title, role} = member;

  return (

    <div className="w-full aspect-h-1 aspect-w-[.7] md:aspect-w-[.803] lg:aspect-w-[.7727] 3xl:aspect-w-[1.033] relative">

      <div className="w-full h-full">
        <div className="relative w-full h-full">
          <SanityImage className="object-cover" src={image} layout="fill" />
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-[1] member-gradient"></div>

      <div
      className="absolute inset-0 w-full h-full flex flex-col space-y-[5px]
      md:space-y-[2px] vw:space-y-[.104vw] justify-end pb-1 pl-[14px] md:pb-5 vw:pb-[1.0416vw] md:pl-5 vw:pl-[1.0416vw] z-[2]"
      >

        <h3 className="text-[20px] leading-[23px] md:text-[24px] vw:text-[1.25vw] md:leading-7 vw:leading-[1.1666] tracking-[.05em] uppercase font-medium">
          {title}
        </h3>

        <p className="text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666vw] opacity-80 font-medium">
          {role}
        </p>

      </div>

    </div>

  )
}
