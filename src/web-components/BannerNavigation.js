import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import NavigationLinks from './NavigationLinks'

const BannerNavigation = () => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

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
        <nav className={`list-none m-auto drop-shadow-md bg-gray-500 ${scrollOpacity > 0 ? 'border-b-2 bg-opacity-100 ' : 'bg-opacity-0 '} text-black font-bold fixed w-full z-50`}>
            <div className='flex justify-between items-center w-10/12 m-auto'>
                <div className='flex items-center p-2 justify-between'>
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

export default BannerNavigation