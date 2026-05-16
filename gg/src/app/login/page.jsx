import Link from 'next/link';
import React from 'react';

const LoginCard = () => {
    return (
        <div className=" bg-slate-100 flex items-center justify-center py-10">
            {/* Main Login Card */}
            <div className="w-full max-w-[440px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-10 font-sans">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                        Welcome <span className="text-blue-600">Back</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-sm md:text-base">
                        Continue your learning journey today
                    </p>
                </div>

                {/* Google Sign In Button */}
                <button className="w-full flex items-center justify-center gap-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm py-3.5 px-4 rounded-xl transition-colors duration-200 mb-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#EA4335"
                            d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                        />
                        <path
                            fill="#4285F4"
                            d="M16.04 15.345c-1.077.736-2.423 1.164-4.04 1.164-2.955 0-5.46-1.982-6.355-4.654L1.62 14.97C3.578 18.923 7.65 21.62 12 21.62c3.155 0 6.036-1.118 8.127-3.055l-4.086-3.22Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.686 11.855a7.042 7.042 0 0 1 0-2.09L1.66 6.65a11.93 11.93 0 0 0 0 10.7l4.027-3.114V11.855Z"
                        />
                        <path
                            fill="#34A853"
                            d="M23.49 12.275c0-.718-.064-1.409-.182-2.073H12v4.182h6.464a5.53 5.53 0 0 1-2.4 3.636l4.086 3.218c2.39-2.21 3.764-5.464 3.764-8.964Z"
                        />
                    </svg>
                    Sign in with Google
                </button>

                {/* Divider */}
                <div className="relative flex py-2 items-center mb-6">
                    <div className="flex-grow border-t border-slate-100"></div>
                    <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Or with Email
                    </span>
                    <div className="flex-grow border-t border-slate-100"></div>
                </div>

                {/* Login Form */}
                <form className="space-y-5">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-slate-800 font-bold text-sm">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <label className="text-slate-800 font-bold text-sm">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="........"
                            className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-700 placeholder-slate-400 text-base tracking-widest outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#forgot" className="text-blue-600 hover:underline font-bold text-xs md:text-sm">
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0084ff] hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
                    >
                        <span>Sign In</span>
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
                    New to CourseHub?{' '}
                    <Link href={"/signup"} className="text-blue-600 hover:underline font-bold">
                        Create an account
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginCard;