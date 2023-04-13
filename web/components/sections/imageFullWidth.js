import SanityImage from "../sanity-image"

export default function ImageFullWidth(props) {

  const {image, alt_text} = props;

  return (

    <section className="w-full lg:max-w-[94.4%] mx-auto">

      <div className="w-full aspect-h-1 aspect-w-[2.742]">
        <div className="w-full h-full">
          <div className="w-full h-full relative">
            <SanityImage
              src={image}
              alt={alt_text ?? "Image"}
              layout="fill"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
      
    </section>

  )

}
