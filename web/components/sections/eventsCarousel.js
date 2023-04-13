import Image from "next/image"
import SanityImage from '../sanity-image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";

export default function EventsCarousel(props) {

  const {title, view_all, events} = props;

  return (

    <section className="pl-4 md:pl-[3.33%] w-full flex flex-col pb-[74px] md:pb-[95px] vw:pb-[4.947vw] relative">

      <div className="flex flex-col w-full space-y-2 vw:space-y-[.41666vw] mb-8 md:mb-[52px] vw:mb-[2.708vw]">

        <h2 className="opacity-80 uppercase tracking-[.05em] text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] font-light mb-2">
          {title}
        </h2>

        <a href={view_all.link} className="block hover_state_link uppercase tracking-[.05em] text-xs vw:text-[.625vw] leading-[1.1] font-light">
          {view_all.title}
        </a>

      </div>

      <Swiper
        spaceBetween={60}
        slidesPerView={3.2}
        className="w-full"
        navigation={{
          prevEl: '.left-arrow',
          nextEl: '.right-arrow ',
        }}
        modules={[Navigation]}
        breakpoints = {{

          320: {
            slidesPerView: 1.08,
            spaceBetween: 12
          },
          744: {
            slidesPerView: 2.08,
            spaceBetween: 12
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 60
          }

        }}
      >

        {events.map(event => {

          const {_key, image, title, description, view_more} = event;

          return (

            <SwiperSlide key={_key} className="flex flex-col w-full pb-1">

              <div className="relative w-full aspect-w-[1.70] aspect-h-1 mb-4 vw:mb-[.8333vw]">

                <div className="w-full h-full ">
                  <a href={view_more.link} className="w-full relative h-full block">
                    <SanityImage className="w-full h-full"  src={image} layout={"fill"}/> 
                  </a>
                </div>

              </div>  

              <h3 className="tracking-[.05em] leading-[25px] md:leading-9 vw:leading-[1.125] text-[24px] md:text-[32px] vw:text-[1.6666vw] font-light mb-6 vw:mb-[1.25vw]">
                {title}
              </h3>

              <div className="opacity-80 text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] font-light mb-8 vw:mb-[1.6666vw]">
                {description}
              </div>

              <a href={view_more.link} className="block opacity-90 hover_state_link tracking-[.05em] text-xs vw:text-[.625vw] leading-[1.1] font-light">
                {view_more.title}
              </a>

            </SwiperSlide>

          )

        } )}

      </Swiper>

      <div className="absolute pl-[3.33%] bottom-0 left-0 flex items-center space-x-4 vw:space-x-[.83333vw]">

        <div className="left-arrow cursor-pointer w-[11px] vw:w-[.572vw]">
          <Image
            src="/images/prev.svg"
            alt="Next"
            width={11}
            height={19}
            layout="responsive"
          />
        </div>

        <div className="right-arrow cursor-pointer w-[11px] vw:w-[.572vw]">
          <Image
            src="/images/next.svg"
            alt="Next"
            width={11}
            height={19}
            layout="responsive"
          />
        </div>

      </div>

    </section>

  )

}
