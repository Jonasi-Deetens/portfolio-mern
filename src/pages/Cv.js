import React from 'react'
import cv from '../assets/CV.pdf'

const Cv = () => {
    return (
        <main>
            <embed className='m-auto h-screen mt-16' src={cv} type="application/pdf" width="100%" />
        </main>
    )
}

export default Cv