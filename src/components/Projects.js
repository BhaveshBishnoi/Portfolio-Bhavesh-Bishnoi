'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js, Tailwind CSS, and glass morphism design. Features responsive design and smooth animations.",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Glass UI"],
      github: "https://github.com/bhaveshbishnoi/portfolio",
      live: "https://bhaveshbishnoi.vercel.app",
    },
    {
      title: "JavaScript Projects Collection",
      description: "A collection of small JavaScript projects showcasing various web development concepts and interactive features.",
      image: "/projects/small-js-projects.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "TailwindCSS"],
      github: "https://github.com/BhaveshBishnoi/JavaScript-Small-Projects",
      live: "https://javascript-small-projects.vercel.app",
    },
    {
      title: "Hindi Creator Blog",
      description: "A technology blog platform built for Hindi-speaking audience, featuring tech articles and tutorials.",
      image: "/projects/hindicreator.jpg",
      technologies: ["WordPress", "PHP", "MySQL", "SEO", "Content Management"],
      github: "",
      live: "https://hindicreator.com",
    },
    {
      title: "ACS Technologies Website",
      description: "Custom WordPress theme and plugins development for ACS Technologies' corporate website.",
      image: "/projects/acs.jpg",
      technologies: ["WordPress", "PHP", "jQuery", "Bootstrap", "MySQL"],
      github: "",
      live: "https://acstechnologies.net",
    }
  ];

  return (
    <section id="projects" className="relative py-16 px-4 min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/30 to-blue-500/30 blur-3xl transform -rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-pink-500/30 to-cyan-500/30 blur-3xl transform rotate-12 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Projects</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Showcasing my latest work and technical expertise through real-world applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Card */}
              <div className="h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-80' : 'opacity-60'}`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
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

                  {/* Links */}
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
    </section>
  );
};

export default Projects;
