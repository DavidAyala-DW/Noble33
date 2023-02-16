import SanityImage from "./sanity-image";

export default function MemberCard({member}) {

  const {image, title, role} = member;

  return (

    <div className="w-full aspect-w-1 aspect-h-1 relative">

      <div className="w-full h-full">
        <div className="relative w-full h-full">
          <SanityImage className="object-cover" src={image} layout="fill" />
        </div>
      </div>

      <div className="absolute inset-0 top-auto h-1/2 z-[1] bg-gradient-to-t from-black/80 to-transparent"></div>

      <div
      className="absolute inset-0 w-full h-full flex flex-col justify-end space-y-1 pb-3 pl-[14px] md:pb-4 vw:pb-[1.0416vw] md:pl-5 vw:pl-[1.0416vw] z-[2]"
      >

        <h3 className="text-base leading-[23px] vw:text-[1.25vw] tracking-[.05em] uppercase font-light">
          {title}
        </h3>

        <p className="text-sm vw:text-[.9375vw] opacity-80 font-light leading-tight">
          {role}
        </p>

      </div>

    </div>

  )
}
