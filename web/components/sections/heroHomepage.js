import SimpleBlockContent from '@/components/simple-block-content';
import Link from 'next/link';
import HeroHomepageGallery from '../heroHomepageGallery';

const HeroHomepage = (props) => {
  const { title, description, reservation, slides } = props;

  return (
    <section className="lg:mt-[83px] lg:max-w-[93.3%] w-full mx-auto flex flex-col space-y-8 md:space-y-[37px] lg:space-y-8 vw:space-y-[1.92vw]">
      <div data-js-flush-hero>
        <div className="aspect-h-1 aspect-w-[1.6] md2:aspect-w-2 lg:aspect-w-[2.742] 3xl:aspect-w-[3.722]">
          <HeroHomepageGallery slides={slides} />
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6 vw:space-x-[1.25vw] w-full">
          <h1
            className="max-w-[80%] md:max-w-[70.7%] lg:max-w-[calc(50%-20px)] vw:max-w-[calc(50%-1.0416vw)] w-full
        uppercase text-[32px] lg:text-[40px] vw:text-[2.083vw] leading-[1.2] tracking-[.05em] opacity-90 font-light"
          >
            {title}
          </h1>

          <div className="flex flex-col space-y-8 vw:space-y-[2.5vw] w-full">
            <div className="font-light opacity-80 md:max-w-[71.83%] lg:max-w-full leading-[1.5] text-[20px] vw:text-[1.0416vw]">
              <SimpleBlockContent blocks={description} />
            </div>

            {reservation && (
              <Link href={reservation.link} passHref>
                <a
                  {...(!reservation.link.startsWith('/')
                    ? { target: '_blank', rel: 'noopener nooreferrer' }
                    : {})}
                  className="button"
                >
                  {reservation.label}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepage;
