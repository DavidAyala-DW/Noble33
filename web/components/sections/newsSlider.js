import Image from "next/image"
import Link from "next/link"
import SanityImage from '../sanity-image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";

export default function NewsSlider(props) {

  const {title, view_all, news_slider} = props;

  return (

    <section className="pl-4 md:pl-[3.33%] w-full flex flex-col pb-[74px] md:pb-[95px] vw:pb-[4.947vw] relative">

      <div className="flex flex-col w-full space-y-2 vw:space-y-[.41666vw] mb-8 md:mb-[52px] vw:mb-[2.708vw]">

        <h2 className="text-heading-1">
          {title}
        </h2>

        <a href={view_all.link} className="text-cta hover_state_link block text-lg">
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

        {news_slider.map( news => {

          const {_id, image, publicationLogo, title, description, slug} = news;

          const view_more = {
            title: "View",
            link: `/news/${slug?.current}`
          }

          return (

            <SwiperSlide key={_id} className="flex flex-col w-full pb-1">

              <div className="relative w-full aspect-w-[1.70] aspect-h-1 mb-5 vw:mb-[.8333vw]">

                <div className="w-full h-full ">
                  <Link href={view_more?.link} passHref>
                    <a className="w-full relative h-full block" role='img'>
                      <SanityImage className="w-full h-full"  src={image} layout={"fill"}/> 
                    </a>
                  </Link>
                </div>

              </div>  

              {publicationLogo ? (
                <div className="mb-3">
                  <SanityImage src={publicationLogo} width={60} height={30} objectFit="contain" />
                </div>
              ) : null}
              
              <Link href={view_more?.link}>
                <h3 className="tracking-[.05em] limit-2-lines leading-[25px] md:leading-9 vw:leading-[1.125] text-[24px] md:text-[32px] vw:text-[1.6666vw] font-light mb-6 vw:mb-[1.25vw]">
                  {title}
                </h3>
              </Link>

              <div className="limit-3-lines opacity-80 text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] font-light mb-8 vw:mb-[1.6666vw]">
                {description}
              </div>

              <Link href={view_more?.link} passHref>
                <a className="block opacity-90 hover_state_link tracking-[.05em] text-xs vw:text-[.625vw] leading-[1.1] font-light">
                  {view_more.title}
                </a>
              </Link>

            </SwiperSlide>

          )

        } )}

      </Swiper>

      <div className="absolute pl-[3.33%] bottom-0 left-0 flex items-center space-x-4 vw:space-x-[.83333vw]">

        <div className="left-arrow cursor-pointer w-[11px] vw:w-[.572vw]" role='button' tabIndex={0}>
          <Image
            src="/images/prev.svg"
            alt="Previous"
            width={11}
            height={19}
            layout="responsive"
          />
        </div>

        <div className="right-arrow cursor-pointer w-[11px] vw:w-[.572vw]" role='button' tabIndex={0}>
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
