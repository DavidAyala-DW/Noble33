import Event from "../event";
import SanityImage from '../sanity-image';
import Image from 'next/image';

export default function FullscreenNewsletter(props) {

  const { title, subtitle, description, image, placeholder } = props;

  return (

    <section className='relative w-full h-[90vh]'>
      <div className='absolute top-0 left-0 bg-gradient-to-b z-10 from-body to-transparent h-[35%] w-full' />
      <SanityImage
        src={image}
        layout='fill'
        className='absolute top-0 left-0 w-full h-full object-cover self-center content-center z-0 select-none'
      />
      <div className='absolute bottom-0 left-0 bg-gradient-to-t z-10 from-body to-transparent h-[35%] w-full' />

      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-4'>
        <section className='md:max-w-[93.3%] w-full mx-auto flex flex-col items-center text-center'>

          <h2
            className='opacity-80 uppercase mb-6 vw:mb-[1.25vw] text-black text-base lg:text-lg vw:text-[.9375vw] leading-[21px] lg:leading-[21px] vw:leading-[1.1666] font-light tracking-[.05em]'
          >
            {title}
          </h2>

          <p
            className='max-w-full w-[450px] opacity-80 mb-8 vw:mb-[2vw] text-black font-[400] text-center text-[24px] lg:text-[32px] vw:text-[1.6666vw] leading-[120%]  md:max-w-[500px] lg:max-w-[660px] vw:max-w-[34.375vw] tracking-[.05em]'
          >
            {description}
          </p>

          <p className="max-w-full w-[290px] opacity-80 mb-7 vw:mb-[1.8vw] leading-4 font-light text-black">
            {subtitle}
          </p>

          <form action="" className='w-full flex flex-col'>

            <fieldset className='flex items-center space-x-5 justify-between w-full border-2 vw:border-[.104vw] border-[rgb(0,0,0,0.4)] py-3 vw:py-[.625vw] px-4 lg:pl-6 vw:pl-[1.25vw] lg:pr-[14px] vw:pr-[.729vw] md:max-w-[343px] lg:max-w-[546px] vw:max-w-[28.4375vw] md:mx-auto text-black'>

              <input
                type="text"
                aria-label="Email"
                name="email"
                placeholder={placeholder}
                className="outline-none w-full text-base bg-transparent lg:text-lg vw:text-[.9375vw] leading-[150%] opacity-80 placeholder:opacity-80 placeholder:text-black font-light"
              />

              <button tabIndex={0} type="submit" className="w-[26px] vw:w-[1.354vw]">
                <Image
                  src="/images/arrowBlack.svg"
                  alt="Submit"
                  width={26}
                  height={19}
                  layout="responsive"
                />
              </button>

            </fieldset>

          </form>
        </section>
      </div>
    </section>

  );

}
