import SanityImage from '../sanity-image'
import WhiteRightArrow from "@/public/images/whiteRightArrow.svg";

export default function CollectionGrid(props) {

  const {title, view_all, collections} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col">

      <div className="flex flex-col space-y-2 mb-[22px]">

        <h2 className="uppercase tracking-[.05em] opacity-80 text-lg leading-[21px] font-medium" >
          {title}
        </h2>

        {
          view_all?.title && (

            <a
            href={view_all.link}
            className="block uppercase opacity-80 tracking-[.05em] text-[10px] leading-[11px] font-light"
            >
              {view_all.title}
            </a>

          )
        }

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 w-full">

        {collections && collections.map( collection => {

          const {_key, title, location, image, link} = collection;

          return(

            <div className="relative w-full aspect-w-[1.37] md:aspect-w-[1.34] aspect-h-1" key={_key}>

              <div className="w-full h-full">
                <a href={link} className="h-full block w-full relative">
                  <SanityImage className="w-full h-full"  src={image} layout={"fill"}/> 
                </a>
              </div>

              <div className="absolute w-full h-full inset-0 flex flex-col justify-end pb-5 pl-4 md:pl-6 pr-7 md:pr-9">

                <div className="flex items-end md:items-center justify-between">

                  <div className="flex flex-col space-y-2">
              
                    <h3 className="uppercase tracking-[.05em] text-[20px] md:text-[24px] leading-[23px] md:leading-[28px] font-medium">
                      {title}
                    </h3>

                    <p className="opacity-80 max-w-[260px] md:max-w-full text-lg leading-[21px] font-medium">
                      {location}
                    </p>
                    
                  </div>

                  <a className="block" href={link}>
                    <WhiteRightArrow/>
                  </a>

                </div>

              </div>
              
            </div>

          )

        })}
      </div>

    </section>

  )
}
