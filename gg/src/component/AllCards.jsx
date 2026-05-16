"use client"
import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import Image from 'next/image';

const AllCards = () => {

    const courseData = {
        _id: "6a086eb8c46cc95748346b2f",
        title: "Complete MERN Stack Development",
        description: "Learn MongoDB, Express.js, React, and Node.js by building real-world full stack applications from scratch.",
        thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        category: "Web Development",
        price: "89",
        duration: "12 Weeks",
        instructor: "Alice Johnson" // ইমেজের সাথে মিল রেখে Alice Johnson দেওয়া হলো, আপনি চাইলে ডাটা পরিবর্তন করতে পারেন
    };

    return (
        <div>
            <div className="max-w-[360px] bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden p-4 font-sans">
            {/* Top Image Section */}
            <div className="relative h-[240px] w-full rounded-[24px] overflow-hidden">
                <Image width={100} height={100}
                    src={courseData.thumbnail} 
                    alt={courseData.title} 
                    className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {courseData.category}
                </span>
            </div>

            {/* Content Section */}
            <div className="pt-5 px-2 pb-2">
                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-1">
                    {courseData.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-4">
                    By <span className="font-semibold text-slate-700">{courseData.instructor}</span>
                </p>

                {/* Info: Duration & Lessons */}
                <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mb-5">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-slate-400" />
                        <span>{courseData.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <BookOpen size={16} className="text-slate-400" />
                        <span>24 Lessons</span>
                    </div>
                </div>

                <hr className="border-gray-100 mb-5" />

                {/* Bottom Section: Price & Action */}
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-blue-600">
                        ${courseData.price}
                    </span>
                    <button className="text-slate-900 hover:text-blue-600 font-bold text-sm transition-colors duration-200">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllCards;