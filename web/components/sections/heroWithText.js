import BackgroundImage from "../backgroundImage";

export default function HeroWithText(props) {

  const {title, description, backgroundImage} = props;

  return (

    <section className="w-full flex flex-col">

      <div className="w-full">
        <BackgroundImage {...{...backgroundImage}} />
      </div>

      <div className="flex flex-col px-4 md:px-0 space-y-6 md:space-y-3 vw:space-y-[.8333vw] mt-8 md:mt-[-55px] vw:mt-[-3.8194vw] z-10">

        <h1 className="tracking-[.05em] text-[32px] md:text-[40px] vw:text-[2.777vw] leading-[1.2] font-extralight md:text-center uppercase opacity-90">
          {title}
        </h1>

        <p className="md:tracking-[.05em] text-[20px] vw:text-[1.3888vw] leading-[1.5] font-light md:text-center opacity-80 md:max-w-[572px] vw:max-w-[39.7222vw] md:mx-auto">
          {description}
        </p>

      </div>


    </section>

  )

}
