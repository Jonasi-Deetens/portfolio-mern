import React, { useContext, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { TrackContext } from '../providers/TrackProvider'
import TrackList from '../components/TrackList'
import TrackSubItem from '../components/TrackSubItem'
import CodeExample from '../web-components/CodeExample'
import projects from '../content/projects'

const Track = () => {
  const trackContext = useContext(TrackContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='mt-16 bg-blue-100 bg-opacity-65'>
        <PageTitle title='My track' color='bg-gray-100' />
        <div className='p-2 lg:p-10'>
          <TrackList />
          <hr className={trackContext.selectedTrack ? 'block mb-10 border-white' : 'hidden'} />
          {trackContext.selectedTrack ? 
            <section className='flex flex-col items-between m-auto mb-10'>
              <h3 className='font-bold text-xl mb-10 bg-blue-500 text-white p-2 drop-shadow-md w-fit m-auto rounded-lg'>{trackContext.selectedTrack.title}</h3>
              <div className='mb-10'>
                {trackContext.selectedTrack && trackContext.selectedTrack.subItems.map((subitem, index) => (
                  <button onClick={() => trackContext.setSelectedItem(subitem)} className={`${trackContext.selectedItem && subitem.title === trackContext.selectedItem.title ? 'bg-blue-500' : subitem.completed ? 'bg-green-400' : 'bg-red-400'} rounded-lg p-2 m-2 drop-shadow-lg font-bold active:text-black active:bg-transparent hover:bg-blue-500 hover:scale-105`}>
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
          <hr className='border-white mb-10' />
          <h3 className='font-bold text-xl mb-10 bg-blue-500 text-white p-2 drop-shadow-md w-fit m-auto rounded-lg'>My apps:</h3>
          { projects.map((project) => (
            <div className='m-auto'>
              <p className='text-lg bg-white shadow-inner w-fit m-auto rounded-lg p-2 font-bold'>Project: {project.title}</p>
              <br />
              <a href={project.site} className='text-blue-500 underline hover:text-black hover:no-underline active:text-blue-500'>Website</a>
              <br />
              <a href={project.github} className='text-blue-500 underline hover:text-black hover:no-underline active:text-blue-500'>Github repo</a>
            </div>
          )) }
        </div>
    </main>
  )
}

export default Track