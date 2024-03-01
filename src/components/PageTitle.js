import React, { useState } from 'react'

const PageTitle = ({title, color}) => {
    const style = 'flex items-center p-5 justify-center mb-10 border-b-2 border-gray-200 w-full ' + (color === undefined ? '' : color);

    return (
    <div className={style}>
        <h2 className='text-center text-2xl font-bold'>{title}</h2>
        <br />
    </div>
    )
}

export default PageTitle