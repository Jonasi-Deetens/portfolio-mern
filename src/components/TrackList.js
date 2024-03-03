import React, { useContext, useState } from 'react'
import { TrackContext } from '../providers/TrackProvider';

const TrackList = () => {
  const trackContext = useContext(TrackContext)
  const [activeItem, setActiveItem] = useState("");

  const setItems = (track) => {
    trackContext.setSelectedTrack(track);
    trackContext.setSelectedItem(null);
    setActiveItem(track.title);
  }

  return (
    <section className='flex justify-around m-auto p-5'>
      { trackContext.tracks.map((track) => (
        <button onClick={() => setItems(track)} className={`${activeItem === track.title ? 'bg-blue-600' : 'bg-gray-500'} m-5 p-2 bg-opacity-95 border drop-shadow-lg shadow-black rounded-lg active:bg-gray-400 hover:bg-blue-600 hover:scale-105`}><img width={45} src={track.icon} alt={track.iconAlt} /></button>        
      )) }
    </section>
  )
}

export default TrackList