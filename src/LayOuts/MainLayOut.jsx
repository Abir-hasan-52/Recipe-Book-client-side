import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
             <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default MainLayOut;