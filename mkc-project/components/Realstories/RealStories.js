"use client";

import React, { useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const RealStories = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -Math.floor(sliderRef.current.clientWidth * 0.7),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: Math.floor(sliderRef.current.clientWidth * 0.7),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white py-10 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 max-w-[1200px] mx-auto">
        <div>
          <h1 className="font-semibold text-2xl md:text-3xl text-gray-900">
            Real Stories. Real Success.
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            Discover how MKC students cracked top exams and reached their goals.
          </p>
        </div>

        <button className="bg-[#E6F3EE] text-[#003C2F] mt-3 md:mt-0 font-medium text-sm px-4 py-2 rounded-md shadow-sm hover:bg-[#cde8dd] transition">
          View All Stories →
        </button>
      </div>

      <div className="relative max-w-[1180px] mx-auto">
        <button
          onClick={scrollLeft}
          aria-label="previous"
          className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 z-20"
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth gap-6 no-scrollbar px-8 py-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <article className="shrink-0 w-[780px] bg-[#E6F3EE] rounded-2xl p-6 flex gap-6 shadow-sm">
            <div className="bg-[#F9F6EE] rounded-xl overflow-hidden flex items-center justify-center w-40 h-40 md:w-48 md:h-48 shrink-0">
              <Image
                src="/image/Frame 1.svg"
                alt="student"
                width={100}
                height={50}
                className="object-cover w-full h-full"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="text-gray-800 flex-1">
              <p className="text-sm md:text-base leading-relaxed">
                I owe my success to the incredible faculty and structured study
                plan provided here. The personalized guidance, high-quality
                study material, and regular mock tests helped me identify and
                overcome my weaknesses. The doubt-clearing sessions and
                mentorship kept me motivated throughout my preparation journey.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-base md:text-lg">
                  Rohan Sharma
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  AIR 1 - JEE Advance 2025
                </p>
              </div>
            </div>
          </article>

          <article className="shrink-0 w-[780px] bg-[#E6F3EE] rounded-2xl p-6 flex gap-6 shadow-sm">
            <div className="bg-[#F9F6EE] rounded-xl overflow-hidden flex items-center justify-center w-40 h-40 md:w-48 md:h-48 shrink-0">
              <Image
                src="/image/Frame 1.svg"
                alt="student"
                width={100}
                height={50}
                className="object-cover w-full h-full"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="text-gray-800 flex-1">
              <p className="text-sm md:text-base leading-relaxed">
                The doubt-clearing sessions and mentorship kept me motivated
                throughout my preparation journey. MKC gave me the confidence to
                perform my best in JEE Advanced.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-base md:text-lg">
                  Aditya Verma
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  AIR 3 - JEE Advance 2025
                </p>
              </div>
            </div>
          </article>
        </div>

        <button
          onClick={scrollRight}
          aria-label="next"
          className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 z-20"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </button>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default RealStories;
