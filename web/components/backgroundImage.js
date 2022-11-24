import SanityImage from './sanity-image'

export default function BackgroundImage(props) {
  
  const {image, imageMobile, layout = "responsive", ...rest} = props;
  return (
    
    <div className="flex flex-col w-full h-full relative">

      <div className={`block md:hidden w-full relative ${layout === "fill" && 'h-full' } `}>
        <SanityImage src={imageMobile} layout={layout} {...rest}/>
      </div>

      <div className={`hidden md:block w-full relative ${layout === "fill" && 'h-full' } `}>
        <SanityImage src={image} layout={layout} {...rest} />
      </div>

    </div>

  )
}
