import SanityImage from "./sanity-image";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Event({event}) {

  const {title, image, description, date, link} = event;
  const [showDate, setShowDate] = useState(false);

  const handleFormatDate = useCallback((date) => {

    const options = {
      year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
      hour: 'numeric', minute: 'numeric',
      hour12: true,
    };

    const dateObject = new Date(date);  
    const formatedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);

    return formatedDate;

  }, []);
  
  
  useEffect(() => {
    setShowDate(true)
  }, []);


  return (
    
    <div className="flex flex-col lg:grid lg:grid-cols-[35.93%_calc(64.07%-65px)] 3xl:grid-cols-[46.32%_calc(53.68%-3.3854vw)] lg:gap-x-[65px] vw:gap-x-[3.3854vw] w-full">

      <div className="w-full">
        <div className="w-full aspect-h-1 aspect-w-[1.423] md:aspect-w-[1.80] lg:aspect-w-[1.248] 3xl:aspect-w-[2.1891]">
          <div className="w-full">
            <div className="w-full h-full relative">
              <SanityImage className="object-cover" src={image} alt="Event image" layout="fill"/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:justify-between h-full w-full">

        <div className="flex flex-col w-full mb-12 md:mb-20 lg:mb-0">

          <h3 className="font-light text-[32px] vw:text-[1.6666vw] leading-[37px] vw:leading-[1.156] tracking-[.05em] mb-4 vw:mb-[.8333vw] lg:max-w-[616px] vw:max-w-[32.08vw]">
            {title}
          </h3>

          <p className="font-light text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] opacity-80 mb-4 vw:mb-[.8333vw]">
            {showDate && handleFormatDate(date)}
          </p>

          <div className="text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] font-light opacity-80 md:max-w-[470px] vw:max-w-[24.479vw]">
            {description}
          </div>

        </div>

        <a href={link?.url} className="max-w-max flex items-center space-x-2 vw:space-x-[.41666vw] opacity-80">

          <p className="font-light hover_state_link md:font-normal text-xs vw:text-[.625vw] leading-[1.1] tracking-[.05em] uppercase">
            {link.title}
          </p>

          <div className="w-[13px] vw:w-[.6770vw] h-[7px] vw:h-[.3645vw]">
            <Image
              src="/images/arrowRight.svg"
              alt="Arrow right"
              width={13}
              height={7}
              layout="responsive"
            />
          </div>

        </a>

      </div>

    </div>

  )
}
