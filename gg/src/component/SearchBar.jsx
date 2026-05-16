import React from 'react';
import { Search } from 'lucide-react'; 

const SearchBar = () => {
    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="flex items-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200">
                
                {/* Search Icon & Input */}
                <div className="flex items-center flex-1 pl-3 gap-3">
                    <Search className="text-slate-400 w-5 h-5 flex-shrink-0" />
                    <input
                        type="text"
                        placeholder="Search for courses (e.g. Next.js, Web Design...)"
                        className="w-full text-slate-700 bg-transparent placeholder-slate-400 text-sm md:text-base outline-none border-none py-1.5"
                    />
                </div>

                {/* Search Button */}
                <button className="bg-[#1d63ff] hover:bg-blue-700 text-white font-bold text-sm md:text-base px-6 py-2.5 rounded-xl transition-colors duration-200 shadow-sm">
                    Search
                </button>
                
            </div>
        </div>
    );
};

export default SearchBar;