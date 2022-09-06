import Image from "next/image"

export default function Newsletter(props) {

  const {title, titleSize, description, descriptionSize, placeholder} = props;

  const titleOptions = {
    "normal" : "text-base lg:text-lg vw:text-[.9375vw] leading-[18px] lg:leading-[21px] vw:leading-[1.1666] font-medium tracking-[.05em]",
    "large" : "font-extralight text-[32px] md:text-[40px] vw:text-[2.0833vw] leading-[1.2] text-center tracking-[.05em] uppercase",
  }

  const descriptionOptions = {
    "normal" : "font-light text-center text-[24px] lg:text-[32px] vw:text-[1.6666vw] leading-[1.2]  md:max-w-[500px] lg:max-w-[660px] vw:max-w-[34.375vw] tracking-[.05em]",
    "large": "font-light text-center opacity-80 text-[20px] vw:text-[1.0416vw] leading-[1.5] md:max-w-[500px] lg:max-w-[675px] vw:max-w-[35.156vw] "
  }

  return (

    <section className='px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col'>

      <h2
        className={`opacity-80 text-center uppercase mb-6 vw:mb-[1.25vw]
        ${ titleSize ? titleOptions[titleSize] : titleOptions["normal"] }`}
      >
        {title}
      </h2>

      <p
        className={`opacity-80 mb-9 md:mb-10 vw:mb-[2.0833vw]  md:mx-auto
        ${descriptionSize ? descriptionOptions[descriptionSize] : descriptionOptions["normal"] }`}
      >
        {description}
      </p>

      <form action="" className='w-full flex flex-col'>

        <fieldset className='flex items-center space-x-5 justify-between w-full border-2 vw:border-[.104vw] border-[rgba(205,_205,_205,_0.2)] py-3 vw:py-[.625vw] px-4 lg:pl-6 vw:pl-[1.25vw] lg:pr-[14px] vw:pr-[.729vw] md:max-w-[343px] lg:max-w-[546px] vw:max-w-[28.4375vw] md:mx-auto'>

          <input
            type="text"
            placeholder={placeholder}
            className="outline-none w-full font-light text-base bg-transparent lg:text-lg vw:text-[.9375vw] leading-[1.5] opacity-80 placeholder:opacity-80 placeholder:text-white"
          />

          <button type="submit" className="w-[26px] vw:w-[1.354vw]">
            <Image
              src="/images/footerArrow.svg"
              alt="White arrow"
              width={26}
              height={19}
              layout="responsive"
            />
          </button>

        </fieldset>        

      </form>

    </section>

  )

}
