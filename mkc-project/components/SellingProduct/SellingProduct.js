import React from "react";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
const SellingProduct = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center text-black leading-8 mb-6">
        <h2 className="font-bold text-2xl">Best Selling Products</h2>
        <p className="text-[#424242]">
          In the guidance of experts we offer best selling products./ We sell
          expert trusted Books.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          "SSB Book",
          "Officer Entry",
          "Air Force (X&Y)",
          "Navy(SSR & MR)",
          "Agniveer Army",
          "Paramilitary Force",
          "State Force",
        ].map((item, index) => (
          <button
            key={index}
            className={`${
              index === 0
                ? "bg-[#D9F8F1] text-[#003E33]"
                : "bg-white text-[#424242]"
            } px-5 py-2 rounded-full border border-gray-300 hover:bg-[#D9F8F1] hover:text-[#003E33] transition`}
          >
            {item} 
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 bg-linear-to-b from-[#FFFFFF] to-[#ECF7FF]">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="w-[340px] border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4"
          >
            <div className="relative">
              <Image
                src="/image/Image.svg"
                alt="SSB Interview Books"
                width={320}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-left">
              <h3 className="font-semibold text-lg mb-2 text-black">
                SSB Interview Books
              </h3>
              <ul className="text-sm text-[#424242] space-y-1">
                <li>
                  <span className="text-[#04885B]">
                    <CheckIcon />
                  </span>{" "}
                  SSB all Books
                </li>
                <li>
                  <span className="text-[#04885B]">
                    <CheckIcon /> 
                  </span>{" "} 
                  How to Crack SSB Interview
                </li> 
                <li>
                  <span className="text-[#04885B]">
                    <CheckIcon />
                  </span>
                  Group discussion
                </li>
                <li>
                  <span className="text-[#04885B]">
                    <CheckIcon />
                  </span>
                  Language: English
                </li>
              </ul>
              <button className="w-full mt-4 bg-white border border-gray-300 py-2 rounded-md font-semibold text-[#003E33] hover:bg-[#D9F8F1] transition">
                Explore Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingProduct; 
