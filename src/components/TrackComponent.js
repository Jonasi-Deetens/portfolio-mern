import React from 'react'
import TrackCategory from './TrackCategory'

const TrackComponent = ({track}) => {
  return (
    <article className='w-fit bg-blue-600 border drop-shadow-lg border-black rounded-xl p-5'>
        <h2 className='text-2xl mb-5'>{track.title}</h2>
        { track.categories.map((category) => (
            <TrackCategory category={category} />
        ))}
    </article>
  )
}

export default TrackComponent