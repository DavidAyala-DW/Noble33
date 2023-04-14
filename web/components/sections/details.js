import { useEffect, useState } from "react";
import DetailCard from "../detailCard";
import Video from "../video";
import Image from 'next/image';

export default function Details(props) {

  const {
    title,
    description,
    details,
    video
  } = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col">

      <div className="flex flex-col space-y-[60px] md:space-y-20 lg:space-y-0 lg:flex-row items-center lg:justify-between w-full mb-12 lg:mb-[136px] vw:mb-[7.08333vw]">

        <div className="flex flex-col lg:max-w-[calc(50%-48px)] vw:max-w-[calc(50%-2.5vw)]">

          <h2 className="max-w-[64%] md:max-w-max tracking-[.05em] text-[24px] leading-[28px] md:text-[32px] vw:text-[1.6666vw] md:leading-[37px] vw:leading-[1.56] font-light mb-6 vw:mb-[1.25vw]">
            {title}
          </h2>

          <p className="tracking-[.05em] md:tracking-[unset] text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] opacity-80 font-light md:max-w-[500px] lg:max-w-[400px] vw:max-w-[20.8333vw]">
            {description}
          </p>

        </div>

        {
          video && (
            video.endsWith('.mp4') ?
              <div className="w-full relative lg:max-w-[50%]">
                <div className="aspect-h-1 w-full aspect-w-[1.491] md:aspect-w-[2.802] lg:aspect-w-[1.719] 3xl:aspect-w-[2.30]">
                  <div className="w-full h-full">
                    <div className="relative w-full h-full">
                      <Video src={video} />
                    </div>
                  </div>
                </div>
              </div>
              : <div className="w-full relative lg:max-w-[50%]">
                <div className="aspect-h-1 w-full aspect-w-[1.491] md:aspect-w-[2.802] lg:aspect-w-[1.719] 3xl:aspect-w-[2.30]">
                  <div className="w-full h-full">
                    <div className="relative w-full h-full">
                      <Image src={video} alt='Image' layout='fill' />
                    </div>
                  </div>
                </div>
              </div>
          )
        }

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-12 lg:gap-x-6 lg:gap-y-[148px] vw:gap-x-[1.25vw] vw:gap-y-[7.708vw]">

        {
          details.map(detail => {

            const { _key } = detail;

            return (
              <DetailCard detail={detail} key={_key} />
            );

          })
        }

      </div>

    </section>

  );

}
