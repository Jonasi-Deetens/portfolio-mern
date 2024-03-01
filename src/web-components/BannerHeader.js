import React from 'react'
import Navigation from './BannerNavigation'
import BannerTextContainer from '../components/BannerTextContainer'

const BannerHeader = () => {
  return (
    <header className='h-svh'>
      <div className='h-full bg-home-banner top-0 absolute w-full z-0'>
        <Navigation />
        <BannerTextContainer />
      </div>
    </header>
  )
}

export default BannerHeader