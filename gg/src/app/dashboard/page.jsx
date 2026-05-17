"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from '@/lib/auth-client';
import DashingCards from '@/component/DashingCards';

const EnrolledCourses = () => {

    const {data} = useSession()
    const user = data?.user

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-12 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-3 w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] flex flex-col items-start gap-4">
            {/* Avatar container with square-ish smooth rounded corners */}
            <div className="relative h-24 w-24 overflow-hidden rounded-[28px] bg-slate-100">
              <Image width={100} height={100}
                src={user?.image ? user.image : "/avatar.png"}
                alt={user?.name ? user.name : "User"}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            
            {/* User Info */}
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {user?.name}
              </h3>
              <p className="text-[13px] font-medium text-slate-400 break-all">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Right Column: Enrolled Courses Section */}
          <div className="lg:col-span-9 space-y-5">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight pl-1">
              My Enrolled Courses
            </h2>

            {/* Empty State Box */}
            <DashingCards></DashingCards>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EnrolledCourses;