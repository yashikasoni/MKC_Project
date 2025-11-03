import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

const CourseSubject = () => {
  const data = [
    "Exam Overview",
    "Answer Key",
    "Study Plan and Analysis",
    "Defence/Current Affairs",
    "Mathematics",
    "English",
    "Static GK",
    "History",
    "Polity",
    "Economics",
  ];

  return (
    <div className="bg-blue-100 text-black flex justify-center items-center p-10">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-6 space-y-2">
          <h1 className="text-2xl font-bold">Course Subjects</h1>
          <p className="text-gray-600">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        <div className="shadow-md rounded-md overflow-hidden">
          <table className="w-full border-collapse text-sm" role="table">
            <thead>
              <tr className="bg-[#003D36] text-white">
                <th className="text-left px-5 py-3 font-semibold w-1/3">
                  CDS Exam Course
                </th>
                <th className="text-center px-5 py-3 font-semibold w-1/3">
                  Lorem Ipsum
                </th>
                <th className="text-center px-5 py-3 font-semibold w-1/3">
                  Lorem Ipsum
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-[#CDEFE1] odd:bg-white even:bg-[#E9FAF4]"
                >
                  {/* Left green column */}
                  <td className="px-5 py-3 bg-[#315C55] text-white">
                    <div className="flex items-center gap-2">
                      <StarIcon className="text-white text-sm" />
                      <span className="font-medium">{item}</span>
                    </div>
                  </td>

                  <td className="px-5 py-3 text-center text-gray-800">
                    34 Lesson
                  </td>

                  <td className="px-5 py-3 text-center text-[#009879] text-lg">
                    <CheckCircleIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseSubject;
