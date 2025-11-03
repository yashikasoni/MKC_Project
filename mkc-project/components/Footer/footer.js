import React from "react";
import Image from "next/image";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const Footer = () => {
  return (
    <>
      <div className="bg-[#232323] text-white py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-semibold">Download Our App</h1>
          <p className="italic text-gray-300">Let’s begin your Defence Journey!</p>
        </div>
        <div className="flex gap-3">
          <Image
            src="/image/Link.svg"
            alt="Google Play"
            width={150}
            height={50}
            className="cursor-pointer"
          /> 
          <Image
            src="/image/Link (1).svg"
            alt="App Store"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="bg-[#004236] text-white px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div> 
          <div className="flex items-center gap-2 mb-4">
            <Image src="/image/Logo.svg" alt="mkc-logo" width={60} height={60} />
            <h2 className="text-lg font-semibold leading-tight">
              MAJOR KALSHI <br /> CLASSES
            </h2>
          </div>
          <h3 className="text-lg font-bold mb-2">India's No.1 Institute</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Major Kalshi Classes Pvt. Ltd is well-known and trusted defence coaching in India.
            For 18 years we have been providing quality education with 500+ experts.
            We are known for our highest selection in the defence sector.
            Our main branch is located in Prayagraj (Allahabad).
            MKC is committed to providing holistic training & quality education.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Class Room</li>
            <li>Online</li>
            <li>MKC Publication</li>
            <li>Test Series</li>
            <li>Mock Test</li>
            <li>Scholarship Test</li>
          </ul>
        </div> 
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Location</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms Conditions</li>
            <li>Site Map</li>
          </ul>
        </div> 
        <div>
          <h3 className="text-lg font-semibold mb-4 ">< AutoAwesomeIcon/> Get In Touch</h3>
          <div className="w-full h-32 mb-3 rounded overflow-hidden">
            <Image
              src="/image/image 1532.svg"
              alt="MKC Map Location"
              width={300}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>support@majorkalshiclasses.com</li>
            <li>
              105/244, Shapath Building, Tagore Town, Prayagraj,
              Uttar Pradesh - 211002
            </li>
            <li>+91 9696330033</li>
            <li>+91 9696220022</li> 
          </ul>
        </div>
      </div>
      <div className="bg-[#004236] border-t border-gray-500 py-4 text-center text-sm text-gray-300">
        © 2025 MKC. All rights reserved
      </div>
    </>
  );
};
export default Footer; 