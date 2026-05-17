"use client"
import { postBooking } from '@/lib/action';
import { betterAuth } from 'better-auth';
import React from 'react';

const BookingBtn = ({p}) => {

    const a = async () => {
        
        const b = {
            title: p.title,
            thumbnail: p.thumbnail,
            price: p.price,
            instructor: p.instructor,
            duration: p.duration,
            description: p.description,
            category: p.category,
            course: p.course,
        }

        // console.log(b)
        await postBooking(b)
    }

    return (
        <button onClick={a} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/10 transition-colors duration-200 text-base">
            Enroll in Course
        </button>
    );
};

export default BookingBtn;