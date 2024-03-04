import React from 'react'
import BannerNavigation from './BannerNavigation'

const BannerHeader = () => {
  return (
    <header className='h-svh'>
      <div className='h-full bg-home-banner top-0 absolute w-full z-0'>
        <BannerNavigation />
        <div className='h-full flex justify-center'>
          <h1 className='text-9xl text-white text-shadow m-auto bg-gray-300 bg-opacity-80 p-10 rounded-lg'>Dev. Portfolio</h1>
        </div>
      </div>
    </header>
  )
}

export default BannerHeader