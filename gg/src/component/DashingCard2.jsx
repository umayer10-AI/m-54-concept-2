import React from 'react';

const CourseRowCard = () => {

  const course = {
    title: "UI/UX Design Bootcamp",
    date: "Sun May 17 2026",
    status: "Active",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80" // ল্যাপটপে কাজ করার একটি রিলেটেড ইমেজ
  };

  const handleCancel = () => {
    console.log("Cancel clicked for:", course.title);
    
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
        
        {/* Left Side: Image & Text Info */}
        <div className="flex items-start gap-4 w-full sm:w-auto">
          {/* Course Thumbnail */}
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="h-full w-full object-cover"
            />
          </div>

          {/* Texts & Status Badge */}
          <div className="flex flex-col h-28 justify-between py-1">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold text-slate-950 tracking-tight leading-snug">
                {course.title}
              </h3>
              <p className="text-sm font-medium text-slate-400">
                {course.date}
              </p>
            </div>

            {/* Active Status Badge */}
            <div>
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-100/50">
                {course.status}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Cancel Action Button */}
        <div className="w-full sm:w-auto flex justify-end pt-2 sm:pt-0 sm:pr-2">
          <button
            onClick={handleCancel}
            className="text-sm font-bold text-slate-800 hover:text-red-500 transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-slate-50"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseRowCard;