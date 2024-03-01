import React from 'react'

const TextAndImage = ({text, src, alt}) => {
  return (
    <div className='w-full lg:min-h-96 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 p-10 flex justify-center items-center lg:min-h-96 font-bold bg-track bg-blue-600'>
            <p>{text}</p>
        </div>
        <picture className='w-full lg:w-1/2 hidden lg:flex justify-center items-center'>
            <img className='min-h-96' src={src} alt={alt} />
        </picture>
        <div className='block lg:hidden w-1 m-auto border-l-8 border-gray-500 border-dotted h-10 my-10'>

        </div>
    </div>
  )
}

export default TextAndImage