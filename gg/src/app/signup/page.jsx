"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpCard = () => {

    const {register,handleSubmit,formState: { errors },} = useForm()

    const a = async(v) => {
        console.log(v)
    }

    return (
        <div className=" bg-slate-100 flex items-center justify-center py-10">
            {/* Main Sign Up Card */}
            <div className="w-full max-w-[440px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-10 font-sans">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                        Create <span className="text-blue-600">Account</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-sm md:text-base">
                        Join CourseHub and start learning today
                    </p>
                </div>

                {/* Google Sign Up Button */}


                {/* Sign Up Form */}
                <form onSubmit={handleSubmit(a)} className="space-y-5">
                    {/* Full Name Input */}
                    <div className="space-y-1.5">
                        <label className="text-slate-800 font-bold text-sm">
                            Full Name
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-slate-800 font-bold text-sm">
                            Email Address
                        </label>
                        <input
                        {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-slate-800 font-bold text-sm">
                            Image URL
                        </label>
                        <input
                        {...register("image", { required: true })}
                            type="url"
                            placeholder="Enter your URL"
                            className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <label className="text-slate-800 font-bold text-sm">
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="........"
                            className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-700 placeholder-slate-400 text-base tracking-widest outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-200 flex items-center justify-center gap-2 group mt-4"
                    >
                        <span>Register</span>
                        <svg 
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="2.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>

                {/* Footer Link */}
                <p className="text-center text-sm font-semibold text-slate-500 mt-8">
                    Already have an account?{' '}
                    <Link href={"/login"} className="text-blue-600 hover:underline font-bold">
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default SignUpCard;