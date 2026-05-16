import Image from 'next/image';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import Nav1 from './Nav1';
import Nav2 from './Nav2';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white/50'>
            <div className='flex justify-between items-center py-3 w-[80%] mx-auto'>
                <div>
                    <div className='flex items-center gap-1'><h2 className='text-4xl text-blue-500'><FaBookOpen /></h2><span className='text-2xl font-extrabold'>Mentora</span></div>
                </div>
                <Nav1></Nav1>
                <Nav2></Nav2>
            </div>
        </div>
    );
};

export default Navbar;