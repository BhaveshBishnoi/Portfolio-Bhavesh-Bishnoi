"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaStar,
  FaBook,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  logo: string;
  grade: string;
  type: "masters" | "bachelors" | "certification";
  description: string;
  keySubjects: string[];
  achievements: string[];
  skills: string[];
  website?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  logo: string;
  skills: string[];
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      id: "ditu",
      institution: "Dehradun Institute of Technology",
      degree: "Master of Computer Applications",
      field: "Computer Engineering",
      duration: "2022 - 2024",
      location: "Dehradun, India",
      logo: "/education/ditu.jpg",
      grade: "7.4 CGPA",
      type: "masters",
      description:
        "Advanced studies in computer science with focus on modern software development, algorithms, and system design. Specialized in full-stack web development and database management.",
      keySubjects: [
        "Advanced Data Structures & Algorithms",
        "Full Stack Web Development",
        "Database Management Systems",
        "Software Engineering & Design Patterns",
        "Computer Networks & Security",
        "Machine Learning Fundamentals",
        "Mobile Application Development",
        "Cloud Computing & DevOps",
      ],
      achievements: [
        "Graduated with First Class with Distinction",
        "Led final year project on E-commerce Platform using MERN Stack",
        "Participated in multiple hackathons and coding competitions",
        "Mentored junior students in programming concepts",
      ],
      skills: ["MERN Stack", "Java", "Python", "MySQL", "System Design"],
      website: "https://ditu.ac.in",
    },
    {
      id: "mgsu",
      institution: "Maharaja Ganga Singh University",
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      duration: "2019 - 2022",
      location: "Bikaner, India",
      logo: "/education/mgsu.jpg",
      grade: "66%",
      type: "bachelors",
      description:
        "Foundation studies in computer science covering programming fundamentals, web technologies, and software development principles.",
      keySubjects: [
        "Programming Fundamentals (C/C++)",
        "Web Development (HTML, CSS, JavaScript)",
        "Database Systems (MySQL)",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Mathematics & Statistics",
        "Business Communication",
      ],
      achievements: [
        "Consistently maintained above-average performance",
        "Completed multiple web development projects",
        "Active member of computer science society",
        "Organized technical workshops for fellow students",
      ],
      skills: [
        "C/C++",
        "Web Development",
        "MySQL",
        "Networking",
        "Problem Solving",
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2024",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      skills: ["Analytics", "SEO", "Digital Marketing"],
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      skills: ["Cloud Computing", "AWS Services", "DevOps"],
    },
    {
      name: "Advanced React Development",
      issuer: "Udemy",
      date: "2023",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      skills: ["React Hooks", "Context API", "Performance Optimization"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic foundation and continuous learning journey that shapes
            my technical expertise and professional growth in the ever-evolving
            tech landscape.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <FaGraduationCap className="text-blue-400" />
            Academic Qualifications
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Education Card */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20 flex-shrink-0">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                            {edu.institution}
                          </h4>
                          <p className="text-blue-400 font-semibold text-lg">
                            {edu.degree}
                          </p>
                          <p className="text-gray-300">{edu.field}</p>
                        </div>
                        {edu.website && (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCalendarAlt className="text-blue-400" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaMapMarkerAlt className="text-blue-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaStar className="text-yellow-400" />
                          <span className="font-semibold text-yellow-400">
                            {edu.grade}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              edu.type === "masters"
                                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {edu.type === "masters"
                              ? "Master's Degree"
                              : "Bachelor's Degree"}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <FaAward className="text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-300 text-sm"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Gained */}
                      <div>
                        <h5 className="text-white font-semibold mb-3">
                          Skills Gained
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subjects List */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                      <h5 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <FaBook className="text-blue-400" />
                        Key Subjects
                      </h5>
                      <div className="grid grid-cols-1 gap-3">
                        {edu.keySubjects.map((subject, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">
                              {subject}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <FaCertificate className="text-green-400" />
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-4">{cert.date}</div>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Mindset
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My educational journey doesn&nbsp;t stop with formal degrees. I
              believe in lifelong learning and staying current with the rapidly
              evolving tech landscape. Through online courses, certifications,
              and hands-on projects, I continuously expand my knowledge and
              skills.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Stay Updated",
                  description:
                    "Following latest tech trends and best practices",
                  icon: "📚",
                },
                {
                  title: "Practical Learning",
                  description: "Building real projects to apply new concepts",
                  icon: "💻",
                },
                {
                  title: "Share Knowledge",
                  description: "Teaching others through blogs and mentoring",
                  icon: "🤝",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
