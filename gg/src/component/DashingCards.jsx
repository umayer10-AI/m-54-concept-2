import Link from 'next/link';
import React from 'react';

const DashingCards = () => {
    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center rounded-[32px] bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] p-8">
              <div className="text-center space-y-5">
                <p className="text-base font-medium text-slate-600">
                  No courses yet
                </p>
                
                {/* Browse Courses Button */}
                <Link
                  href="/courses" 
                  className="inline-block bg-[#0080FF] hover:bg-[#0070DF] active:scale-[0.98] text-white px-7 py-3 text-sm font-bold rounded-full shadow-[0_8px_20px_-4px_rgba(0,128,255,0.3)] transition-all duration-200"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
        </div>
    );
};

export default DashingCards;