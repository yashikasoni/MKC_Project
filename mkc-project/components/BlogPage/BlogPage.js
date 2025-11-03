"use client";
import React, { useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const blogs = [
  {
    id: 1,
    title: "Top 8 Best Defence Coachings in India 2025",
    category: "SSC 2026",
    date: "07-07-2025",
    author: "Ankit Verma",
    views: 100,
    readTime: "3.4 Mins",
    image: "/image/Image (1).svg",
  },
  {
    id: 2,
    title: "IIT-JEE Foundation - How to Prepare in Last Minute?",
    category: "SSC 2026",
    date: "07-07-2025",
    author: "Ankit Verma",
    views: 100,
    readTime: "3.4 Mins",
    image: "/image/Image (2).svg",
  },
  {
    id: 3,
    title: "SSC CGL vs CHSL: Which One Should You Choose?",
    category: "SSC 2026",
    date: "07-07-2025",
    author: "Ankit Verma",
    views: 100,
    readTime: "3.4 Mins",
    image: "/image/Image (3).svg",
  },
  {
    id: 4,
    title: "Top 8 Best Defence Coachings in India 2025",
    category: "SSC 2026",
    date: "07-07-2025",
    author: "Ankit Verma",
    views: 100,
    readTime: "3.4 Mins",
    image: "/image/Image (1).svg",
  },
];

const BlogPage = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="text-black px-6 md:px-20 py-10 relative"> 
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
        <div className="flex-1">
          <h1 className="font-semibold text-2xl md:text-3xl">Blog</h1>
          <p className="text-[#424242] text-sm md:text-base">
            Keep you updated / Let’s go through the blog that keeps you updated / Read what we write
          </p>
        </div>
        <div className="flex justify-start md:justify-end w-full md:w-auto">
          <button className="border border-[#003E33]/10 bg-[#E6F9F2] h-10 px-5 text-[#003E33] rounded-md flex items-center justify-center gap-1">
            Read All <ChevronRightIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="shadow-xl rounded-xl overflow-hidden bg-white hover:shadow-2xl"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="w-full h-[180px] object-cover"
            />  
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <button className="bg-[#E6F9F2] px-3 py-1 rounded text-[#003E33] text-sm">
                  {blog.category}
                </button>
                <span className="text-[#333] text-sm">{blog.date}</span>
              </div>
              <h2 className="font-semibold text-base mb-2">{blog.title}</h2>
              <p className="font-extralight text-[#525252] flex items-center gap-1 text-sm mb-2">
                <AccountCircleOutlinedIcon fontSize="small" /> {blog.author}
              </p>
              <div className="flex text-[#525252] gap-4 text-sm">
                <p className="flex items-center gap-1">
                  <RemoveRedEyeOutlinedIcon fontSize="small" /> {blog.views}
                </p>
                <p className="flex items-center gap-1">
                  <AccessTimeOutlinedIcon fontSize="small" /> {blog.readTime}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="md:hidden relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="min-w-full snap-center flex justify-center px-3 shrink-0"
            > 
              <article className="w-[90%] shadow-xl rounded-xl overflow-hidden bg-white">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <button className="bg-[#E6F9F2] px-3 py-1 rounded text-[#003E33] text-sm">
                      {blog.category}
                    </button>
                    <span className="text-[#333] text-sm">{blog.date}</span>
                  </div>
                  <h2 className="font-semibold text-base mb-2">{blog.title}</h2>
                  <p className="font-extralight text-[#525252] flex items-center gap-1 text-sm mb-2">
                    <AccountCircleOutlinedIcon fontSize="small" /> {blog.author}
                  </p>
                  <div className="flex text-[#525252] gap-4 text-sm">
                    <p className="flex items-center gap-1">
                      <RemoveRedEyeOutlinedIcon fontSize="small" /> {blog.views}
                    </p>
                    <p className="flex items-center gap-1">
                      <AccessTimeOutlinedIcon fontSize="small" /> {blog.readTime}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
};

export default BlogPage;
