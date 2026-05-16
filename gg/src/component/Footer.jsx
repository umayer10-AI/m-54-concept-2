import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-15 mt-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left Side: Brand Logo and Copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-blue-600 font-extrabold text-2xl tracking-wide mb-1">
                        Mentora
                    </span>
                    <span className="text-gray-500 font-semibold">
                        © 2026 Mentora Inc. All rights reserved.
                    </span>
                </div>

                {/* Right Side: Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-bold">
                    <a href="/privacy-policy" className="text-slate-700 hover:text-blue-600 text-sm transition-colors">
                        Privacy Policy
                    </a>
                    <a href="/terms-of-service" className="text-slate-700 hover:text-blue-600 text-sm transition-colors">
                        Terms of Service
                    </a>
                    <a href="/contact-support" className="text-slate-700 hover:text-blue-600 text-sm transition-colors">
                        Contact Support
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;