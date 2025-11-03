import React from "react";
import Image from "next/image";

const CardsPage = () => {
  const items = [
    {
      title: "Online Courses",
      description: "Master concepts with structured, expert-led online courses",
      img: "/image/LampNotebook.svg.svg",
      bg: "bg-green-100",
      border: "border-green-200",
    },
    {
      title: "Test Series",
      description: "Practice, analyze, and boost your exam readiness",
      img: "/image/research.svg.svg",
      bg: "bg-red-100",
      border: "border-red-200",
    },
    {
      title: "Blogs",
      description: "Read our latest blog and get Tips, trends & insights for Smart Learning",
      img: "/image/notepad.svg.png",
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      title: "Books",
      description: "Curated study material to strengthen your foundation",
      img: "/image/book.svg.png",
      bg: "bg-yellow-100",
      border: "border-yellow-200",
    },
    {
      title: "Videos",
      description: "Engaging visual lessons for better understanding",
      img: "/image/youtubLogo.svg.png",
      bg: "bg-purple-100",
      border: "border-purple-200",
    },
    {
      title: "Success Stories",
      description: "Read real success stories that inspire and motivate you",
      img: "/image/medal.svg.png",
      bg: "bg-orange-100",
      border: "border-orange-200",
    },
  ];
  return (
    <div className="text-black px-4 sm:px-8 md:px-12 lg:px-20 py-8 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 ${item.bg} p-4 sm:p-6 rounded-2xl border ${item.border} min-w-[250px]`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <Image
                src={item.img}
                alt={item.title}
                width={96}
                height={96}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
