import CollectionCard from "../collectionCard";

export default function CollectionGrid(props) {

  const {title, view_all, collections} = props;

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
            className="block uppercase opacity-80 tracking-[.05em] text-[10px] leading-[11px] vw:text-[.520vw] vw:leading-[1.1] font-light"
            >
              {view_all.title}
            </a>

          )
        }

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 vw:gap-x-[1.25vw] gap-y-4 md:gap-y-6 lg:gap-y-3 vw:gap-y-[.625vw] w-full">

        {collections && collections.map( collection => {
          const {_key} = collection;
          return(
            <CollectionCard key={_key} collection={collection} />
          ) 

        })}

      </div>

    </section>

  )
}
