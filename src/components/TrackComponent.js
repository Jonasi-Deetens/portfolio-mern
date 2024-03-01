import React, { useEffect, useState } from 'react'
import TrackCategory from './TrackCategory'

const TrackComponent = ({track}) => {
  const [itemsHidden, setItemsHidden] = useState(true);

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  

  return (
    <article className='w-fit m-auto bg-blue-600 border drop-shadow-md border-black'>
        <h2 className='flex justify-center text-2xl p-2 m-2 bg-white border border-black font-bold'>{track.title} <button onClick={() => setItemsHidden(!itemsHidden)} className='text-sm mr-0 border border-black mx-2 px-2 text-blue-500'>{itemsHidden ? '+' : '-'}</button> </h2>
        <div className={`m-2 ${itemsHidden ? 'hidden' : 'flex'}`}>
        { track.categories.map((category) => (
            <TrackCategory category={category} />
        ))}
        </div>
    </article>
  )
}

export default TrackComponent