import CollectionCard from "../collectionCard";

export default function CollectionGrid(props) {

  console.log(props);

  const {title, view_all, collections, are_coming_soon = false} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col">

      <div className="flex flex-col space-y-2 vw:space-y-[.4166vw] mb-8 lg:mb-[22px] vw:mb-[1.1458vw]">

        <h2 className="uppercase tracking-[.05em] opacity-80 text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.16] font-medium" >
          {title}
        </h2>

        {
          view_all?.title && (

            <a
            href={view_all.link}
            className="block uppercase hover_state_link opacity-80 tracking-[.05em] text-xs vw:text-[.625vw] leading-[1.1] font-light"
            >
              {view_all.title}
            </a>

          )
        }

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[15px] lg:gap-x-4 3xl:gap-x-[21px] vw:gap-x-[1.09375vw] gap-y-4 md:gap-y-[15px] lg:gap-y-3 3xl:gap-y-[15px] vw:gap-y-[.78125vw] w-full">

        {collections && collections.map( collection => {
          const {_key} = collection;
          return(
            <CollectionCard key={_key} collection={collection} is_coming_soon={are_coming_soon} />
          ) 

        })}

      </div>

    </section>

  )
}
