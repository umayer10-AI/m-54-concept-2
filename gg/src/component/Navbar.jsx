import Image from 'next/image';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div>
                <h2 className='flex items-center gap-1'><h2 className='text-3xl'><FaBookOpen /></h2><span className='text-2xl font-bold'>Mentora</span></h2>
            </div>
        </div>
    );
};

export default Navbar;