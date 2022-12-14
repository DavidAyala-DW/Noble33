export default function Checkbox({activeOption, className, setActiveOption, text, id}) {
  
  function handleClick(){
    setActiveOption(id);
  }

  return (

    <div onClick={handleClick} className={`flex items-center space-x-2 vw:space-x-[.4166vw] w-max cursor-pointer ${className}`}>

      <div className="h-6 vw:h-[1.25vw] w-6 vw:w-[1.25vw] rounded-full border-2 border-white flex flex-col items-center justify-center">

        {
          activeOption == id && (
            <div className="w-4 vw:h-[.83333vw] h-4 vw:w-[.83333vw] rounded-full bg-white"></div>
          )
        }
        
      </div>

      <p className="opacity-80 text-[20px] vw:text-[1.041vw] leading-[1.5] font-light">
        {text}
      </p>

    </div>

  )

}
