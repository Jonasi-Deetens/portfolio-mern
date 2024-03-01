import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavigationLinks = () => {
    const pathName = useLocation().pathname;
    const [activeLink, setActiveLink] = useState('home');
    const activeClass = 'bg-green-500 p-5 text-black'

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
        default:
            break;
      }
    }, [pathName])
    

    return (
        <div className='flex justify-center'>
            <li className={activeLink === "home" ? activeClass : "hover:bg-green-400 p-5"} >
                <Link onClick={() => setActiveLink('home')} to="/">Home</Link>
            </li>
            <li className={activeLink === "track" ? activeClass : "hover:bg-green-400 p-5"}>
                <Link onClick={() => setActiveLink('track')} to="/track">Track</Link>
            </li>
            <li className={activeLink === "about" ? activeClass : "hover:bg-green-400 p-5"}>
                <Link onClick={() => setActiveLink('about')} to="/about">About</Link>
            </li>
        </div>
    )
}

export default NavigationLinks