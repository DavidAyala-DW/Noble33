import Image from "next/image"
import SanityImage from '../sanity-image'
import WhiteRightArrow from "@/public/images/whiteRightArrow.svg";

export default function CollectionGrid(props) {

  const {title, view_all, collections} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col">

      <div className="flex flex-col space-y-2 vw:space-y-[.5vw] mb-[22px] vw:mb-[1.52vw]">

        <h2 className="uppercase tracking-[.05em] opacity-80 text-lg vw:text-[1.25vw] leading-[21px] vw:leading-[1.16] font-medium" >
          {title}
        </h2>

        {
          view_all?.title && (

            <a
            href={view_all.link}
            className="block uppercase opacity-80 tracking-[.05em] text-[10px] leading-[11px] vw:text-[.7vw] vw:leading-[1.1] font-light"
            >
              {view_all.title}
            </a>

          )
        }

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 vw:gap-x-[1.38vw] gap-y-4 vw:gap-y-[1.11vw] w-full">

        {collections && collections.map( collection => {

          const {_key, title, location, image, link} = collection;

          return(

            <div className="relative w-full aspect-w-[1.37] md:aspect-w-[1.34] aspect-h-1" key={_key}>

              <div className="w-full h-full">
                <a href={link} className="h-full block w-full relative">
                  <SanityImage className="w-full h-full"  src={image} layout={"fill"}/> 
                </a>
              </div>

              <div className="absolute w-full h-full inset-0 flex flex-col justify-end pb-5 pl-4 md:pl-6 vw:pl-[1.66vw] pr-7 md:pr-9 vw:pr-[2.5vw]">

                <div className="flex items-end md:items-center justify-between">

                  <div className="flex flex-col space-y-2 vw:space-y-[.5vw]">
              
                    <h3 className="uppercase tracking-[.05em] text-[20px] md:text-[24px] vw:text-[1.66vw] leading-[23px] md:leading-[28px] vw:leading-[1.166] font-medium">
                      {title}
                    </h3>

                    <p className="opacity-80 max-w-[260px] vw:max-w-[18vw] md:max-w-full text-lg vw:text-[1.25vw] leading-[21px] vw:leading-[1.166] font-medium">
                      {location}
                    </p>
                    
                  </div>

                  <a className="block w-[11px] vw:w-[.763vw]" href={link}>
                    <Image
                      src="/images/whiteRightArrow.svg"
                      alt="white arrow"
                      width={11}
                      height={19}
                      layout="responsive"
                    />
                  </a>

                </div>

              </div>
              
            </div>

          )

        })}
      </div>

    </section>

  )
}
