import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Track</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
        </nav>
    )
}

export default Navigation