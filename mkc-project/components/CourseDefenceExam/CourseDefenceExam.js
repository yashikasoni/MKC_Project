"use client";
import React, { useState } from "react";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function DefenceCourses() {
  const [activeTab, setActiveTab] = useState("NDA");

  const courses = {
    NDA: [
      "NDA Foundation Online Course (For 1 Year)",
      "NDA Foundation Online Course (For 2 Years)",
      "NDA Crash Course For NDA 2025",
      "NDA Foundation Online Course (1 Year)",
    ],
    "SSB Interview": [],
    ICG: [],
    AFCAT: [],
    CDS: [],
    CAPF: [],
  };

  const tabs = Object.keys(courses);

  return (
    <div className="w-full bg-linear-to-b from-white to-blue-50  border border-gray-200 p-6 md:p-10 ">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-8">
        Best Courses for Defence Exam
      </h2>
      {/* Tabs Header */}
      <div className="flex border-b border-gray-300 overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-3 text-sm md:text-base font-semibold text-center transition-all ${
              activeTab === tab
                ? "bg-green-100 text-green-800"
                : "text-gray-600 "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 flex flex-col md:flex-row gap-10">
        {/* Left Section - Courses */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Online Courses
          </h3>

          {courses[activeTab].length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {courses[activeTab].map((course, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-[#05AE74] text-lg">
                    <CheckCircleIcon />
                  </span>
                  <span className="text-gray-700 text-base">{course}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">
              Courses will be available soon.
            </p>
          )}
        </div>

        {/* Right Section - YouTube Promo */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-full max-w-xs">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Watch Us on YouTube
            </h3>
            <Image
              src="/image/youtube-img.png"
              alt="YouTube Promotion"
              width={200}
              height={150}
              className="rounded-2xl shadow-md w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
