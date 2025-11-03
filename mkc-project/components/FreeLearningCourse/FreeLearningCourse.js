import Image from "next/image";
import React from "react";

const FreeLearningCourse = () => {
  const items = [
    "Model Papers",
    "Video Lecture",
    "Sample Papers",
    "Study Materials",
    "Previous Years Papers",
    "Test Series",
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="text-black mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Free Learning Source
        </h1>
        <p className="text-[#424242] mt-1 text-sm md:text-base">
          Discover how MKC students cracked top exams and reached their goals.
        </p>
      </div>

      <div className="relative bg-linear-to-r from-[#D4BAFE] to-[#FFC2D9] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">

        <div className="z-10 w-full md:w-2/3">
          <div className="flex items-center gap-2 mb-5">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Learning Source
            </h2>
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-0.5 rounded-md">
              FREE
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {items.map((item, index) => (
              <button
                key={index}
                className="bg-white px-5 py-2 rounded-full text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:bg-pink-50 transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Explore More */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer hover:underline hover:text-gray-900 transition">
            <span>Explore More</span>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition">
              <span className="text-gray-600">→</span>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/3 hidden md:flex items-center justify-center overflow-hidden pr-6">
          <div className="relative right-[-60px] h-[140%] w-[300px] bg-white rounded-l-full shadow-inner flex justify-center items-center">
            <Image
              src="/image/Essay.svg"
              alt="Essay Illustration"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLearningCourse;