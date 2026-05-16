import Image from 'next/image';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import Nav1 from './Nav1';

const Navbar = () => {
    return (
        <div>
            <div>
                <h2 className='flex items-center gap-1'><h2 className='text-4xl text-blue-500'><FaBookOpen /></h2><span className='text-2xl font-extrabold'>Mentora</span></h2>
            </div>
            <Nav1></Nav1>
        </div>
    );
};

export default Navbar;