import Link from "next/link";
import Logo from "@/public/images/logoFooter.svg"
import Facebook from "@/public/images/facebook.svg"
import Instagram from "@/public/images/instagram.svg"
import FooterArrow from "@/public/images/footerArrow.svg"

export default function Footer(props) {

  const {
    facebookHandle,
    instagramHandle,
    privacyPolicyHandle,
    cookiesPreferencesHandle,
    footerNav
  } = props;

  return (

    <footer className="px-4 md:px-0 pb-[22px] md2:pb-[50px] md:max-w-[93.3%] w-full md:mx-auto flex flex-col md2:flex-row items-start">

      <div className="mb-[42px] md2:mb-0 md2:mr-[5.8%] w-max">

        <Link href="/" passHref>

          <a className="block">
            <Logo/>
          </a>

        </Link>

      </div>

      <div className="flex flex-col mb-[86px] md2:mb-0 md2:space-y-[110px] justify-between md2:mr-[20%] w-full">

        <div className="grid grid-cols-3 gap-x-[65px] gap-y-8">

          {footerNav.map( (item,i) => {

            const {title,link} = item;
            return (
              <a href={link} key={i} className={`uppercase ${i == 4 && "col-start-2 col-end-4"} opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal`} >
                {title}
              </a>
            )

          })}

        </div>

        <div className="hidden md2:flex items-center space-x-[30px]">

          <a href={privacyPolicyHandle.link} className="block opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal uppercase">
            {privacyPolicyHandle.title}
          </a>

          <a href={cookiesPreferencesHandle.link} className="block opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal uppercase">
            {cookiesPreferencesHandle.title}
          </a>

        </div>

      </div>

      <div className="flex flex-col space-y-16 md2:space-y-[110px] justify-between w-full">

        <div className="flex flex-col space-y-6 md2:space-y-8">

          <h3 className="block opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal uppercase">
            Newsletter
          </h3>  

          <form className="w-full" action="">

            <fieldset className="flex pl-4 md2:pl-6 pr-7 md2:pr-[14px] item-center space-x-5 border-2 border-[rgba(205,_205,_205,_0.2)] py-3">

              <input className="text-base md2:text-lg bg-transparent outline-none w-full placeholder:text-white text-white leading-[1.5] font-light opacity-80" type="email" name="email" id="email" placeholder="Enter your email address" />
              <button type="submit">
                <FooterArrow/>
              </button>

            </fieldset>
            
          </form>

        </div>

        <div className="flex flex-col space-y-12 md2:space-y-0 md2:flex-row md2:items-center justify-between">

          <div className="flex items-center space-x-6">

            <a href={facebookHandle} >
              <Facebook/>
            </a>

            <a href={instagramHandle} >
              <Instagram/>
            </a>

          </div>

          <div className="flex md2:hidden items-center space-x-[50px]">

            <a href={privacyPolicyHandle.link} className="block opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal uppercase">
              {privacyPolicyHandle.title}
            </a>

            <a href={cookiesPreferencesHandle.link} className="block opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal uppercase">
              {cookiesPreferencesHandle.title}
            </a>

          </div>

          <p className="block opacity-80 text-[10px] leading-[11px] tracking-[.05em] font-normal uppercase">
            ©2022 Noble 33
          </p>

        </div>

      </div>

    </footer>

  )

}
