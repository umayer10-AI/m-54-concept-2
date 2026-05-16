import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-cyan-50 px-6">

            <div className="text-center max-w-2xl">

                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-extrabold text-blue-600 leading-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-lg mt-6 leading-8">
                    Sorry, the page you are looking for does not exist,
                    has been removed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-5 mt-10 flex-wrap">

                    <Link href="/">
                        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                            Go Home
                        </button>
                    </Link>

                    <button
                        className="border border-blue-600 text-blue-600 hover:bg-blue-50 transition px-8 py-4 rounded-full font-semibold"
                    >
                        Go Back
                    </button>

                </div>

            </div>

        </div>
    );
};

export default NotFound;