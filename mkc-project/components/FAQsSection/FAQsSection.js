"use client";

import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
                                                                          
const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
    {
      question: "Can school students prepare for NDA?",
      answer:
        "Students can enroll to PW’s NDA Online Coaching After 11th.Dedicated NDA Online Courses after 11th are provided to the students to begin exam preparation.",
    },
    {
      question: "Do MKC provides recorded NDA Live Classes?",
      answer:
        "Yes, MKC provides recorded NDA Live Classes that students can access anytime for revision.",
    },
    {
      question: "What is the syllabus for NDA 2026?",
      answer:
        "The NDA 2026 syllabus includes Mathematics and General Ability Test (GAT) — covering English, Physics, Chemistry, General Science, History, Geography, and Current Affairs.",
    },
    {
      question:
        "How many questions will NDA 2026 have and what is the marking scheme?",
      answer:
        "The NDA exam consists of two papers — Mathematics (120 questions, 300 marks) and GAT (150 questions, 600 marks). Each wrong answer carries a 1/3 negative mark.",
    },
    {
      question: "What is the eligibility criteria for NDA 2026?",
      answer:
        "Candidates must be unmarried males/females aged between 16.5 and 19.5 years and must have passed 10+2 or equivalent.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black mb-8">
        NDA Preparation FAQs
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="rounded-md overflow-hidden">
              <div
                className={`flex items-center justify-between px-4 py-4 border border-green-200 rounded-md bg-green-50`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex-1 text-left focus:outline-none"
                >
                  <span className="block text-sm md:text-base font-medium text-gray-900">
                    {faq.question}
                  </span>
                </button>

                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex-none ml-3"
                >
                  {isOpen ? (
                    <DisabledByDefaultIcon
                      className="text-green-800"
                      style={{ fontSize: 30 }}
                    />
                  ) : (
                    <AddBoxIcon
                      className="text-green-800"
                      style={{ fontSize: 30 }}
                    />
                  )}
                </button>
               </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="bg-white border border-green-200 rounded-b-md px-4 pt-4 pb-5">
                  <p className="text-gray-700 text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQsSection; 
