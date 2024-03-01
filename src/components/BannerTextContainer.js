import React from 'react'

const BannerTextContainer = () => {
  return (
    <div className='border-2 border-white p-6 w-11/12 lg:w-1/2 top-1/2 left-1/2 absolute text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-lg shadow-white'>
        <h2 className='text-2xl'>JD - Course Tracker</h2>
        <br />
        <p className='text-3xl'>{`</ >`}</p>
        <br />
        <p>A portfolio item where I keep track of all my courses I followed and the experienced I gathered from all these.</p>
        <br />
        <i className='text-green-400'>"Education is not the learning of facts, but the training of the mind to think." - Albert Einstein</i>
    </div>
  )
}

export default BannerTextContainer