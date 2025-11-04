"use client";
import { useState } from "react";
import Image from "next/image";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded'; 
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function MkcNews() {
  const newsData = [
    {
      id: 1,
      tag: "SSC 2026",
      date: "07-07-2025",
      title: "SSC CGL vs CHSL: Which One Should You Choose?",
      author: "Ankit Verma",
      views: "100",
      time: "3.4 Mins",
      image:
        "/image/Image (4).svg",
    },
    {
      id: 2,
      tag: "SSC 2026",
      date: "07-07-2025",
      title: "SSC CGL vs CHSL: Which One Should You Choose?",
      author: "Ankit Verma",
      views: "100",
      time: "3.4 Mins",
      image:
        "/image/Image (4).svg",
    },
    {
      id: 3,
      tag: "SSC 2026",
      date: "07-07-2025",
      title: "SSC CGL vs CHSL: Which One Should You Choose?",
      author: "Ankit Verma",
      views: "100",
      time: "3.4 Mins",
      image:
        "/image/Image (4).svg",
    },
    {
      id: 4,
      tag: "SSC 2026",
      date: "07-07-2025",
      title: "SSC CGL vs CHSL: Which One Should You Choose?",
      author: "Ankit Verma",
      views: "100",
      time: "3.4 Mins",
      image:
        "/image/Image (4).svg",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < newsData.length - 1) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">MKC News</h2>
          <p className="text-gray-500 text-sm">
            Latest News That Keeps You One Step Ahead
          </p>
        </div>
        <button className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-lg">
          Read All <ChevronRightIcon fontSize="small" />
        </button>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center sm:hidden z-10"
        >
         <ArrowCircleLeftRoundedIcon/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center sm:hidden z-10"
        >
         <ArrowCircleRightRoundedIcon/> 
        </button>

        <div
          className="flex transition-transform duration-500 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {newsData.map((news) => (
            <div
              key={news.id}
              className="min-w-full sm:min-w-0 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-md">
                  Latest News
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
                    {news.tag}
                  </span>
                  <span className="text-gray-500">{news.date}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  {news.title}
                </h4>
                <div className="justify-between text-sm text-gray-500 border-t pt-2">
                  <span><AccountCircleOutlinedIcon/>{news.author}</span>
                  <div className="flex gap-2">
                    <span><RemoveRedEyeOutlinedIcon/>{news.views}</span>
                    <span><AccessTimeOutlinedIcon/> {news.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
