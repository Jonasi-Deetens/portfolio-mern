import React, { useContext } from 'react'
import PageTitle from '../components/PageTitle'
import { TrackContext } from '../providers/TrackProvider'
import TrackComponent from '../components/TrackComponent'

const Track = () => {
  const tracks = useContext(TrackContext)

  return (
    <main className='m-auto mt-16 bg-track'>
        <PageTitle title='My track' color='bg-gray-100' />
        <div className='w-10/12 p-20'>
        { tracks.map((track) => (
          <TrackComponent track={track} />
        )) }
        </div>
    </main>
  )
}

export default Track