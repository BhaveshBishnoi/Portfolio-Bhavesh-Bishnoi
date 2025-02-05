'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wordpress', name: 'WordPress Projects' },
    { id: 'javascript', name: 'JavaScript Projects' },
    { id: 'nextjs', name: 'Next.js Projects' },
    { id: 'mern', name: 'MERN Stack Projects' },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js, Tailwind CSS, and glass morphism design.",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Glass UI"],
      github: "https://github.com/BhaveshBishnoi/Portfolio-Bhavesh-Bishnoi",
      live: "https://bhaveshbishnoi.vercel.app",
      category: "nextjs"
    },
    {
      title: "JavaScript Projects Collection",
      description: "A collection of small JavaScript projects showcasing various web development concepts.",
      image: "/projects/small-js-projects.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "TailwindCSS"],
      github: "https://github.com/BhaveshBishnoi/JavaScript-Small-Projects",
      category: "javascript"
    },
    {
      title: "Hindi Creator Blog",
      description: "A technology blog platform built for Hindi-speaking audience.",
      image: "/projects/hindicreator.png",
      technologies: ["WordPress", "PHP", "MySQL", "SEO"],
      live: "https://hindicreator.com",
      category: "wordpress"
    },
    {
      title: "The Bagdi's E-commerce",
      description: "Custom WordPress theme and plugins development for E-commerce Website.",
      image: "/projects/thebagdis.png",
      technologies: ["WordPress", "PHP", "jQuery", "Bootstrap"],
      live: "https://thebagdis.com",
      category: "wordpress"
    },
    {
      title: "The Indian Roamer",
      description: "Custom WordPress theme for The Indian Roamer Travel Website.",
      image: "/projects/theindianroamer.png",
      technologies: ["WordPress", "PHP", "jQuery", "Bootstrap"],
      live: "https://theindianroamer.com",
      category: "wordpress"
    },
    {
      title: "Cake Shop Website",
      description: "MERN Stack Website with admin panel, order tracking, and payments.",
      image: "/projects/cakeshop.png",
      technologies: ["MERN Stack", "TailwindCSS", "ShadcnUI"],
      github: "https://github.com/BhaveshBishnoi/Cake-Shop-App-Using-MERN-Stack",
      live: "https://bhaveshbishnoi.com/hire-me",
      category: "mern"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen py-16 px-4">
      {/* Category Filters */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center text-white mb-8">My Projects</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl backdrop-blur-md border transition duration-300 ${
                activeCategory === category.id
                ? 'bg-white/20 border-white/50 text-white'
                : 'bg-white/10 border-white/30 text-gray-300 hover:bg-white/15'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-80' : 'opacity-60'}`}></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;