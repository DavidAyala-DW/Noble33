import MemberCard from '../memberCard';

export default function Team(props) {

  const {title, description, team} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">

      <div className="flex flex-col space-y-6 vw:space-y-[1.25vw] md:max-w-[500px] lg:max-w-[300px] vw:max-w-[20.8333vw] w-full">

        <h2 className="text-[24px] md:text-[32px] vw:text-[1.666vw] leading-[28px] md:leading-[37px] vw:leading-[1.156] tracking-[.05em] font-light">
          {title}
        </h2>

        {description ? (
          <p className="text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] opacity-80 font-light tracking-[.05em] md:tracking-[unset]">
            {description}
          </p>
        ) : null}

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 lg:gap-5 vw:gap-[1.3vw] gap-y-4 w-full lg:max-w-[70%] pt-1">

        {
          team.map( member => {

            const {_key} = member;
            return (
              <MemberCard key={_key} member={member}/>
            )

          })
        }

      </div>

    </section>

  )

}
