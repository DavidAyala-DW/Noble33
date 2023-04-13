import SanityImage from "../sanity-image";
import SimpleBlockContent from '@/components/simple-block-content'

export default function ImageWithText(props) {

  const {title, description, image, position} = props;

  return (

    <section className="px-4 md:px-6 lg:px-0 lg:max-w-[93.3%] 3xl:max-w-[95%] w-full mx-auto flex flex-col lg:flex-row  space-y-5 lg:space-y-0 lg:items-center justify-between">

      <div
        className={`w-full lg:w-[51.82%] 3xl:w-[49.39%] order-1
        ${position == "firstImage" ? "lg:order-1" : "lg:order-2" }`
      }>  

        <div className={`aspect-w-[1.435] md:aspect-w-[2.9121] lg:aspect-w-[1.414] 3xl:aspect-w-[1.831] aspect-h-1`}>        

          <div className="w-full h-full">
            <div className="w-full h-full relative">
              <SanityImage src={image} layout="fill" alt="Image" className="object-cover md:object-[0_16%] lg:object-top" />
            </div>
          </div>

        </div>

     </div>


      <div
        className={`w-full lg:w-[48.28%] 3xl:w-[50.61%] order-2 flex flex-col space-y-6 vw:space-y-[1.25vw]
        ${position == "firstImage" ? "lg:order-2 lg:pl-[9.86%]" : "lg:order-1 lg:pr-[9.86%]" }`
      }>        

        <h2 className="tracking-[.05em] text-[28px] md:text-[24px] lg:text-[32px] leading-[32px] md:leading-[28px] lg:leading-[37px] vw:text-[1.927vw] vw:leading-[1.156] font-light">
          {title}
        </h2>

        <div className="opacity-80 text-lg leading-[21px] vw:text-[.9375vw] vw:leading-[1.1666] font-light md:max-w-[500px] lg:max-w-[400px] vw:max-w-[20.833vw]">
          <SimpleBlockContent blocks={description} />
        </div>

      </div>

    </section>

  )

}
