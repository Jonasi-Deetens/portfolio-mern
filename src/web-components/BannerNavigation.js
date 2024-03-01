import React from 'react'
import logo from '../assets/logo-white-64.png'
import NavigationLinks from './NavigationLinks'

const BannerNavigation = () => {
    return (
        <nav className='flex justify-around items-center list-none m-auto bg-gray-100 bg-opacity-20 text-white font-bold fixed w-full z-50 scroll:bg-opacity-100'>
            <picture>
                <img src={logo} alt="company logo" />
            </picture>
            <h1 className='text-xl hidden lg:block'>Jonasi Deetens - Course Tracker</h1>
            <NavigationLinks />
        </nav>
    )
}

export default BannerNavigation