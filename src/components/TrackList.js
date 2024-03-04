import React, { useContext, useState } from 'react'
import { TrackContext } from '../providers/TrackProvider';

const TrackList = () => {
  const trackContext = useContext(TrackContext)
  const [activeItem, setActiveItem] = useState(trackContext.selectedTrack.title);

  const setItems = (track) => {
    trackContext.setSelectedTrack(track);
    trackContext.setSelectedItem(null);
    setActiveItem(track.title);
  }

  return (
    <section className='flex flex-wrap justify-around m-auto p-5'>
      { trackContext.tracks.map((track) => (
        <button onClick={() => setItems(track)} className={`${activeItem === track.title ? 'bg-white' : 'bg-transparent'} m-5 p-2 bg-opacity-95 drop-shadow-lg shadow-black rounded-lg active:bg-transparent hover:bg-white hover:scale-105`}><img width='45px' src={track.icon} alt={track.iconAlt} /></button>        
      )) }
    </section>
  )
}

export default TrackList