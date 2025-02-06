'use client';

import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experienceDetails = [
    {
      role: "Technology Blog Owner, Writer",
      company: "HindiCreator.com",
      duration: "June 2020 – Present",
      keySkills: [
        "Owned and managed a popular Hindi technology blog publishing articles on technology",
        "Consistently created engaging, informative content catering to a wide Indian audience.",
      ],
    },
    {
      role: "Freelance Web Developer, SEO",
      duration: "Various",
      keySkills: [
        "Designed and developed WordPress websites, landing pages using Frontend Technologies.",
        "Collaborated closely with clients to understand requirements and deliver high-quality solutions.",
        "Managed multiple freelancing projects simultaneously while ensuring timely deliveries.",
      ],
    },
    {
      role: "Full Stack Web Developer",
      company: "ACS Networks and Technologies",
      duration: "March 2024 – May 2024",
      keySkills: [
        "Developed custom WordPress themes/plugins for acstechnologies.net and acstrainingacademy.com.",
        "Applied responsive design techniques for enhanced user engagement.",
        "Collaborated with teams to resolve issues and optimize site performance.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-16 px-4 min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden bg-gray-900">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 blur-3xl transform rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-900/30 to-cyan-900/30 blur-3xl transform -rotate-12 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Experience</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          My professional journey and key achievements in the tech industry
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-900 to-purple-900"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceDetails.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-900 border-4 border-gray-900"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="backdrop-blur-xl bg-gray-800/40 rounded-2xl border border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-center gap-3 mb-4">
                      <FaBriefcase className="text-blue-400 text-xl" />
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                    </div>
                    
                    {exp.company && (
                      <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                    )}
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

                    <ul className="space-y-2">
                      {exp.keySkills.map((skill, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
