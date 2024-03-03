import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavigationLinks = () => {
    const pathName = useLocation().pathname;
    const [activeLink, setActiveLink] = useState('home');
    const activeClass = 'bg-blue-600 p-2 mx-2 text-black rounded-lg hover:scale-105 drop-shadow-md text-xs lg:text-base '

    useEffect(() => {
      switch (pathName) {
        case "/":
            setActiveLink('home');
            break;
        case "/track":
            setActiveLink('track');
            break;
        case "/about":
            setActiveLink('about');
            break;
        case "/cv":
            setActiveLink('cv');
            break;
        default:
            break;
      }
    }, [pathName])
    

    return (
        <div className='flex justify-between'>
            <li className={activeLink === "home" ? activeClass : "hover:bg-blue-600 hover:text-black hover:scale-105 hover:drop-shadow-md mx-2 text-xs lg:text-base rounded-lg p-2"} >
                <Link onClick={() => setActiveLink('home')} to="/">Home</Link>
            </li>
            <li className={activeLink === "track" ? activeClass : "hover:bg-blue-600 hover:text-black hover:scale-105 hover:drop-shadow-md mx-2 text-xs lg:text-base rounded-lg p-2"}>
                <Link onClick={() => setActiveLink('track')} to="/track">Track</Link>
            </li>
            <li className={activeLink === "about" ? activeClass : "hover:bg-blue-600 hover:text-black hover:scale-105 hover:drop-shadow-md mx-2 text-xs lg:text-base rounded-lg p-2"}>
                <Link onClick={() => setActiveLink('about')} to="/about">About</Link>
            </li>
            <li className={activeLink === "cv" ? activeClass : "hover:bg-blue-600 hover:text-black hover:scale-105 hover:drop-shadow-md mx-2 text-xs lg:text-base rounded-lg p-2"}>
                <Link onClick={() => setActiveLink('cv')} to="/cv">CV</Link>
            </li>
        </div>
    )
}

export default NavigationLinks