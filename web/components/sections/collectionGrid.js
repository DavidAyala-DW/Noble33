import clsx from "clsx";
import CollectionCard from "../collectionCard";
import Link from "next/link";

export default function CollectionGrid(props) {

  const { title, view_all, collections, reservationsButton } = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col">
      {reservationsButton && <div className='flex sm:hidden w-full justify-center pb-12'>
        <Link key="reservations" href={reservationsButton?.link} passHref>
          <a className="button">
            {reservationsButton?.title}
          </a>
        </Link>
      </div>}

      <div className={clsx('flex flex-col space-y-2 vw:space-y-[.4166vw]', title && 'mb-8 lg:mb-7 vw:mb-[1.1458vw]')}>

        {title ? (
          <h2 className="text-heading-1">
            {title}
          </h2>
        ) : null}

        {view_all?.title && view_all?.link ? (
          <a
            href={view_all.link}
            className="text-cta hover_state_link block text-lg"
          >
            {view_all.title}
          </a>
        ) : null}

      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 vw:gap-[1.09375vw] w-full">

        {collections && collections.map((collection_object) => {
          const { _key, collection: { data }, custom_link } = collection_object;
          return (
            <CollectionCard
              key={_key}
              collection={data}
              custom_link={custom_link}
            />
          );
        })}

      </div>

    </section>

  );
}
