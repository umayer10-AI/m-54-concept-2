"use client"
import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import Image from 'next/image';

const AllCards = ({p}) => {

    return (
        <div>
            <div className="max-w-90 h-full shadow-sm hover:shadow-2xl hover:shadow-blue-500 hover:-translate-y-2  duration-300 bg-white rounded-[32px] border border-gray-200 overflow-hidden p-4 font-sans">
            {/* Top Image Section */}
            <div className="relative h-60 w-full rounded-[24px] overflow-hidden">
                <Image width={100} height={100}
                    src={p.thumbnail} 
                    alt={p.title} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {p.category}
                </span>
            </div>

            {/* Content Section */}
            <div className="pt-5 px-2 pb-2">
                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-1">
                    {p.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-4">
                    By <span className="font-semibold text-slate-700">{p.instructor}</span>
                </p>

                {/* Info: Duration & Lessons */}
                <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mb-5">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-slate-400" />
                        <span>{p.duration}</span>
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
                        ${p.price}
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