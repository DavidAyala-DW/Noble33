import BackgroundImage from "../backgroundImage";
import SimpleBlockContent from '@/components/simple-block-content'

const HeroHomepage = (props) => {

  const {title, description, reservation, backgroundImage} = props;

  return (

     <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col space-y-8">

      <div className="w-full">
        <BackgroundImage {...{...backgroundImage}} />
      </div>

      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        
        <h1 className="max-w-[80%] md:max-w-[calc(50%-48px)] w-full uppercase text-[32px] md:text-[40px] leading-[1.2] tracking-[.05em] opacity-90 font-extralight">
          {title}
        </h1>

        <div className="flex flex-col space-y-10 md:space-y-12">

          <div className="font-extralight opacity-80 leading-[1.5] text-[20px]">
            <SimpleBlockContent blocks={description} />
          </div>

          <a href={reservation.link} className="block opacity-80 tracking-[.05em] uppercase text-[10px] leading-[11px] font-extralight">
            {reservation.label}
          </a>

        </div>

      </div>

    
    </section>

  );

}

export default HeroHomepage;
