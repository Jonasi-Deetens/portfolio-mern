import React from 'react'
import logo from '../assets/logo-white.png'

const BannerTextContainer = () => {
  return (
    <div className='p-6 w-11/12 lg:w-1/2 top-1/2 left-1/2 absolute text-black -translate-x-1/2 drop-shadow-lg shadow-black'>
        <p className='text-shadow-white font-bold'>A portfolio item where I keep track of all my courses I followed and the experienced I gathered from all these.</p>
        <br />
        <i className='text-blue-600 font-bold text-shadow'>"Education is not the learning of facts, but the training of the mind to think." - Albert Einstein</i>
    </div>
  )
}

export default BannerTextContainer