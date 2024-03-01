import React, { useContext } from 'react'
import TrackSubItem from './TrackSubItem'
import { TrackContext } from '../providers/TrackProvider';

const TrackItem = ({item}) => {
  const trackContext = useContext(TrackContext);

  const setContextData = (subitem, item) => {
    trackContext.setSelectedItem(subitem)
    trackContext.setSelectedCategory(item)
  }

  return (
    <div className='flex flex-col  items-center m-5'>
      <h4 className='text-lg font-bold'>{item.title}</h4>
      <img className='m-5' width={50} src={item.icon} alt={item.iconAlt} />
      <div className='flex flex-col'>
        {item.subItems.map((subitem) => (
          <button onClick={() => setContextData(subitem, item)} className={`${ trackContext.selectedItem && subitem.title === trackContext.selectedItem.title && item.title === trackContext.selectedCategory.title ? 'bg-white' : subitem.completed ? 'bg-green-600' : 'bg-blue-600'} rounded-lg p-2 my-4 border border-black font-bold hover:text-white hover:bg-black`}>
            <TrackSubItem subitem={subitem}/>
          </button>
        ))}
      </div>
      
    </div>
  )
}

export default TrackItem