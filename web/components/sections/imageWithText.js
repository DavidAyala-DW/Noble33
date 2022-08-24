import SanityImage from "../sanity-image";
import SimpleBlockContent from '@/components/simple-block-content'

export default function ImageWithText(props) {

  const {title, description, image, position} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col md:flex-row  space-y-5 md:space-y-0 md:items-center justify-between">

      <div
        className={`w-full md:w-1/2 order-1
        ${position == "firstImage" ? "md:order-1" : "md:order-2" }`
      }>  

        <div className={`aspect-w-[1.34] aspect-h-1`}>        

          <div className="w-full h-full">
            <div className="w-full h-full relative">
              <SanityImage quality={100} src={image} layout="fill" alt="Image" />
            </div>
          </div>

        </div>

     </div>


      <div
        className={`w-full md:w-1/2 order-2 flex flex-col space-y-6 vw:space-y-[1.666vw]
        ${position == "firstImage" ? "md:order-2 md:pl-[9.86%]" : "md:order-1 md:pr-[9.86%]" }`
      }>        

        <h2 className="tracking-[.05em] text-[28px] md:text-[32px] leading-[32px] md:leading-[37px] vw:text-[2.222vw] vw:leading-[1.156] font-extralight">
          {title}
        </h2>

        <div className="opacity-80 text-base md:text-lg leading-[21px] vw:text-[1.25vw] vw:leading-[1.1666] font-light md:max-w-[400px] vw:max-w-[27.77vw]">
          <SimpleBlockContent blocks={description} />
        </div>

      </div>

    </section>

  )

}
