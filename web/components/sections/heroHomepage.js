import BackgroundImage from "../backgroundImage";
import SimpleBlockContent from '@/components/simple-block-content'
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

const HeroHomepage = (props) => {

  const {title, description, reservation, slides} = props;

  return (

     <section className="px-4 md:px-6 lg:px-0 lg:max-w-[93.3%] w-full mx-auto flex flex-col space-y-8 md:space-y-[37px] lg:space-y-8 vw:space-y-[1.92vw]" id="mainHero">

      <div className="w-full aspect-h-1 aspect-w-[2.13125] md:aspect-w-[1.9333] lg:aspect-w-[2.742] 3xl:aspect-w-[3.722]">
        <div className="w-full h-full">
            <div className="relative w-full h-full">

              {
                slides && (
                  <>

                    <Swiper
                      spaceBetween={24}
                      slidesPerView={1}
                      pagination={
                        {
                          el: '.swiper-pagination-homepage',
                          clickable: true,
                        }
                      }
                      modules={[Pagination]}
                      className="w-full h-full"
                    >
                      {
                        slides.map( slide => {

                          const {_key} = slide;
                          if(!slide) return;

                          return (
                            <SwiperSlide key={_key} className=" w-full h-full relative" >
                              <BackgroundImage className="object-cover w-full h-full relative" layout="fill" {...{...slide,priority:true}} />
                            </SwiperSlide>
                          )

                        })
                      }
                      
                    </Swiper>

                    <div className="swiper-pagination-homepage z-[10] absolute !bottom-2 !right-3 !left-[unset] !max-w-max">
                    </div>
                    
                  </>
                )
              }

            </div>

        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6 vw:space-x-[1.25vw] w-full">
        
        <h1
        className="max-w-[80%] md:max-w-[70.7%] lg:max-w-[calc(50%-20px)] vw:max-w-[calc(50%-1.0416vw)] w-full
        uppercase text-[32px] lg:text-[40px] vw:text-[2.083vw] leading-[1.2] tracking-[.05em] opacity-90 font-extralight"
        >
          {title}
        </h1>

        <div className="flex flex-col space-y-10 lg:space-y-12 vw:space-y-[2.5vw] w-full">

          <div className="font-extralight opacity-80 md:max-w-[71.83%] lg:max-w-full leading-[1.5] text-[20px] vw:text-[1.0416vw]">
            <SimpleBlockContent blocks={description} />
          </div>

          <Link href={reservation.link} passHref>
            <a target="_blank" rel="noopener nooreferrer" className="block opacity-80 tracking-[.05em] uppercase text-[10px] vw:text-[0.520vw] leading-[11px] vw:leading-[1.1] font-extralight">
              {reservation.label}
            </a>
          </Link>

        </div>

      </div>

    
    </section>

  );

}

export default HeroHomepage;
