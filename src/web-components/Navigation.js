import React from 'react'
import logo from '../assets/logo.png'
import NavigationLinks from './NavigationLinks'

const Navigation = () => {
    return (
        <nav className={`list-none m-auto drop-shadow-md font-bold fixed top-0 bg-white w-full z-50`}>
            <div className='flex justify-between items-center w-10/12 m-auto'>
                <div className='flex items-center justify-between'>
                    <picture>
                        <img width={64} src={logo} alt="company logo" />
                    </picture>
                    <h1 className='text-xl hidden lg:block'>Jonasi Deetens - Course Tracker</h1>
                </div>
                <NavigationLinks />
            </div>
        </nav>
    )
}

export default Navigation
