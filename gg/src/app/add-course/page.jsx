import React from 'react';
import { PlusSquare, ListPlus } from 'lucide-react';
import { useForm } from 'react-hook-form';

const CreateCourseForm = () => {

    const {register,handleSubmit,formState: { errors },} = useForm()

  return (
    <div className="flex items-center justify-center bg-slate-50 p-4 font-sans selection:bg-blue-500 selection:text-white">
      {/* Main Card */}
      <div className="w-full max-w-[720px] rounded-[40px] bg-white p-8 md:py-10 md:px-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100">
        
        {/* Header Icon */}
        <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
          <PlusSquare className="h-7 w-7 text-blue-600" strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Create New <span className="text-blue-600">Course</span>
        </h2>
        <p className="mt-2 text-center text-sm font-medium text-slate-500">
          Share your knowledge with the world
        </p>

        {/* Form */}
        <form className="mt-10 space-y-3">
          
          {/* Course Title */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-slate-700 tracking-wide">Course Title</label>
            <input
              type="text"
              placeholder="e.g. Next.js 15 Masterclass"

              className="w-full rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-[14px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-250 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-slate-700 tracking-wide">Description</label>
            <textarea
              rows={4}
              placeholder="What will students learn in this course?"

              className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white px-5 text-[14px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-250 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Thumbnail & Category (Grid) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Thumbnail URL */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">Thumbnail URL</label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."

                className="w-full rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-[14px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-250 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">Category</label>
              <div className="relative">
                <ListPlus className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select
                  defaultValue=""

                  className="w-full appearance-none rounded-2xl border border-slate-200/80 bg-white pl-12 pr-12 py-4 text-[14px] text-slate-600 outline-none transition-all duration-250 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled hidden>Select a category</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="programming">Programming Languages</option>
                </select>
                {/* Custom dropdown arrow to match the design list icon styling */}
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-[2px] text-slate-400">
                  <span className="block h-[2px] w-3 bg-slate-400"></span>
                  <span className="block h-[2px] w-3 bg-slate-400"></span>
                  <span className="block h-[2px] w-3 bg-slate-400"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Price & Duration (Grid) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">Price ($)</label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                className="w-full rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-[14px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-250 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">Duration</label>
              <input
                type="text"
                placeholder="e.g. 12h 30m"
                className="w-full rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-[14px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-250 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Actions Button Group */}
          <div className="pt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"

              className="w-full sm:w-auto px-8 py-4 text-[15px] font-bold text-slate-900 rounded-2xl transition-colors hover:bg-slate-100 duration-200 active:scale-[0.98]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto min-w-[240px] bg-[#0080FF] hover:bg-[#0070DF] active:scale-[0.98] text-white px-8 py-4 text-[15px] font-bold rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,128,255,0.35)] transition-all duration-200"
            >
              Publish Course
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateCourseForm;