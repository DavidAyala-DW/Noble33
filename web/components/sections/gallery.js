import Image from "next/image"
import SanityImage from '../sanity-image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";

export default function Gallery(props) {

  const {gallery} = props;

  return (

    <div className="relative w-full">

      <section className="w-full 3xl:max-w-[93.3%] 3xl:mx-auto  flex flex-col relative">

        <Swiper
          loop={true}
          spaceBetween={24}
          slidesPerView={"auto"}
          initialSlide={1}
          navigation={{
            prevEl: '.gallery-left-arrow',
            nextEl: '.gallery-right-arrow ',
          }}
          modules={[Navigation]}
          className="w-full gallery"
          breakpoints = {{

            320: {
              spaceBetween: 9,
              initialSlide: 1
            },
            744: {
              spaceBetween: 8,
              initialSlide: 0
            },
            1024: {
              spaceBetween: 24,
              initialSlide: 1
            },
            1920: {
              spaceBetween: 24,
              initialSlide: 0
            }

          }}
        >
          {
            gallery.map(item => {

              const {_key, image, format} = item;

              const formats = {

                "format-1": "!w-[37.6%] !h-[29.86vw] md:!w-[19.623%] md:!h-[15.725vw] lg:!w-[22.847%] lg:!h-[18.26vw] 3xl:!w-[17.135vw] 3xl:!h-[13.69vw] !mt-[22.5vw]",
                "format-2": "!w-[38.66%] !h-[30.864vw] md:!w-[19.623%] md:!h-[15.591vw] lg:!w-[27.5%] lg:!h-[21.94vw] 3xl:!w-[20.625vw] 3xl:!h-[16.45vw] !mt-[9.65vw]",
                "format-3": "!w-[63.2%] !h-[64.58vw] md:!w-[31.989%] md:!h-[32.66vw] lg:!w-[44.79%] lg:!h-[45.83vw] 3xl:!w-[34.89vw] 3xl:!h-[34.375vw]",
                "format-4": "!w-[37.6%] !h-[40.53vw] md:!w-[34.408%] md:!h-[27.688vw] lg:!max-h-max lg:!h-[28.75vw] lg:!w-[26.66%] 3xl:!w-[20vw] 3xl:!h-[21.6525vw] !mt-[3.47vw]"

              }

              return(
                <SwiperSlide key={_key} className={`overflow-hidden ${formats[format]}`}>
                  <div className="w-full h-full relative">
                    <SanityImage src={image} className="w-full object-cover" layout={"fill"} />
                  </div>                
                </SwiperSlide>
              )

            })
          }
        </Swiper>

        </section>

        <div className="flex items-center space-x-4 vw:space-x-[.83333vw] pt-[55px] pl-[3.33%]">

          <div className="gallery-left-arrow cursor-pointer w-[11px] vw:w-[.572vw]">
            <Image
              src="/images/prev.svg"
              alt="Next"
              width={11}
              height={19}
              layout="responsive"
            />
          </div>

          <div className="gallery-right-arrow cursor-pointer w-[11px] vw:w-[.572vw]">
            <Image
              src="/images/next.svg"
              alt="Next"
              width={11}
              height={19}
              layout="responsive"
            />
          </div>

        </div>
    </div>

  )

}