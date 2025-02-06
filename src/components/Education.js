'use client';

import React from 'react';
import Image from 'next/image';

const Education = () => {
  const education = [
    {
      institution: "Dehradun Institute of Technology",
      degree: "Masters of Computer Applications",
      field: "Computer Engineering",
      duration: "2022 - 2024",
      location: "Dehradun, India",
      logo: "/education/ditu.jpg",
      grade: "7.4 CGPA",
      highlights: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering"
      ]
    },
    {
      institution: "Maharaja Ganga Singh University",
      degree: "Bachelor of Arts",
      field: "Computer Applications",
      duration: "2019 - 2022",
      location: "Bikaner, India",
      logo: "/education/mgsu.jpg",
      grade: "66%",
      highlights: [
        "Programming Fundamentals",
        "System Analysis & Design",
        "Computer Networks",
        "Operating Systems"
      ]
    }
  ];

  return (
    <section id="education" className="relative py-16 px-4 min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden bg-gray-900">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-indigo-900/30 to-purple-900/30 blur-3xl transform rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 blur-3xl transform -rotate-12 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Education</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          My academic journey and qualifications that have shaped my technical foundation
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-gray-800/40 rounded-2xl border border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/20">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-300 font-medium">{edu.degree}</p>
                  <p className="text-gray-400">{edu.field}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{edu.duration}</span>
                  <span className="text-blue-400 font-medium">{edu.grade}</span>
                </div>
                <p className="text-gray-400 text-sm">{edu.location}</p>
              </div>

              <div className="mt-4">
                <h4 className="text-white font-medium mb-2">Key Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
