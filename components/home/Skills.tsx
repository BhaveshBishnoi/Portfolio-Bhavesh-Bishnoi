"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  logo: string;
  category: string;
  proficiency: number;
  description: string;
  yearsOfExperience: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const categories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: "🎨",
      description: "Modern UI/UX development",
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      description: "Server-side development",
    },
    {
      id: "database",
      name: "Database",
      icon: "🗄️",
      description: "Data management solutions",
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: "🛠️",
      description: "Development workflow",
    },
    {
      id: "mobile",
      name: "Mobile & CMS",
      icon: "📱",
      description: "Mobile and content management",
    },
  ];

  const skills: Skill[] = [
    // Frontend
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "frontend",
      proficiency: 95,
      description:
        "Advanced React development with hooks, context, and performance optimization",
      yearsOfExperience: 4,
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "frontend",
      proficiency: 92,
      description:
        "Full-stack React framework with SSR, API routes, and app router",
      yearsOfExperience: 3,
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "frontend",
      proficiency: 88,
      description: "Type-safe JavaScript development with advanced patterns",
      yearsOfExperience: 3,
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
      category: "frontend",
      proficiency: 95,
      description: "Utility-first CSS framework for rapid UI development",
      yearsOfExperience: 4,
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "frontend",
      proficiency: 95,
      description: "ES6+, async/await, modules, and modern JavaScript patterns",
      yearsOfExperience: 5,
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "frontend",
      proficiency: 98,
      description: "Semantic HTML, accessibility, and web standards",
      yearsOfExperience: 6,
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "frontend",
      proficiency: 95,
      description:
        "Advanced CSS, animations, flexbox, grid, and responsive design",
      yearsOfExperience: 6,
    },
    {
      name: "Framer Motion",
      logo: "https://www.svgrepo.com/show/354105/framer.svg",
      category: "frontend",
      proficiency: 85,
      description:
        "Advanced animations and interactions for React applications",
      yearsOfExperience: 2,
    },

    // Backend
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "backend",
      proficiency: 90,
      description:
        "Server-side JavaScript with Express, middleware, and async operations",
      yearsOfExperience: 4,
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "backend",
      proficiency: 92,
      description:
        "RESTful APIs, middleware, authentication, and server architecture",
      yearsOfExperience: 4,
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      category: "backend",
      proficiency: 88,
      description: "Server-side scripting, OOP, and custom CMS development",
      yearsOfExperience: 5,
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "backend",
      proficiency: 75,
      description: "Web development with Django/Flask and automation scripts",
      yearsOfExperience: 2,
    },

    // Database
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "database",
      proficiency: 90,
      description:
        "NoSQL database design, aggregation, and performance optimization",
      yearsOfExperience: 4,
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "database",
      proficiency: 85,
      description:
        "Relational database design, complex queries, and optimization",
      yearsOfExperience: 4,
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "database",
      proficiency: 80,
      description:
        "Advanced SQL, stored procedures, and database administration",
      yearsOfExperience: 2,
    },
    {
      name: "Prisma",
      logo: "https://www.svgrepo.com/show/374002/prisma.svg",
      category: "database",
      proficiency: 85,
      description: "Modern database toolkit and ORM for TypeScript",
      yearsOfExperience: 2,
    },

    // Tools & DevOps
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "tools",
      proficiency: 90,
      description:
        "Version control, branching strategies, and collaboration workflows",
      yearsOfExperience: 5,
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "tools",
      proficiency: 75,
      description: "Containerization, deployment, and development environments",
      yearsOfExperience: 2,
    },
    {
      name: "Vercel",
      logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      category: "tools",
      proficiency: 92,
      description: "Deployment platform for modern web applications",
      yearsOfExperience: 3,
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "tools",
      proficiency: 70,
      description: "Cloud services, S3, EC2, and serverless functions",
      yearsOfExperience: 2,
    },

    // Mobile & CMS
    {
      name: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      category: "mobile",
      proficiency: 95,
      description: "Custom themes, plugins, and complete CMS solutions",
      yearsOfExperience: 5,
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "mobile",
      proficiency: 75,
      description: "Cross-platform mobile app development",
      yearsOfExperience: 1,
    },
    {
      name: "Progressive Web Apps",
      logo: "https://www.svgrepo.com/show/373964/pwa.svg",
      category: "mobile",
      proficiency: 85,
      description: "Offline-first web applications with native app features",
      yearsOfExperience: 2,
    },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,119,198,0.1),transparent_50%)]"></div>
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern technologies and tools I use to create exceptional digital
            experiences. Continuously learning and adapting to the latest
            industry trends.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-75">{category.description}</div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg group-hover:text-gray-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-sm text-gray-400">
                    {skill.yearsOfExperience} year
                    {skill.yearsOfExperience !== 1 ? "s" : ""} experience
                  </div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold text-gray-300">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The tech industry evolves rapidly, and I stay current with the
              latest trends, best practices, and emerging technologies. I&apos;m
              always excited to learn new tools and frameworks that can deliver
              better solutions for my clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AI/ML Integration",
                "Web3 Technologies",
                "Serverless Architecture",
                "Microservices",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-700/20 to-gray-900/20 border border-gray-700/30 text-gray-300 rounded-full text-sm font-medium"
                >
                  Currently Learning: {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
