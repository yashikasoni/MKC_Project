import React from "react";
import Image from "next/image";

const NdaFoundation = () => {
  return (
    <>
      <section className="bg-blue-50 text-gray-900 py-12 px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-center gap-3 text-3xl md:text-4xl font-bold">
              <h2 className="text-green-600">NDA</h2>
              <h2>Foundation</h2>
            </div>
            <p className="text-gray-700 text-lg md:text-xl">
              National Defence Academy (NDA) is a competitive <br /> defence
              exam organized for 12th pass students by UPSC.
            </p>
            <button className="bg-[#003E33] bg-linear-to-r from-[#06836D] text-white font-semibold px-6 py-2 rounded-md transition">
              Join
            </button>
            <div className="mt-6">
              <Image
                src="/image/Banner-IMG.png"
                alt="NDA Foundation"
                width={500}
                height={400}
                className="w-full max-w-md object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <div className="bg-linear-to-r from-[#06836D] to-[#003E33] text-white text-center py-5 px-4">
              <h3 className="text-xl font-semibold mb-1">
                Request a Callback!
              </h3>
              <p className="text-sm">Our team would love to hear from you</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="relative mb-5">
                <hr className="border-t border-gray-300" />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-white px-3 text-sm sm:text-sm md:text-base text-gray-600 whitespace-nowrap">
                  Select the Session Mode
                </span>
              </div>

              <div className="flex justify-center gap-2 mb-5">
                <button className="w-1/2 py-2 rounded-md bg-green-900 text-white font-semibold">
                  ONLINE
                </button>
                <button className="w-1/2 py-2 rounded-md border border-gray-300 text-gray-700 font-semibold">
                  OFFLINE
                </button>
              </div>
              <form className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none">
                  <option>State</option>
                  <option>Rajasthan</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                </select>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none">
                  <option>Category</option>
                  <option>ST</option>
                  <option>SC</option>
                  <option>OBC</option>
                  <option>General</option>
                </select>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none">
                  <option>Course</option>
                  <option>JEE</option>
                  <option>NEET</option>
                  <option>Government</option>
                </select>

                <button
                  type="submit"
                  className="w-full mt-2 bg-linear-to-r from-[#06836D] to-[#003E33] text-white py-2 rounded-md font-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NdaFoundation;
