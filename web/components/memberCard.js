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
        className="absolute inset-0 w-full h-full flex flex-col justify-end space-y-0.5 pb-3 px-[14px] md:pb-4 vw:pb-[1.0416vw] md:px-5 vw:px-[1.0416vw] z-[2]"
      >

        <h3 className="text-[8px] xl:text-[10px] leading-[23px] vw:text-[1vw] tracking-[.05em] uppercase font-light">
          {title}
        </h3>

        <p className="text-[8px] xl:text-[10px] vw:text-[.8vw] opacity-80 font-light leading-tight">
          {role}
        </p>

      </div>

    </div>

  )
}
