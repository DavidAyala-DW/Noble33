import BackgroundImage from "../backgroundImage";
import SimpleBlockContent from '@/components/simple-block-content'

export default function BannerWithText(props) {

  const {title, description, learn_more, backgroundImage} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col space-y-11 vw:space-y-[3.05vw]">

      <div className="w-full">
        <BackgroundImage {...{...backgroundImage}} />
      </div>

      <div className="flex flex-col">

        <h2 className="tracking-[.05em] font-extralight text-[24px] md:text-[32px] vw:text-[2.222vw] leading-[30px] md:leading-[37px] vw:leading-[1.156] mb-6 md:mb-[1.666vw]">
          {title}
        </h2>

        <div className="opacity-80 text-lg leading-[21px] md:max-w-[400px] vw:max-w-[27.77vw] vw:text-[1.25vw] vw:leading-[1.1666] font-light mb-8 vw:mb-[2.222vw]">
          <SimpleBlockContent blocks={description} />
        </div>

        <a className="block font-light text-[10px] vw:text-[.694vw] leading-[13px] vw:leading-[1.3] tracking-[.05em] uppercase" href={learn_more.link}>
          {learn_more.title}
        </a>

      </div>

    </section>

  )
}
