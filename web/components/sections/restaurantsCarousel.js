import Image from "next/image"
import CollectionCard from "../collectionCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";

export default function RestaurantsCarousel(props) {

  const {title, view_all, collections} = props;

  return (

    <section className="pl-4 md:pl-6 lg:pl-[3.33%] 3xl:pl-[2.5%] w-full flex flex-col pb-12 vw:pb-[2.5vw] relative">

      <div className="flex flex-col w-full space-y-2 vw:space-y-[.416vw] mb-8 md:mb-[52px] vw:mb-[2.708vw]">

        <h2 className="opacity-80 uppercase tracking-[.05em] text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] font-light">
          {title}
        </h2>

        <a href={view_all.link} className="block hover_state_link uppercase tracking-[.05em] text-xs vw:text-[.625vw] leading-[1.1] font-light">
          {view_all.title}
        </a>

      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={2.1}
        className="w-full"
        navigation={{
          prevEl: '.left-arrow',
          nextEl: '.right-arrow ',
        }}
        modules={[Navigation]}
        breakpoints = {{

          320: {
            slidesPerView: 1.065,
            spaceBetween: 12
          },
          744: {
            slidesPerView: 2.05,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 2.07,
            spaceBetween: 16,
          },
          1920: {
            slidesPerView: 2.025,
            spaceBetween: 16,
          },

        }}
      >

        {collections && collections.map( collection => {

          const {_key} = collection;

          return(
            <SwiperSlide key={_key} className="flex flex-col w-full">
              <CollectionCard collection={collection} />
            </SwiperSlide>
            
          ) 

        })}

      </Swiper>

      <div className="absolute pl-[3.33%] bottom-0 left-0 flex items-center space-x-4 vw:space-x-[.83333vw]">

        <div className="left-arrow cursor-pointer w-[11px] vw:w-[.572vw]" role='button' tabIndex={0}>
          <Image
            src="/images/prev.svg"
            aria-label="Previous Restaurant"
            width={11}
            height={19}
            layout="responsive"
          />
        </div>

        <div className="right-arrow cursor-pointer w-[11px] vw:w-[.572vw]" role='button' tabIndex={0}>
          <Image
            src="/images/next.svg"
            aria-label="Next Restaurant"
            width={11}
            height={19}
            layout="responsive"
          />
        </div>

      </div>

    </section>

  )

}
