import React from "react";
import Image from "next/image";

const Moreinnda = () => {
  return (
    <div className="text-black px-20 py-8 my-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        More in NDA
      </h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-4 bg-red-100 p-6 rounded-2xl border border-red-300">
          <div className="w-20 h-20 shrink-0"> 
            <Image
              src="/image/Frame 7.png"
              alt="Mock Test"
              width={96}
              height={96}
              className="object-contain w-full h-full"
            />  
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">Mock Test</h2>
            <p className="text-gray-700 text-sm">
              Watch our online coaching classes on our Mobile App
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-blue-100 p-3 rounded-2xl border border-blue-300 ">
          <div className="w-20 h-20 shrink-0">
            <Image
              src="/image/Frame 7 (1).png"
              alt="News"
              width={96}
              height={96}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">News</h2>
            <p className="text-gray-700 text-sm">
              Watch our online coaching classes on our Mobile App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moreinnda;  
