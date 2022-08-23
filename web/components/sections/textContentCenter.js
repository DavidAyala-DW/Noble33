export default function TextContentCenter(props) {

  const {title, description, learn_more} = props;

  return (

    <section className='px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col'>
      
      <div className="flex flex-col space-y-6">

        <h2 className="uppercase opacity-80 tracking-[.05em] text-center text-lg leading-[21px] font-medium">
          {title}
        </h2>

        <h3 className="text-center max-w-[708px] mx-auto tracking-[.05em] text-[24px] md:text-[32px] leading-[1.2] opacity-80 font-light">
          {description}
        </h3>

        <a
          className="block max-w-max mx-auto text-center uppercase opacity-80 tracking-[.05em] text-[10px] leading-[11px] font-light"
          href={learn_more.link}
        >
          {learn_more.title}
        </a>

      </div>
      
    </section>

  )

}
