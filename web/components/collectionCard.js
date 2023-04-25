import Image from "next/image";
import SanityImage from './sanity-image';

export default function CollectionCard({ collection, custom_link }) {

  const { title, location, image, hover_state_image, link, is_coming_soon = false } = collection;

  return (

    <a href={custom_link ?? link} target='_blank' className={`relative w-full aspect-w-[1.344] md:aspect-w-[1.303] lg:aspect-w-[1.341] 3xl:aspect-w-[1.81] aspect-h-[1]  ${hover_state_image && "group"} `} role='button'>

      <div className="w-full h-full">
        <div className="w-full h-full relative">

          <div className="flex w-full h-full">

            {image && (
              <div className="h-full transition-all duration-300 ease-[ease-in-out] group-hover:opacity-0 group-hover:invisible block w-full relative">
                <SanityImage src={image} alt={collection?.alt_text} layout="fill" />
              </div>
            )}

          </div>

          {
            hover_state_image && (
              <div className="h-full absolute inset-0 transition-all duration-300 ease-[ease-in-out] group-hover:opacity-100 group-hover:visible group-hover:z-[2] opacity-0 invisible w-full">
                <SanityImage src={hover_state_image} alt={collection?.alt_text} layout="fill" />
              </div>
            )
          }

        </div>
      </div>

      <div className="absolute z-[3] w-full h-full inset-0 flex flex-col justify-end pb-5 vw:pb-[1.04166vw] pl-4 md:pl-6 vw:pl-[1.25vw] pr-7 md:pr-9 vw:pr-[1.875vw]">

        <div className="flex items-end lg:items-center justify-between">

          <div className="flex flex-col space-y-2 vw:space-y-[.41666vw]">

            <h3 className="uppercase tracking-[.05em] text-[20px] lg:text-[24px] vw:text-[1.25vw] leading-[23px] lg:leading-[28px] vw:leading-[1.166] font-light">
              {title}
            </h3>

            <p className="opacity-80 max-w-[260px] lg:max-w-full text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] font-light">
              {location}
            </p>

          </div>

          <div className="flex items-center gap-4">

            {(custom_link || link) ? (
              <div className="block w-[11px] vw:w-[.5729vw]">
                <Image
                  src="/images/whiteRightArrow.svg"
                  alt=""
                  width={11}
                  height={19}
                  layout="responsive"
                />
              </div>
            ) : null}

          </div>

        </div>

      </div>

      {
        is_coming_soon && (
          <div className="absolute inset-0 w-full h-full z-[2] bg-black bg-opacity-60">
          </div>
        )
      }

    </a>

  );

}
