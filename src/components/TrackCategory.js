import React from 'react'
import TrackItem from './TrackItem'

const TrackCategory = ({category}) => {
  return (
    <div className='bg-white border border-black rounded-xl p-5'>
        <h3 className='text-xl underline mb-5'>{category.title}</h3>
        <div className='flex'>
        {category.items.map((item) => (
            <TrackItem item={item} />
        ))}
        </div>
    </div>
  )
}

export default TrackCategory