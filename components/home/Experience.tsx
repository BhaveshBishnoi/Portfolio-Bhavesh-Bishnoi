"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCode,
  FaUsers,
  FaRocket,
  FaAward,
} from "react-icons/fa";

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "freelance" | "employment" | "project";
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  website?: string;
  featured?: boolean;
}

interface Metric {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<string>("coderxpoint");

  const experiences: Experience[] = [
    {
      id: "coderxpoint",
      role: "Full Stack Developer",
      company: "CoderXpoint Pvt. Ltd.",
      location: "Remote",
      duration: "May 2024 - Present",
      type: "employment",
      description:
        "Developing responsive, high-performance web applications using modern technologies with focus on AI integration and automation.",
      responsibilities: [
        "Developed responsive, high-performance web applications using React.js and TypeScript for frontend with Node.js APIs for backend services",
        "Integrated AI features using OpenAI API and LangChain for intelligent user interactions and automated customer support",
        "Implemented n8n automation workflows for business process optimization",
        "Enhanced user experience through AI-powered features and intelligent interactions",
        "Collaborated with cross-functional teams to deliver scalable solutions",
      ],
      achievements: [
        "Reduced manual tasks by 60% through automation workflows",
        "Improved operational efficiency with intelligent AI integrations",
        "Delivered high-performance applications with optimized user experience",
        "Successfully integrated advanced AI features for customer support",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "OpenAI API",
        "LangChain",
        "n8n",
        "Express.js",
      ],
      featured: true,
    },
    {
      id: "blogger",
      role: "Part-Time Technology Blogger",
      company: "BhaveshBishnoi.com",
      location: "Remote",
      duration: "2020 - Present",
      type: "project",
      description:
        "Creating and sharing technology content, tutorials, and insights on web development and programming.",
      responsibilities: [
        "Write technical articles and tutorials on web development technologies",
        "Share insights on modern development practices and tools",
        "Create educational content for aspiring developers",
        "Document project experiences and learnings",
        "Engage with the developer community through blog posts",
      ],
      achievements: [
        "Published articles on full-stack development and AI integration",
        "Shared knowledge on React, Next.js, and Node.js best practices",
        "Documented real-world project experiences and solutions",
        "Built a platform for sharing technical insights with developers",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "AI/ML",
        "Web Development",
        "Technical Writing",
      ],
      website: "https://bhaveshbishnoi.com",
      featured: true,
    },
  ];



  const selectedExp = experiences.find((exp) => exp.id === selectedExperience);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(100,100,100,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey as a developer and entrepreneur, building solutions that
            make a difference. From freelance projects to founding my own tech
            platform.
          </p>
        </motion.div>



        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaBriefcase className="text-gray-300" />
              Career Timeline
            </h3>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <motion.button
                  key={exp.id}
                  variants={itemVariants}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${selectedExperience === exp.id
                    ? "bg-gray-800/50 border border-gray-700/50 shadow-lg"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${selectedExperience === exp.id
                          ? "text-gray-300"
                          : "text-white"
                          }`}
                      >
                        {exp.role}
                      </h4>
                      <p className="text-gray-300 text-sm">{exp.company}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <FaCalendarAlt />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    {exp.featured && (
                      <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            className="lg:col-span-2"
            key={selectedExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedExp && (
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedExp.role}
                      </h3>
                      <p className="text-xl text-gray-300 font-semibold">
                        {selectedExp.company}
                      </p>
                    </div>
                    {selectedExp.website && (
                      <a
                        href={selectedExp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span className="hidden sm:inline">Visit Site</span>
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{selectedExp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{selectedExp.duration}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${selectedExp.type === "freelance"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : selectedExp.type === "employment"
                          ? "bg-gray-700/50 text-gray-300 border border-gray-600/50"
                          : "bg-gray-600/50 text-gray-400 border border-gray-500/50"
                        }`}
                    >
                      {selectedExp.type === "freelance"
                        ? "Independent"
                        : selectedExp.type === "employment"
                          ? "Employment"
                          : "Project"}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {selectedExp.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedExp.responsibilities.map(
                      (responsibility, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-gray-400 mt-1">•</span>
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedExp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <FaAward className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
