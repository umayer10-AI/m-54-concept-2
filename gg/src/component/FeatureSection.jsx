import React from 'react';
import { ArrowRight, Clock, BookOpen, User } from 'lucide-react';
import { featureData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCourses = async () => {

    const courses = await featureData()

    return (
        <section className="bg-slate-50/50 py-16 px-4 md:px-8 lg:px-12 font-sans">
            <div className="w-[80%] mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3 max-w-xl">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                            Top Rated
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Featured Courses
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                            Handpicked premium courses designed to help you master the most in-demand skills in the industry today.
                        </p>
                    </div>

                    {/* View All Button */}
                    <Link href={'/courses'} className="flex items-center justify-center gap-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm whitespace-nowrap self-start md:self-auto group">
                        View All Courses
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Courses Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <Link href={`/courses/${course._id}`} 
                            key={course._id} 
                            className="bg-white rounded-[24px] border group border-slate-200/60 shadow-sm overflow-hidden p-3.5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 duration-300"
                        >
                            {/* Image Section */}
                            <div>
                                <div className="relative h-[180px] w-full rounded-[18px] overflow-hidden bg-slate-100">
                                    <Image width={100} height={100}
                                        src={course.thumbnail} 
                                        alt={course.title} 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                    />
                                    {/* Category Badge */}
                                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                                        {course.category}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="pt-4 px-1 pb-2">
                                    <h3 className="text-base font-bold text-slate-900 leading-snug min-h-[44px] line-clamp-2 mb-4">
                                        {course.title}
                                    </h3>
                                    
                                    {/* Enrolled / Students Count Info */}
                                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">
                                        <User size={14} />
                                        <span>{course.enrolled}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Price Section */}
                            <div className="pt-2 px-1 border-t border-slate-50 flex justify-between items-center mt-auto">
                                <span className="text-xl font-black text-blue-600">
                                    ${course.price}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedCourses;