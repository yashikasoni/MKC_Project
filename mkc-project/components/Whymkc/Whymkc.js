import React from "react";
import Image from "next/image";

const Whymkc = () => {
  return (
    <section className="bg-[#E6F6EE] py-16 px-6 md:px-12 lg:px-20 text-black">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl md:text-4xl mb-2">Why MKC?</h1>
        <p className="text-[#424242] text-lg md:text-xl">
          Your One Stop Destination For Success!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        <div className="hidden lg:block w-full max-w-md overflow-hidden shadow-lg rounded-2xl">
          <Image
            src="/image/Frame 2121454101.png"
            alt="Why MKC"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="lg:hidden w-[250px] sm:w-[300px] mx-auto p-3 relative">
          <Image
            src="/image/Frame 2121454101 (1).png"
            alt="MKC YouTube Video"
            width={300}
            height={550}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col space-y-10 max-w-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src="/image/Frame 7.png"
                  alt="Mock Test"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2 text-gray-900">
                Mock Test
              </h2>
              <p className="text-[#525252] text-sm leading-relaxed">
                At UniAthena, you are in charge of your learning! You decide
                your pace of learning based on your convenience. The learning
                structure is modular — take one module at a time and stack up
                credits to your Dream Qualification.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src="/image/Frame 7 (1).png"
                  alt="Medical & Hostel Facility"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2 text-gray-900">
                Medical & Hostel Facility
              </h2>
              <p className="text-[#525252] text-sm leading-relaxed">
                At UniAthena, you are in charge of your learning! You decide
                your pace of learning based on your convenience. The learning
                structure is modular — take one module at a time and stack up
                credits to your Dream Qualification.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src="/image/Frame 7 (1).png"
                  alt="News"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2 text-gray-900">
                News
              </h2>
              <p className="text-[#525252] text-sm leading-relaxed">
                At UniAthena, you are in charge of your learning! You decide
                your pace of learning based on your convenience. The learning
                structure is modular — take one module at a time and stack up
                credits to your Dream Qualification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Whymkc; 
