import React from "react";
import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="relative bg-[#103D34] text-white rounded-3xl overflow-hidden flex flex-col items-center justify-center px-6 py-12 md:py-20 h-[348px] md:h-auto m-6 md:m-12">
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

        <div className="absolute bottom-3 left-8 w-16 sm:w-24 md:w-32">
          <Image
            src="/image/arrow2.svg"
            alt="Background Pattern Bottom Left"
            width={130}
            height={127}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="absolute bottom-3 right-8 w-16 sm:w-24 md:w-28">
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

      <div className="relative text-center z-10 max-w-2xl w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          Subscribe to our newsletter
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mb-6">
          Our Counsellors will help you with your queries.
        </p>

        <form className="flex sm:flex-row items-center justify-center gap-3 sm:gap-0 mx-auto max-w-xl bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Email Address"
            className="grow px-6 py-3 text-gray-700 text-sm sm:text-base outline-none rounded-full sm:rounded-l-full sm:rounded-r-none w-full"
          />
          <button
            type="submit"
            className="bg-[#B9F3E4] text-[#103D34] font-medium px-8 py-2 mr-1 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;  