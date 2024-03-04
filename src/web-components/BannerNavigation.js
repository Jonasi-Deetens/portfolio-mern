import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import NavigationLinks from './NavigationLinks'

const BannerNavigation = () => {
    const [isTransparent, setIsTransparent] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 0)
                setIsTransparent(0);
            else 
                setIsTransparent(1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`list-none m-auto drop-shadow-md bg-blue-100 ${!isTransparent ? 'bg-opacity-100 ' : 'bg-opacity-0 '} text-black font-bold fixed w-full z-50 transition-all duration-1000`}>
            <div className='flex justify-between items-center w-10/12 m-auto'>
                <div className='flex items-center p-2 justify-between'>
                    <picture>
                        <img width={64} src={logo} alt="company logo" />
                    </picture>
                    <h1 className='text-xl hidden lg:block ml-5'>Jonasi Deetens - Course Tracker</h1>
                </div>
                <NavigationLinks />
            </div>
        </nav>
    )
}

export default BannerNavigation