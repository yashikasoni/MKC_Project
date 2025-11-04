import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const MkcApp = () => {
  const advantages = [
    "Expert Faculty",
    "Doubt Clearing Session",
    "Daily Assessment",
    "Unit Test & Mock test",
    "Live Classes",
    "Medical Training",
    "Hostel Facility",
  ];

  return (
    <div className="bg-white p-8 sm:p-10 lg:p-16 flex justify-center items-center">
      <div className="w-full max-w-6xl rounded-xl bg-[#E0F7F1] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 shadow-md">
        
        {/* LEFT CONTENT */}
        <div className="max-w-lg text-left w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 leading-snug text-gray-900"> 
            Ace Every Exam Download the
            <span className="text-[#05BF80]"> MKC App </span>today!
          </h1>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Advantages of our MKC online learning
            </h2>

            <ul className="space-y-2">
              {advantages.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-[#05AE74] text-lg">
                    <CheckCircleIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* APP STORE IMAGES */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 justify-start mt-6">
            <Image
              src="/image/Link (2).svg"
              alt="Google Play"
              width={150}
              height={140}
              className="w-full sm:w-auto"
            />
            <Image
              src="/image/Link (3).svg"
              alt="App Store"
              width={140}
              height={140}
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src="/image/Frame 2121454929.svg"
            alt="app picture"
            width={500}
            height={400}
            className="w-full h-auto sm:w-[60%] md:w-[400px] lg:w-[500px] sm:h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MkcApp;
