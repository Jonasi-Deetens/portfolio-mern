import React from 'react'

const TrackItem = ({item}) => {
  return (
    <div className='mb-5'>
        <h4 className='text-lg font-bold'>{item.title}</h4>
        { item.example != "" ? <p><a className='text-blue-500 underline' href={item.example}>Preview</a></p> : "" }
        { item.repo != "" ? <p><a className='text-blue-500 underline' href={item.repo}>Watch on github</a></p> : "" }
    </div>
  )
}

export default TrackItem