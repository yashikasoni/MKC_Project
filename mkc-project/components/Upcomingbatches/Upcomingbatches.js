import React from "react";

const UpcomingBatches = ({ activeTab = "All Batches" }) => {
  const courses = [
    {
      label: "1 YEAR BATCH",
      title: "NDA+JEE Classroom 1 Year Course",
      for: "For NDA 2026",
      start: "Starts on 6 Apr, 2025",
      end: "Ends on 30 Jun, 2026",
      price: "₹50,000",
      oldPrice: "₹100,000",
      discount: "50% Off",
      duration: "1 Year",
    },
    {
      label: "6 MONTHS BATCH",
      title: "NDA Classroom 6 Months Course",
      for: "For NDA 2026",
      start: "Starts on 6 Apr, 2025",
      end: "Ends on 30 Jun, 2026",
      price: "₹50,000",
      oldPrice: "₹100,000",
      discount: "50% Off",
      duration: "6 Months",
    },
    {
      label: "3 MONTHS BATCH",
      title: "NDA Classroom 3 Months Course",
      for: "For NDA 2026",
      start: "Starts on 6 Apr, 2025",
      end: "Ends on 30 Jun, 2026",
      price: "₹50,000",
      oldPrice: "₹100,000",
      discount: "50% Off",
      duration: "3 Months",
    },
  ];

  const filteredCourses =
    activeTab === "All Batches"
      ? courses
      : courses.filter((c) => c.duration === activeTab.replace(" Course", ""));

  return (
    <div className="bg-white w-full px-8 py-12 md:px-20 md:py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Batches</h1>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-bm,,,,,,, border-gray-300 mb-10">
        {["All Batches", "6 Months Course", "3 Months Course"].map((tab) => (
          <div
            key={tab}
            className={`pb-3 text-base font-semibold ${
              activeTab === tab
                ? "text-black border-b-4 border-green-400 bg-green-5.0"
                : "text-gray-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Our Online Courses</h2>
        <p className="text-gray-500 text-sm mt-1">
          Your One Stop Destination For Success!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative">
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                {course.label}
              </div>
              <div className="h-44 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                Image Placeholder
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between h-80">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.for}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📅 {course.start}</span>
                  <span>•</span>
                  <span>{course.end}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-green-700 text-xl font-bold">{course.price}</span>
                    <span className="line-through text-gray-400 text-sm ml-2">
                      {course.oldPrice}
                    </span>
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-lg">
                    {course.discount}
                  </div>
                </div>

                <button className="mt-5 w-full bg-green-900 text-white py-2 rounded-md font-medium transition"> 
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBatches;
