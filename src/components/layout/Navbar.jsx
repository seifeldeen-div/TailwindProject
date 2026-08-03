import React, { useState } from 'react'

function Navbar() {
    const [mobileMenue, setMobileMenue] = useState(false)
    const links = [
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "Ai Types",
            href: "#types"
        },
        {
            name: "Ai Benefits",
            href: '#benefits'
        },
        {
            name: 'Contact',
            href: '#contact'
        }
    ]
    return (
        <>
            <nav className='bg-white/80 w-full shadow-sm backdrop-blur-md fixed top-0 left-0 z-50'>
                <div className="app-container p-1 flex justify-between items-center h-16">
                    {/* logo */}
                    <span className="p-3 gradient-text text-2xl font-bold">Ai Types</span>
                    {/* dektop links */}
                    <div className="d-links hidden md:flex items-center space-x-4">
                        {links.map((link) => {
                            return (
                                <a className='nav-item' key={link.name} href={link.href}>{link.name}</a>
                            )
                        })}
                        <button className='btn nav-btn'>Get Started</button>
                    </div>
                    {/* mobile resbonsive */}
                    <button
                        onClick={() => setMobileMenue((prev) => !prev)}
                        className='md:hidden rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                {/* mobileMenue */}
                {mobileMenue && (
                    <div className="mobileMenue md:hidden p-3 rounded-b-lg space-y-1">
                        {links.map((link) => {
                            return (
                                <a key={link.name} className='mobile-nav-item' href={link.href}>{link.name}</a>
                            )
                        })}
                        <button className='btn mobile-nav-btn cursor-pointer'>Get Started</button>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
