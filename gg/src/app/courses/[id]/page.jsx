import React from 'react';
import { Clock, BookOpen, User, Tag, ArrowLeft, CheckCircle, Globe, ShieldCheck } from 'lucide-react';
import { userIdData } from '@/lib/data';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const CourseDetails = async ({params}) => {

    const {id} = await params
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token)

    const course = await userIdData(id,token)

    const learningOutcomes = [
        "Build powerful, production-ready full stack applications using the MERN stack.",
        "Master MongoDB, Express.js, React, and Node.js from absolute scratch.",
        "Implement secure authentication, JWT, and state management.",
        "Deploy your web applications to platforms like Vercel, Netlify, and Render."
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-16">
            {/* Header / Navigation Link */}
            <div className="max-w-7xl mx-auto px-4 pt-6 md:pt-10">
                <Link href={'/courses'} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Courses
                </Link>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Left Column: Course Info & Details */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Badge & Title */}
                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            <Tag size={14} />
                            {course.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {course.description}
                        </p>
                    </div>

                    {/* Quick Meta Info */}
                    <div className="flex flex-wrap gap-6 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2.5">
                            <div className="p-2 bg-slate-50 rounded-xl text-slate-500">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Instructor</p>
                                <p className="text-sm font-bold text-slate-700">{course.instructor}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2.5">
                            <div className="p-2 bg-slate-50 rounded-xl text-slate-500">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Duration</p>
                                <p className="text-sm font-bold text-slate-700">{course.duration}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <div className="p-2 bg-slate-50 rounded-xl text-slate-500">
                                <BookOpen size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Lessons</p>
                                <p className="text-sm font-bold text-slate-700">24 Lessons</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <div className="p-2 bg-slate-50 rounded-xl text-slate-500">
                                <Globe size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Language</p>
                                <p className="text-sm font-bold text-slate-700">Bangla / English</p>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail for Mobile Only */}
                    <div className="block lg:hidden rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                        <img src={course.thumbnail} alt={course.title} className="w-full h-auto object-cover" />
                    </div>

                    {/* What you will learn section */}
                    <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm space-y-4">
                        <h2 className="text-2xl font-extrabold text-slate-900">What you will learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {learningOutcomes.map((outcome, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column: Sticky Purchase Card */}
                <div className="lg:sticky lg:top-10 bg-white border border-slate-200/80 rounded-[32px] p-6 shadow-md space-y-6">
                    
                    {/* Thumbnail for Desktop */}
                    <div className="hidden lg:block h-[200px] w-full rounded-2xl overflow-hidden border border-slate-100">
                        <img 
                            src={course.thumbnail} 
                            alt={course.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Price and Guarantee */}
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-blue-600">${course.price}</span>
                            <span className="text-sm text-slate-400 line-through">$199</span>
                            <span className="text-xs font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md ml-auto">55% OFF</span>
                        </div>
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                            <ShieldCheck size={14} className="text-emerald-500" /> 30-Day Money-Back Guarantee
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/10 transition-colors duration-200 text-base">
                            Enroll in Course
                        </button>
                        <button className="w-full border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-4 rounded-xl transition-colors duration-200 text-base">
                            Add to Cart
                        </button>
                    </div>

                    {/* Features Included */}
                    <div className="pt-2 space-y-3 border-t border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">This course includes:</p>
                        <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
                            <li className="flex items-center gap-2">🔹 Full lifetime access</li>
                            <li className="flex items-center gap-2">🔹 Access on mobile and TV</li>
                            <li className="flex items-center gap-2">🔹 Assignments & Quizzes</li>
                            <li className="flex items-center gap-2">🔹 Certificate of completion</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CourseDetails;