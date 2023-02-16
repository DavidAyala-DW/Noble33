import CollectionCard from "../collectionCard";

export default function CollectionGrid(props) {

  const {title, view_all, collections, are_coming_soon = false} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col">

      <div className="flex flex-col space-y-2 vw:space-y-[.4166vw] mb-8 lg:mb-7 vw:mb-[1.1458vw]">

        <h2 className="text-heading-1">
          {title}
        </h2>

        {view_all?.title ? (
          <a
            href={view_all.link}
            className="text-cta hover_state_link block text-lg"
          >
            {view_all.title}
          </a>
        ) : null}

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
