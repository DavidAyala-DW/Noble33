import SanityImage from './sanity-image'

export default function BackgroundImage(props) {
  
  const {image, imageMobile, ...rest} = props;
  return (
    
    <div className="flex flex-col w-full">

      <div className="block md:hidden w-full">
        <SanityImage quality={100}  src={imageMobile} alt="mobile" layout="responsive"  />
      </div>

      <div className="md:block hidden w-full">
        <SanityImage quality={100} src={image} layout="responsive"  />
      </div>

    </div>

  )
}
