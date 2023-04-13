import BackgroundImage from "../backgroundImage";
import SimpleBlockContent from '@/components/simple-block-content'

export default function BannerWithText(props) {

  const {title, description, description_container, learn_more, backgroundImage, image_size} = props;

  const description_container_ratio = {
    "format-1": "md:max-w-[400px] vw:max-w-[20.8333vw]",
    "format-2": "md:max-w-[533px] vw:max-w-[27.7604vw]",    
  }

  const ratio = {
    "format-1": "aspect-w-[1.150] md:aspect-w-[2.289] lg:aspect-w-[3.26] 3xl:aspect-w-[4.38]",
    "format-2": "aspect-w-[1.153] md:aspect-w-[2.289] lg:aspect-w-[1.7] 3xl:aspect-w-[2.28]",
    "original": "",
  }

  return (

    <section className="lg:max-w-[93.3%] 3xl:max-w-[95%] w-full mx-auto flex flex-col space-y-4 lg:space-y-11 vw:space-y-[2.291vw]">

      <div className={`w-full aspect-h-1 ${image_size ? ratio[image_size] : ratio["original"]}`}>
        <div className="w-full h-full">

          <div className="relative w-full h-full">
            <BackgroundImage {...{...backgroundImage}} className="object-cover" layout={(image_size && image_size != "original" ? "fill" : "responsive"  )} />
          </div>

        </div>
      </div>
      
      <div className="flex flex-col px-4 md:px-10 lg:px-0 ">
        {title ? (
          <h2 className="tracking-[.05em] font-light text-[24px] lg:text-[32px] vw:text-[1.666vw] leading-[28px] lg:leading-[37px] vw:leading-[1.156] mb-6 vw:mb-[1.25vw]">
            {title}
          </h2>
        ) : null}

        {description ? (
          <div className={`opacity-80 text-lg leading-[21px]
          ${description_container ?  description_container_ratio[description_container] : description_container_ratio["format-1"] }
          vw:text-[.9375vw] vw:leading-[1.1666] font-light mb-8 vw:mb-[1.6666vw]`
          }>
            <SimpleBlockContent blocks={description} />
          </div>
        ) : null}

        {learn_more?.title && learn_more?.link ? (
          <a className="block hover_state_link font-light text-xs vw:text-[.625vw] leading-[1.1] tracking-[.05em] uppercase" href={learn_more.link}>
            {learn_more.title}
          </a>
        ) : null}

      </div>

    </section>

  )
}
