"use client";

import React, { useRef } from "react";
import Image from "next/image";

const AppreciationMkc = () => {
  const sliderRef = useRef(null);

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const cards = [
    {
      id: 1,
      image: "/image/Exploring the Wild.svg",
      title: "Our Selected Candidates",
      desc: "An unforgettable journey through nature’s untouched beauty and the thrill of adventure.",
    },
    {
      id: 2,
      image: "/image/Exploring the Wild.svg",
      title: "Our Selected Candidates",
      desc: "An unforgettable journey through nature’s untouched beauty and the thrill of adventure.",
    },
    {
      id: 3,
      image: "/image/Exploring the Wild.svg",
      title: "Our Selected Candidates",
      desc: "An unforgettable journey through nature’s untouched beauty and the thrill of adventure.",
    },
  ];

  return (
    <section className="bg-[#E8EFFB] py-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-[#1E1E1E]">
          Appreciation of MKC
        </h2>
        <p className="text-[#424242] mt-1">
          Let’s go through the review given by the student
        </p>
      </div>

      <div className="relative flex justify-center">
        <div
          ref={sliderRef}
          className="flex justify-center gap-8 overflow-x-auto scroll-smooth px-6 md:px-10 scrollbar-hide"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-md  w-[260px] border border-[#E3E3E3]"
            >
              <div className="relative w-full h-[150px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
 
              <div className="p-5 text-center">
                <h3 className="font-semibold text-base text-[#1E1E1E]">
                  {card.title}
                </h3>
                <p className="text-[#5F5F5F] text-sm mt-2 leading-snug">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-10 top-1/2 -translate-y-1/2 bg-white shadow-md border border-[#E3E3E3] w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-lg text-gray-700">{">"}</span>
        </button>
      </div>
    </section>
  );
};

export default AppreciationMkc;  