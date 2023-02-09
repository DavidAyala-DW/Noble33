import MemberCard from '../memberCard';

export default function Team(props) {

  const {title, description, team} = props;

  return (

    <section className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col space-y-[60px] lg:space-y-0 lg:flex-row lg:justify-between">

      <div className="flex flex-col space-y-6 vw:space-y-[1.25vw] md:max-w-[500px] lg:max-w-[400px] vw:max-w-[20.8333vw] w-full">

        <h2 className="text-[24px] md:text-[32px] vw:text-[1.666vw] leading-[28px] md:leading-[37px] vw:leading-[1.156] tracking-[.05em] font-extralight">
          {title}
        </h2>

        <p className="text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] opacity-80 font-light tracking-[.05em] md:tracking-[unset]">
          {description}
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-[32px] vw:gap-x-[1.6666vw] gap-y-4 lg:gap-y-[30px] vw:gap-y-[1.5625vw] w-full lg:max-w-[60vw] 3xl:max-w-[55vw]">

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
