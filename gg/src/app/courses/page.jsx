import Card from '@/component/Card';
import SearchBar from '@/component/SearchBar';
import React from 'react';
import { PiBookOpen } from 'react-icons/pi';

const page = async ({searchParams}) => {
    const {search} = await searchParams
    console.log(search)
    return (
        <div>
            <div className='text-center space-y-5 my-10'>
                <h2 className='text-5xl font-extrabold'>Explore Our <span className='bg-linear-to-r from-blue-500 to-blue-800 bg-clip-text w-fit text-transparent'>Premium</span> Courses</h2>
                <h2 className=' text-gray-500 text-xl w-2xl mx-auto'>Find the perfect course to advance your career. Learn from the best experts in the field.</h2>
            </div>
            <div className='my-10'>
                <SearchBar></SearchBar>
            </div>
            <div className='bg-[#f4f7fc]'>
                <div className=' pt-10 pb-20 w-[80%] mx-auto'>
                    <h2 className='text-2xl font-bold flex items-center gap-2 mb-10'><span className='text-blue-500 text-3xl'><PiBookOpen /></span>All Courses</h2>
                    
                    <Card search={search}></Card>
                </div>
            </div>
        </div>
    );
};

export default page;