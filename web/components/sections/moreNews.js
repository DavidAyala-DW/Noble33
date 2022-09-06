import MoreNewsCard from "../moreNewsCard";

export default function MoreNews(props) {

  const {title, link, news} = props;

  return (

    <section
      className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col"
    >

      <div className="flex flex-col mb-12 vw:mb-[2.5vw]">

        <h2 className="font-extralight text-[24px] vw:text-[1.25vw] leading-7 vw:leading-[1.1666] tracking-[.05em] mb-4 vw:mb-[.83333vw]">
          {title}
        </h2>

        <a href={link.url} className="block font-light text-[10px] vw:text-[.520vw] leading-[13px] vw:leading-[1.3] uppercase tracking-[.05em]">
          {link.title}
        </a>

      </div>

      <div className="grid grid-cols-1 w-full gap-y-10 lg:gap-y-[65px] vw:gap-y-[3.3854vw]">
      {
        news.map(menu => {
          const {_key, query} = menu;
          return (
            <MoreNewsCard key={_key} news={query} />
          )
        })
      }
      </div>

    </section>

  )

}
