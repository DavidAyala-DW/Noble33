import clsx from "clsx";
import NewsCard from "../newsCard";

export default function News(props) {
  
  const {news} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto">

      <ul className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[10px] lg:gap-x-4 vw:gap-x-[.8333vw] gap-y-10 lg:gap-y-[122px] vw:gap-y-[6.354vw]"> 
        {news.map((newsItem, i) => {
          const isPrimary = i === 0

          return (
            <li key={newsItem._id} className={clsx(isPrimary ? 'md:col-span-2 max-md:-mx-4' : '')}>
              <NewsCard news={newsItem} primary={isPrimary} />
            </li>
          )
        })}
      </ul>

    </section>

  )

}
