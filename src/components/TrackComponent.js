import React, { useContext, useEffect, useState } from 'react'
import TrackCategory from './TrackCategory'
import { TrackContext } from '../providers/TrackProvider';
import CodeExample from '../web-components/CodeExample';

const TrackComponent = ({track}) => {
  const [itemsHidden, setItemsHidden] = useState(true);
  const tracksContext = useContext(TrackContext)

  return (
    <article className='w-fit m-auto bg-blue-600 border drop-shadow-md border-black'>
        <h2 className='flex justify-center text-2xl p-2 m-2 bg-white border border-black font-bold'>{track.title} <button onClick={() => setItemsHidden(!itemsHidden)} className='text-sm mr-0 border border-black mx-2 px-2 text-blue-500'>{itemsHidden ? '+' : '-'}</button> </h2>
        <section className={`m-2 ${itemsHidden ? 'hidden' : 'flex'}`}>
        { track.categories.map((category) => (
            <TrackCategory category={category} />
        ))}
        </section>
        {tracksContext.selectedItem && !itemsHidden
        ? <CodeExample item={tracksContext.selectedItem} />
        : ''
        }
    </article>
  )
}

export default TrackComponent