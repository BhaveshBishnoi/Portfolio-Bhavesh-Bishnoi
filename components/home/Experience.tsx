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
    useState<string>("hindicreator");

  const experiences: Experience[] = [
    {
      id: "hindicreator",
      role: "Founder & Full Stack Developer",
      company: "HindiCreator.com",
      location: "Remote",
      duration: "June 2020 - Present",
      type: "project",
      description:
        "Founded and developed a popular Hindi technology blog serving the Indian tech community with 100K+ monthly readers.",
      responsibilities: [
        "Designed and developed custom WordPress theme with advanced SEO optimization",
        "Created and published 500+ technology articles in Hindi",
        "Implemented monetization strategies including affiliate marketing and ads",
        "Built automated content distribution system across social media platforms",
        "Managed technical infrastructure and performance optimization",
      ],
      achievements: [
        "Reached 100,000+ monthly organic visitors",
        "Generated ₹50,000+ monthly revenue through multiple channels",
        "Ranked #1 for 200+ technology-related Hindi keywords",
        "Built engaged community of 25,000+ followers across platforms",
        "Featured in top Hindi tech blogs by various publications",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "SEO",
        "Google Analytics",
        "AdSense",
      ],
      website: "https://hindicreator.com",
      featured: true,
    },
    {
      id: "acs",
      role: "Full Stack Web Developer",
      company: "ACS Networks and Technologies",
      location: "Remote Contract",
      duration: "March 2024 - May 2024",
      type: "employment",
      description:
        "Contracted to develop and enhance multiple WordPress-based business websites with custom functionality.",
      responsibilities: [
        "Developed custom WordPress themes from scratch for business websites",
        "Created custom plugins for specific business requirements",
        "Implemented responsive design ensuring mobile-first approach",
        "Optimized website performance and loading speeds",
        "Collaborated with design team to implement pixel-perfect designs",
      ],
      achievements: [
        "Delivered 2 complete website projects ahead of schedule",
        "Improved site loading speed by 60% through optimization",
        "Implemented custom booking system increasing conversions by 35%",
        "Achieved 100% client satisfaction with zero revision requests",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "CSS3",
        "Bootstrap",
      ],
      website: "https://acstechnologies.net",
    },
    {
      id: "freelance",
      role: "Freelance Full Stack Developer",
      company: "Multiple Clients",
      location: "Remote Worldwide",
      duration: "2020 - Present",
      type: "freelance",
      description:
        "Providing comprehensive web development services to businesses, startups, and individuals across various industries.",
      responsibilities: [
        "End-to-end web application development using modern tech stack",
        "E-commerce platform development with payment gateway integration",
        "Custom CMS and dashboard development for business management",
        "Mobile-responsive design implementation",
        "SEO optimization and performance enhancement",
        "Client consultation and technical requirement analysis",
      ],
      achievements: [
        "Successfully delivered 50+ projects with 98% client satisfaction",
        "Built e-commerce platforms generating $100K+ in client revenue",
        "Developed applications serving 10,000+ active users",
        "Maintained 95% on-time delivery rate across all projects",
        "Established long-term partnerships with 15+ recurring clients",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Stripe",
        "AWS",
      ],
      featured: true,
    },
    {
      id: "projects",
      role: "Lead Developer",
      company: "Personal Projects & Open Source",
      location: "Remote",
      duration: "2019 - Present",
      type: "project",
      description:
        "Developing innovative web applications and contributing to open-source projects to enhance skills and give back to the community.",
      responsibilities: [
        "Conceptualized and developed full-stack applications from scratch",
        "Implemented modern development practices and clean architecture",
        "Created comprehensive documentation and tutorials",
        "Mentored junior developers through code reviews and guidance",
        "Contributed to popular open-source libraries and frameworks",
      ],
      achievements: [
        "Published 20+ open-source projects with 500+ GitHub stars",
        "Created portfolio projects showcasing advanced React patterns",
        "Built MERN stack applications with modern deployment practices",
        "Developed reusable component libraries used by 100+ developers",
        "Wrote technical blogs read by 50,000+ developers",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Docker",
        "Vercel",
        "GitHub Actions",
      ],
    },
  ];

  const metrics: Metric[] = [
    {
      label: "Projects Completed",
      value: "50+",
      icon: FaCode,
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: FaUsers,
    },
    {
      label: "Years Experience",
      value: "5+",
      icon: FaRocket,
    },
    {
      label: "Success Rate",
      value: "98%",
      icon: FaAward,
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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
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

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
            >
              <div className="flex justify-center mb-3">
                <metric.icon className="text-3xl text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
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
              <FaBriefcase className="text-blue-400" />
              Career Timeline
            </h3>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <motion.button
                  key={exp.id}
                  variants={itemVariants}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedExperience === exp.id
                      ? "bg-blue-600/20 border border-blue-500/30 shadow-lg"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${
                          selectedExperience === exp.id
                            ? "text-blue-400"
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
                      <p className="text-xl text-blue-400 font-semibold">
                        {selectedExp.company}
                      </p>
                    </div>
                    {selectedExp.website && (
                      <a
                        href={selectedExp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
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
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedExp.type === "freelance"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : selectedExp.type === "employment"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      }`}
                    >
                      {selectedExp.type === "freelance"
                        ? "Freelance"
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
                          <span className="text-blue-400 mt-1">•</span>
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
