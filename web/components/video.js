import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'


export default function Video(props) {

  const { className, ...rest } = props
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef(null);

  function handleVideo(){

    const actualVideo = video.current;    
    if(isPlaying){
      actualVideo.pause();
    }else{
      actualVideo.play();
    }
    setIsPlaying(!isPlaying);
    
  }

  return (

    <div className="w-full h-full relative group">

      <video
        ref={video}         
        { ...( !isPlaying && {muted: true} ) }
        loop
        playsInline
        autoPlay
        className={`object-cover w-full h-full ${className}`}
        {...rest}
      />

      <div onClick={handleVideo} className={`bg-black cursor-pointer bg-opacity-30 absolute inset-0 w-full h-full flex flex-col justify-center items-center group-hover:visible ${isPlaying ?  "invisible" : "visible" }`}>

        <div className="w-10 h-10 vw:w-[2.08vw] vw:h-[2.08vw] relative cursor-pointer">

          <Image
            { ...( !isPlaying && {src: "/images/playButton.svg"} ) }              
            { ...( isPlaying && {src: "/images/pauseButton.svg"} ) }  
            alt="playButton"
            layout="fill"          
          />

        </div>

      </div>

    </div>

  )

}
