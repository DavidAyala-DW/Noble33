import clsx from 'clsx';
import BackgroundImage from '../backgroundImage';

export default function HeroWithText(props) {
  const { title, description, backgroundImage } = props;

  return (
    <section className="w-full flex flex-col" id="mainHero">
      {backgroundImage && (
        <div className="w-full aspect-h-1 aspect-w-[1.82] md:aspect-w-[2.0666] lg:aspect-w-[2.944] 3xl:aspect-w-[3.9263]">
          <div className="w-full h-full">
            <div className="relative w-full h-full">
              <BackgroundImage {...{ ...backgroundImage }} layout="fill" />
            </div>
          </div>
        </div>
      )}

      <div
        className={clsx(
          'flex flex-col px-4 md:px-0 space-y-6 md:space-y-3 vw:space-y-[.625vw] z-10',
          backgroundImage && 'mt-12 md:mt-20'
        )}
      >
        <h1 className="tracking-[.05em] text-[32px] md:text-[40px] vw:text-[2.083vw] leading-[1.2] font-light md:text-center uppercase opacity-90">
          {title}
        </h1>

        <p className="md:tracking-[.05em] text-[20px] vw:text-[1.0416vw] leading-[1.5] font-light md:text-center opacity-80 md:max-w-[572px] vw:max-w-[29.79vw] md:mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
