import SanityImage from "./sanity-image";
import Link from "next/link"
import clsx from "clsx";

export default function NewsCard(props) {
  const { primary } = props
  const {title, slug, description, image, publicationLogo} = props.news;

  return (

    <div className="w-full flex flex-col">

      <div className={clsx(
        "aspect-h-1 mb-4 lg:mb-6 vw:mb-[1.25vw]",
        primary ? 'aspect-w-[1.2] sm:aspect-w-2 md:aspect-w-[1.7] vw:aspect-w-[2.3]' : 'aspect-w-[1.5] vw:aspect-w-[1.8]'
      )}> 

        <Link href={`/news/${slug.current}`} passHref>
          <a>
            <div className="relative w-full h-full">
              {
                image && (
                  <SanityImage src={image} layout="fill" objectFit="cover" />
                )
              }              
            </div>
          </a>
        </Link>

      </div>
      
      <div className={clsx(primary && 'max-md:px-4')}>
        {publicationLogo ? (
          <div className="mb-3">
            {
              publicationLogo && (
                <SanityImage src={publicationLogo} width={100} height={40} objectFit="contain" objectPosition="left" />
              )
            }
            
          </div>
        ) : null}

        <h3
          className={clsx(
            "font-light text-2xl !leading-[1.1] tracking-[.05em] mb-8 lg:mb-6 vw:mb-[1.25vw]",
            primary ? 'lg:max-w-[800px] lg:text-3xl vw:max-w-[50vw] vw:text-[1.7vw]' : 'lg:max-w-[452px] lg:text-lg vw:max-w-[23.54vw] vw:text-[.9375vw]'
          )}
        >
          {title}
        </h3>

        {primary ? (
          <p className="mb-8 text-lg font-light leading-tight opacity-80 md:max-w-[530px]">
            {description}
          </p>
        ) : null}

        <Link href={`/news/${slug.current}`} passHref>
          <a className="block font-light hover_state_link hover_state_link lg:font-normal text-xs vw:text-[.625vw] leading-[1.1] tracking-[.05em] uppercase">
            View
          </a>
        </Link>
      </div>
    </div>

  )

}
