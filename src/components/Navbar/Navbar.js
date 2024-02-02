import React, { useState } from 'react'
import './styles.css'

function Navbar({ fadeIn }) {
    const [linkIndex, setLinkIndex] = useState(0)

    const navLinks = [
        { link: "HOME" },
        { link: "STORY" },
        { link: "SERVICES" },
        { link: "OUR WORK" },
    ]

    const handleIndex = (index) => {
        setLinkIndex(index)
    }

    return (
        <nav className='Navbar'>
            <a href='#' className='logo'>QUIRK & QUILL STUDIOS</a>
            <ul>
                {navLinks.map((links, index) => (
                    <li
                        key={index}
                        onClick={() => handleIndex(index)}
                        className={linkIndex === index ? "active" : null}
                    >
                        <a>{links.link}</a>
                    </li>
                ))}
            </ul>
            <button>GET  QUOTE</button>
        </nav>
    )
}

export default Navbar
