import React from "react";
import Image from "next/image";
 
const HelpSection= () => {
  return (
<section className="relative h-auto md:h-[394px] bg-linear-to-l from-[#003E33] to-[#06836D] text-white rounded-3xl overflow-hidden m-6 sm:m-8 md:m-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-48">
          <Image
            src="/image/Group 1686551462.svg"
            alt="Background Pattern Top Left"
            width={200}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-48">
          <Image
            src="/image/Group 1686551463.svg"
            alt="Background Pattern Top Right"
            width={200}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
    
        <div className="absolute bottom-0 left-4 translate-x-[-10%] translate-y-[10%] w-20 sm:w-24 md:w-32">
          <Image
            src="/image/arrow2.svg"
            alt="Background Pattern Bottom Left"
            width={130}
            height={127}
            className="w-full h-auto"
            priority
          />
        </div>
 
        <div className="absolute bottom-0 right-5 translate-x-[10%] translate-y-[10%] w-20 sm:w-28 md:w-30">
          <Image
            src="/image/bulb.svg"
            alt="Background Pattern Bottom Right"
            width={110}
            height={97}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
 
      <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
 
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-16 gap-8">
        <div className="max-w-xl text-center md:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Always here to help you!
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            If you need any assistance, feel free to ask our academic
            counselling to patiently listen and explain everything that you want
            to know.
          </p>
          <button className="mt-4 bg-white text-green-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-100 transition">
            Speak to an Expert
          </button>
        </div>
 
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <Image
            src="/image/Happy to Help.svg"
            alt="Expert"
            width={250}
            height={314}
            className="rounded-full object-cover w-48 sm:w-56 md:w-[250px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};
 
export default HelpSection;    