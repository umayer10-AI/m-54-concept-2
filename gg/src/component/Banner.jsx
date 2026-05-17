"use client"
import Image from 'next/image';
import React from 'react';
import { FaPlay, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper pagination={true} modules={[Pagination,Navigation]} className="mySwiper">

        <SwiperSlide>
            <div className='bg-[#f4f7fc] px-6 lg:px-16 rounded-xl py-10 w-[80%] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>

                {/* Left Side */}
                <div>

                    {/* Top Badge */}
                    <div className='inline-flex items-center gap-2 border border-blue-300 bg-blue-100 px-5 py-2 rounded-full'>
                        <FaStar className='text-blue-600 text-sm' />
                        <p className='text-blue-600 font-semibold text-sm'>
                            Trusted by 10,000+ Students Worldwide
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight text-[#0b1533] mt-5'>
                        Master New <br />
                        Skills with <br />
                        <span className='text-blue-600'>
                            Expert-Led
                        </span>
                        <br />
                        Courses
                    </h1>

                    {/* Description */}
                    <p className='text-gray-500 font-semibold text-lg leading-9 mt-5 max-w-xl'>
                        Unlock your potential with over 1,000+ high-quality
                        courses taught by industry professionals. Start your
                        learning journey today.
                    </p>

                    {/* Buttons */}
                    <div className='flex items-center gap-8 mt-5 flex-wrap'>

                        <button className='bg-linear-to-r from-cyan-500 to-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg'>
                            Explore Courses
                            <span>→</span>
                        </button>

                        <button className='flex items-center gap-3 text-[#0b1533] font-bold text-lg'>
                            <div className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center'>
                                <FaPlay className='text-sm ml-1' />
                            </div>
                            Watch Demo
                        </button>

                    </div>

                    {/* Logos */}
                    <div className='flex items-center gap-10 mt-10 opacity-50 font-bold text-2xl'>
                        <h2>Logo</h2>
                        <h2>LinkedIn</h2>
                        <h2>YouTube</h2>
                    </div>

                </div>

                {/* Right Side */}
                <div className='relative'>

                    <div className='relative h-130 rounded-[40px] overflow-hidden shadow-2xl'>

                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                            alt="banner"
                            fill
                            className='object-cover'
                        />

                        {/* Community Card */}
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#f6eee8] w-[85%] rounded-3xl p-6 flex items-center gap-5 shadow-lg'>

                            {/* Avatars */}
                            <div className='flex -space-x-4'>

                                <Image
                                    src="https://i.pravatar.cc/100?img=1"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=2"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=3"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=4"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                            </div>

                            {/* Text */}
                            <div>
                                <h2 className='font-extrabold text-xl text-[#0b1533]'>
                                    Join the community
                                </h2>

                                <p className='text-gray-500'>
                                    500+ new enrollments today
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[#f4f7fc] px-6 lg:px-16 rounded-xl py-10 w-[80%] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>

                {/* Left Side */}
                <div>

                    {/* Top Badge */}
                    <div className='inline-flex items-center gap-2 border border-blue-300 bg-blue-100 px-5 py-2 rounded-full'>
                        <FaStar className='text-blue-600 text-sm' />
                        <p className='text-blue-600 font-semibold text-sm'>
                            Trusted by 10,000+ Students Worldwide
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight text-[#0b1533] mt-5'>
                        Master New <br />
                        Skills with <br />
                        <span className='text-blue-600'>
                            Expert-Led
                        </span>
                        <br />
                        Courses
                    </h1>

                    {/* Description */}
                    <p className='text-gray-500 font-semibold text-lg leading-9 mt-5 max-w-xl'>
                        Unlock your potential with over 1,000+ high-quality
                        courses taught by industry professionals. Start your
                        learning journey today.
                    </p>

                    {/* Buttons */}
                    <div className='flex items-center gap-8 mt-5 flex-wrap'>

                        <button className='bg-linear-to-r from-cyan-500 to-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg'>
                            Explore Courses
                            <span>→</span>
                        </button>

                        <button className='flex items-center gap-3 text-[#0b1533] font-bold text-lg'>
                            <div className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center'>
                                <FaPlay className='text-sm ml-1' />
                            </div>
                            Watch Demo
                        </button>

                    </div>

                    {/* Logos */}
                    <div className='flex items-center gap-10 mt-10 opacity-50 font-bold text-2xl'>
                        <h2>Logo</h2>
                        <h2>LinkedIn</h2>
                        <h2>YouTube</h2>
                    </div>

                </div>

                {/* Right Side */}
                <div className='relative'>

                    <div className='relative h-130 rounded-[40px] overflow-hidden shadow-2xl'>

                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                            alt="banner"
                            fill
                            className='object-cover'
                        />

                        {/* Community Card */}
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#f6eee8] w-[85%] rounded-3xl p-6 flex items-center gap-5 shadow-lg'>

                            {/* Avatars */}
                            <div className='flex -space-x-4'>

                                <Image
                                    src="https://i.pravatar.cc/100?img=1"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=2"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=3"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=4"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                            </div>

                            {/* Text */}
                            <div>
                                <h2 className='font-extrabold text-xl text-[#0b1533]'>
                                    Join the community
                                </h2>

                                <p className='text-gray-500'>
                                    500+ new enrollments today
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[#f4f7fc] px-6 lg:px-16 rounded-xl py-10 w-[80%] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>

                {/* Left Side */}
                <div>

                    {/* Top Badge */}
                    <div className='inline-flex items-center gap-2 border border-blue-300 bg-blue-100 px-5 py-2 rounded-full'>
                        <FaStar className='text-blue-600 text-sm' />
                        <p className='text-blue-600 font-semibold text-sm'>
                            Trusted by 10,000+ Students Worldwide
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight text-[#0b1533] mt-5'>
                        Master New <br />
                        Skills with <br />
                        <span className='text-blue-600'>
                            Expert-Led
                        </span>
                        <br />
                        Courses
                    </h1>

                    {/* Description */}
                    <p className='text-gray-500 font-semibold text-lg leading-9 mt-5 max-w-xl'>
                        Unlock your potential with over 1,000+ high-quality
                        courses taught by industry professionals. Start your
                        learning journey today.
                    </p>

                    {/* Buttons */}
                    <div className='flex items-center gap-8 mt-5 flex-wrap'>

                        <button className='bg-linear-to-r from-cyan-500 to-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg'>
                            Explore Courses
                            <span>→</span>
                        </button>

                        <button className='flex items-center gap-3 text-[#0b1533] font-bold text-lg'>
                            <div className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center'>
                                <FaPlay className='text-sm ml-1' />
                            </div>
                            Watch Demo
                        </button>

                    </div>

                    {/* Logos */}
                    <div className='flex items-center gap-10 mt-10 opacity-50 font-bold text-2xl'>
                        <h2>Logo</h2>
                        <h2>LinkedIn</h2>
                        <h2>YouTube</h2>
                    </div>

                </div>

                {/* Right Side */}
                <div className='relative'>

                    <div className='relative h-130 rounded-[40px] overflow-hidden shadow-2xl'>

                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                            alt="banner"
                            fill
                            className='object-cover'
                        />

                        {/* Community Card */}
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#f6eee8] w-[85%] rounded-3xl p-6 flex items-center gap-5 shadow-lg'>

                            {/* Avatars */}
                            <div className='flex -space-x-4'>

                                <Image
                                    src="https://i.pravatar.cc/100?img=1"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=2"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=3"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                                <Image
                                    src="https://i.pravatar.cc/100?img=4"
                                    alt="user"
                                    width={55}
                                    height={55}
                                    className='rounded-full border-4 border-white'
                                />

                            </div>

                            {/* Text */}
                            <div>
                                <h2 className='font-extrabold text-xl text-[#0b1533]'>
                                    Join the community
                                </h2>

                                <p className='text-gray-500'>
                                    500+ new enrollments today
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        </SwiperSlide>

      </Swiper>
    );
};

export default Banner;