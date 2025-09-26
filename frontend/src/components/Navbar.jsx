import React from 'react';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-blue-950'>
            <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto text-white">
                <h1 className='font-bold text-xl'>Chatique</h1>
                <span><FaUser size={24} /></span>
            </nav>
        </div>
    )
}

export default Navbar;