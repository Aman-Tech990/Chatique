import Navbar from '@/components/Navbar';
import React from 'react';
import { Outlet } from 'react-router';

const MainElement = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainElement;