import SanityImage from '../sanity-image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from 'react-gsap';
import 'swiper/css';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Gallery(props) {

  const {gallery} = props;
  const [totalTranslationx, setTotalTranslationx] = useState(0);

  useEffect(() => {

    if(typeof window !== 'undefined'){
      function handleResize() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const totalWidth = Array.from(galleryItems).reduce( (prev,current) => {
          return prev + current.clientWidth;
        },0);
    
        const totalWidthWithMargins = totalWidth + (( galleryItems.length - 1) * 24);
        setTotalTranslationx(totalWidthWithMargins);
      }
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }

  }, []);

  return (

    <section className="w-full 3xl:max-w-[93.3%] 3xl:mx-auto  flex flex-col relative">

      <div className="flex flex-col lg:hidden">

        <Swiper
          loop={true}
          spaceBetween={24}
          slidesPerView={"auto"}
          initialSlide={1}
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
      </div>
    

      <div className="hidden flex-col lg:flex">
        <Controller>
          <div className="max-h-[calc(4000px+100vh)] overflow-hidden">
            <Scene triggerHook={"onLeave"} duration={4000}  pin={{ pushFollowers: false }}>
              {
                (progress) => (
                  <div className='scene-wrapper'>
                    <Timeline totalProgress={progress}>
                      <Tween
                        from={ {transform: "translate3d(0,0,0)"} }
                        to={ {transform: `translate3d(calc(100% - ${totalTranslationx}px) , 0, 0)`} }
                        duration={4000}
                      >
                        <div className="flex items-stretch space-x-6 w-full absolute inset-0 my-auto max-h-max">
                          {
                            gallery.map(item => {

                              const {_key, image, format} = item;

                              const formats = {

                                "format-1": "!min-w-[37.6vw] !h-[29.86vw] md:!min-w-[19.623vw] md:!h-[15.725vw] lg:!min-w-[22.847vw] lg:!h-[18.26vw] 3xl:!min-w-[17.135vw] 3xl:!h-[13.69vw] !mt-[22.5vw]",
                                "format-2": "!min-w-[38.66vw] !h-[30.864vw] md:!min-w-[19.623vw] md:!h-[15.591vw] lg:!min-w-[27.5vw] lg:!h-[21.94vw] 3xl:!min-w-[20.625vw] 3xl:!h-[16.45vw] !mt-[9.65vw]",
                                "format-3": "!min-w-[63.2vw] !h-[64.58vw] md:!min-w-[31.989vw] md:!h-[32.66vw] lg:!min-w-[44.79vw] lg:!h-[45.83vw] 3xl:!min-w-[34.89vw] 3xl:!h-[34.375vw]",
                                "format-4": "!min-w-[37.6vw] !h-[40.53vw] md:!min-w-[34.408vw] md:!h-[27.688vw] lg:!max-h-max lg:!h-[28.75vw] lg:!min-w-[26.66%] 3xl:!w-[20vw] 3xl:!h-[21.6525vw] !mt-[3.47vw]"

                              }

                              return(
                                <div key={_key} className={`gallery-item overflow-hidden ${formats[format]}`}>
                                  <div className="w-full h-full relative">
                                    <SanityImage src={image} className="w-full object-cover" layout={"fill"} />
                                  </div>                
                                </div>
                              )

                            })
                          }
                        </div>
                      </Tween>
                    </Timeline>
                  </div>
                )
              }
            </Scene>
          </div>
        </Controller>
      </div>

    </section>

  )

}
