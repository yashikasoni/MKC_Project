import React from "react";
import Image from "next/image";
import YouTubeIcon from '@mui/icons-material/YouTube';

const MkcYoutube = () => {
  const channels = [
    {
      id: 1,
      logo: "/image/Ellipse 8 (1).svg", 
      name: "MKC Classes",
      subs: "1.23 M Subscribed",
      bg: "from-pink-100 to-pink-50",
    },
    {
      id: 2,
      logo: "/image/Ellipse 7.svg",
      name: "MKC Classes",
      subs: "1.23 M Subscribed",
      bg: "from-blue-100 to-blue-50",
    },
    {
      id: 3,
      logo: "/image/Ellipse 6.svg",
      name: "MKC Classes",
      subs: "1.23 M Subscribed",
      bg: "from-red-100 to-red-50",
    },
    ];
    

  return (
    <section className="w-full py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              MKC Youtube Channel
            </h2>
            <p className="text-gray-600 mt-1">
              Convert your online learning into success and get your uniform.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-5 py-2 rounded-md text-sm font-semibold text-[#003E33] bg-[#E6F9F2]">
            View All Channels → 
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch) => (
            <div
              key={ch.id}
              className={`rounded-2xl bg-linear-to-br ${ch.bg} p-6 flex flex-col items-center justify-center`}
            > 
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-10 h-7 bg-red-600  rounded-md flex items-center justify-center">
                 <YouTubeIcon/> 
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src={ch.logo}
                    alt="channel logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {ch.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{ch.subs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MkcYoutube; 