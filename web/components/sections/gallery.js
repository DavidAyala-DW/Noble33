import SanityImage from '../sanity-image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Gallery(props) {

  const {gallery} = props;

  return (

    <section className="w-full flex flex-col relative">

      <Swiper
        spaceBetween={24}
        slidesPerView={"auto"}
        className="w-full gallery"
        breakpoints = {{

          320: {
            spaceBetween: 9,
            initialSlide: 2
          },
          768: {
            spaceBetween: 24,
          }

        }}
      >
        {
          gallery.map(item => {

            const {_key, image, format} = item;

            const formats = {

              "format-1": "!w-[15%] md:!w-[9.44%] h-auto !pt-[22.5vw]",
              "format-2": "!w-[38.66%] md:!w-[27.5%] h-auto !pt-[9.65vw]",
              "format-3": "!w-[63.2%] md:!w-[44.79%] h-full",
              "format-4": "!w-[22%] md:!w-[13.26%] h-auto !pt-[3.47vw]"

            }

            return(
              <SwiperSlide key={_key} className={`${formats[format]}`}>
                <SanityImage src={image} className="w-full object-cover" layout={"responsive"} />
              </SwiperSlide>
            )

          })
        }
      </Swiper>

      {/* <div className="flex items-start space-x-2 md:space-x-6 w-full">
      {
          gallery.map(item => {

            const {_key, image, format} = item;

            const formats = {

              "format-1": "w-[9.94%] h-auto pt-[22.5vw]",
              "format-2": "w-[28.94%] h-auto pt-[9.65vw]",
              "format-3": "w-[47.14%] h-full",
              "format-4": "w-[13.96%] h-auto pt-[3.47vw]"

            }

            return(
              <div className={`${formats[format]}`} key={_key}>
                <SanityImage src={image} className={`object-cover`} layout={"responsive"} />
              </div>
            )

          })
        }
      </div> */}

    </section>

  )

}
