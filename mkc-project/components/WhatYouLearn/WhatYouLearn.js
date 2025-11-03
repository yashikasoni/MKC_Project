import React from 'react'
import Image from 'next/image'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const WhatYouLearn = () => {
  return ( 
<div className="bg-[#f4ecff] max-w-6xl w-full mx-auto my-16 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-10  rounded-2xl">

      {/* Left Content */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          What You’ll Learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {Array(6)
            .fill("Lorem Ipsum Lorem")
            .map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-[#05AE74] text-xl">
                  <CheckCircleIcon />
                </span>
                <p className="text-gray-800">{text}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Right Illustration */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <Image
          src="/image/image 3851.svg"
          alt="What You Learn"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default WhatYouLearn 