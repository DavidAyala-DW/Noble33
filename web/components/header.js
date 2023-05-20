import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SanityImage from './sanity-image';
import Link from 'next/link';
import Logo from '@/public/images/logoWhite.png';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

export default function Header(props) {
  const router = useRouter();

  const {
    mainNav,
    menuImage,
    secondHeaderNav,
    facebookHandle,
    instagramHandle,
    reservationsButton,
    stickyHeader,
  } = props;

  const [openModal, setOpenModal] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [activeMenuImage, setActiveMenuImage] = useState();
  const [heroVisible, setHeroVisible] = useState(null);
  const collectionList = useRef(null);

  function handleOpenCollectionList() {
    collectionList.current.classList.toggle('md-down:!flex');
  }

  function toggleModalOpen() {
    setOpenModal((val) => !val);
  }

  function resetActiveMenuImage() {
    setActiveMenuImage(menuImage);
  }

  useEffect(() => {
    setActiveModal(true);

    if (menuImage) {
      resetActiveMenuImage();
    }
  }, []);

  const isMinLg = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    if (isMinLg) {
      setHeroVisible(false);
      return;
    }

    const hero = document.querySelector('[data-js-flush-hero]');

    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        setHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.45,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [router.asPath, isMinLg]);

  const handleNavLinkMouseEnter = (event, item) => {
    if (item.image) {
      setActiveMenuImage(item.image);
    }
  };

  return (
    <>
      <header
        className={clsx(
          !openModal &&
            (heroVisible
              ? 'bg-gradient-to-b from-[#000000bf] to-transparent lg:from-transparent'
              : 'bg-body'),
          openModal && !isMinLg && !heroVisible && 'bg-body',
          stickyHeader ? 'fixed' : openModal && 'sticky',
          openModal ? 'justify-center' : 'justify-between',
          'top-0 inset-x-0 z-[100] px-4 md:px-[3.35%] w-full md:mx-auto grid grid-cols-2 items-center md:grid-cols-3 py-6 md:pt-5 vw:pt-[1.1vw] md:pb-6 vw:pb-[1.2vw] duration-200'
        )}
        id="header"
      >
        <div
          className={`flex justify-end cursor-pointer order-3 md:order-1 select-none md:justify-start ${
            openModal && 'absolute right-4 md:left-0 md:relative'
          }`}
        >
          <div
            onClick={toggleModalOpen}
            className={`${openModal && 'hidden'} w-[25px] vw:!w-[1.302vw]`}
            role="button"
            tabIndex={0}
          >
            <Image
              src={'/images/burguer.svg'}
              alt=""
              layout="responsive"
              width={25}
              height={16}
            />
          </div>

          <div
            onClick={toggleModalOpen}
            className={`${!openModal && 'hidden'} w-[21px] vw:!w-[1.093vw]`}
            role="button"
            tabIndex={0}
          >
            <Image
              src={'/images/close.svg'}
              alt=""
              layout="responsive"
              width={21}
              height={20}
            />
          </div>
        </div>

        <div className="select-none md:order-2 md:mx-auto">
          <Link href="/" passHref>
            <a
              onClick={() => setOpenModal(false)}
              className="block cursor-pointer w-[115px] vw:w-[5.989vw]"
            >
              <Image src={Logo} alt="logo.png" layout="responsive" />
            </a>
          </Link>
        </div>

        <div className="hidden order-3 select-none md:block md:ml-auto">
          <Link href={reservationsButton?.link?.url} passHref>
            <a className="button">{reservationsButton?.title}</a>
          </Link>
        </div>
      </header>

      <div
        className={`fixed inset-0 h-full w-full transition-[transform] !duration-[300ms] ${
          openModal ? '!translate-x-0' : `${!activeModal && 'invisible'}`
        } -translate-x-full bg-body
        min-h-screen z-[90] w-full overflow-hidden flex items-start`}
        hidden={!openModal}
        aria-hidden={!openModal}
      >
        <div
          className={`md-down:max-h-full md-down:overflow-y-auto md:pl-[3.35%] w-full h-full max-w-full 3xl:max-w-[66.666%] flex flex-col items-center md:items-start justify-between gap-10 pt-[90px] md:pt-[108px] vw:pt-[5.625vw] pb-6 vw:pb-[1.25vw]`}
        >
          <div className="flex flex-col w-full xl:flex-row space-y-2 xl:space-y-0 items-start xl:space-x-16 vw:space-x-[3.333vw]">
            <div className="flex flex-col w-full lg:w-auto items-center lg:items-start space-y-2 vw:space-y-[.416vw]">
              {mainNav.slice(0, 6).map((item) => (
                <NavLink
                  key={item._key}
                  item={item}
                  onClick={toggleModalOpen}
                  onMouseEnter={(event) => handleNavLinkMouseEnter(event, item)}
                  onMouseLeave={resetActiveMenuImage}
                />
              ))}
            </div>

            <div className="flex flex-col w-full lg:w-auto items-center lg:items-start space-y-2 vw:space-y-[.416vw]">
              {mainNav.slice(6).map((item) =>
                item.link?.url !== '/locations' ? (
                  <NavLink
                    key={item._key}
                    item={item}
                    onClick={toggleModalOpen}
                    onMouseEnter={(event) =>
                      handleNavLinkMouseEnter(event, item)
                    }
                    onMouseLeave={resetActiveMenuImage}
                  />
                ) : (
                  <div
                    key="secondary"
                    className="group flex flex-col md-down:items-center"
                  >
                    <div className="flex items-center justify-center space-x-2 lg:justify-start">
                      <NavLink
                        item={item}
                        onClick={toggleModalOpen}
                        onMouseEnter={(event) =>
                          handleNavLinkMouseEnter(event, item)
                        }
                        onMouseLeave={resetActiveMenuImage}
                      />

                      <div
                        onClick={handleOpenCollectionList}
                        className="h-6 w-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#FFFFFF"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`
                    md-down:py-5 pt-0 hidden md-down:flex-col md-down:items-center md:flex flex-col space-y-2 vw:space-y-[.416vw] md:h-0 overflow-hidden md:opacity-0
                    md:group-hover:pt-6 md:group-hover:opacity-100 md:group-hover:h-auto md:group-hover:overflow-visible
                    group-focus-within:pt-6 group-focus-within:opacity-100 group-focus-within:h-auto group-focus-within:overflow-visible
                  `}
                      ref={collectionList}
                    >
                      {secondHeaderNav.map((item) => (
                        <NavLink key={item._key} item={item} secondary />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex items-center space-x-6 vw:space-x-[1.25vw]">
            <a
              onClick={toggleModalOpen}
              href={facebookHandle}
              className="block w-6 vw:w-[1.25vw]"
            >
              <Image
                src={'/images/facebook.svg'}
                alt="Facebook logo"
                layout="responsive"
                width={24}
                height={24}
              />
            </a>

            <a
              onClick={toggleModalOpen}
              href={instagramHandle}
              className="block w-6 vw:w-[1.25vw]"
            >
              <Image
                src={'/images/instagram.svg'}
                alt="Instagram logo"
                layout="responsive"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div
          className={`hidden ${
            !activeMenuImage && 'bg-body'
          } lg:flex relative w-full h-full max-w-[26.4%] 3xl:max-w-[33.3333%]`}
        >
          {[
            ...secondHeaderNav,
            ...mainNav,
            { image: menuImage, _key: '_falseKey' },
          ].map((item) => {
            const { image, _key } = item;

            return image ? (
              <div
                key={_key}
                className={`${
                  image.asset._ref === activeMenuImage?.asset._ref
                    ? 'block'
                    : 'hidden'
                } relative w-full h-full`}
              >
                <SanityImage
                  priority
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

function NavLink(props) {
  const { item, secondary = false, onClick, ...rest } = props;

  if (!item) {
    return null;
  }

  return (
    <Link href={!item.isDisabled ? item.link.url : '#'}>
      <a
        onClick={!item.isDisabled ? onClick : (e) => e.preventDefault()}
        className={clsx(
          'block uppercase tracking-[.05em] font-light',
          !item.isDisabled
            ? 'hover_state_link opacity-90'
            : 'opacity-50 cursor-default',
          secondary
            ? 'text-[24px] leading-[28px] vw:leading-[1.166]'
            : 'text-[32px] lg:text-[48px] vw:text-[2.5vw] leading-[1.2]'
        )}
        tabIndex={item.isDisabled ? -1 : 0}
        aria-disabled={item.isDisabled}
        {...rest}
      >
        {item.title}
      </a>
    </Link>
  );
}
