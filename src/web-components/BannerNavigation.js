import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-white-64.png'
import NavigationLinks from './NavigationLinks'

const BannerNavigation = () => {
    const [scrollOpacity, setScrollOpacity] = useState(20);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            setScrollOpacity(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flex justify-around items-center list-none m-auto drop-shadow-md bg-black ${scrollOpacity > 50 ? 'border-b-2 border-white bg-opacity-90 ' : 'bg-opacity-0 '} text-white font-bold fixed w-full z-50`}>
            <picture>
                <img src={logo} alt="company logo" />
            </picture>
            <h1 className='text-xl hidden lg:block'>Jonasi Deetens - Course Tracker</h1>
            <NavigationLinks />
        </nav>
    )
}

export default BannerNavigation