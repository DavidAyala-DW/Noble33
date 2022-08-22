import React from 'react'

export default function Heading(prop) {
  
  const {heading} = prop;

  return (

    <div className="text-4xl text-center w-full font-bold text-indigo-400 py-5">
      {heading}
    </div>

  )
}
