import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;