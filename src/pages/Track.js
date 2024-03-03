import React, { useContext, useState } from 'react'
import PageTitle from '../components/PageTitle'
import { TrackContext } from '../providers/TrackProvider'
import TrackList from '../components/TrackList'
import TrackSubItem from '../components/TrackSubItem'
import CodeExample from '../web-components/CodeExample'

const Track = () => {
  const trackContext = useContext(TrackContext);

  return (
    <main className='mt-16 bg-track'>
        <PageTitle title='My track' color='bg-gray-100' />
        <div className='p-10'>
          <TrackList />
          {trackContext.selectedTrack ? 
            <section className='flex flex-col items-between m-auto'>
              <h3 className='font-bold text-xl mb-10 bg-black text-white p-2 drop-shadow-md w-fit m-auto rounded-lg'>{trackContext.selectedTrack.title}</h3>
              <div className='mb-10'>
                {trackContext.selectedTrack && trackContext.selectedTrack.subItems.map((subitem) => (
                <button onClick={() => trackContext.setSelectedItem(subitem)} className={`${trackContext.selectedItem && subitem.title === trackContext.selectedItem.title ? 'bg-blue-600' : subitem.completed ? 'bg-green-500' : 'bg-red-500'} rounded-lg p-2 mx-4 drop-shadow-lg font-bold active:text-black active:bg-gray-300 hover:bg-blue-600 hover:scale-105`}>
                    <TrackSubItem subitem={subitem}/>
                </button>
                ))}
              </div>
              {trackContext.selectedItem && trackContext.selectedItem.filePath
              ? <CodeExample category= {trackContext.selectedTrack.title} item={trackContext.selectedItem} />
              : ''
              }
            </section>
          : ''}
        </div>
    </main>
  )
}

export default Track