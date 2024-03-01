import React from 'react'
import logo from '../assets/logo-64.png'
import NavigationLinks from './NavigationLinks'

const Navigation = () => {
    return (
        <nav className='flex justify-around items-center top-0 list-none m-auto bg-white border-b-1 drop-shadow-md border-black font-bold fixed w-full z-50'>
            <picture>
                <img src={logo} alt="company logo" />
            </picture>
            <h1 className='text-xl hidden lg:block'>Jonasi Deetens - Course Tracker</h1>
            <NavigationLinks />
        </nav>
    )
}

export default Navigation