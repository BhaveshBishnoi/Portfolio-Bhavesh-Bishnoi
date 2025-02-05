'use client';

import React from 'react';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-400/20 to-orange-600/20 border-orange-500/50",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-400/20 to-blue-600/20 border-blue-500/50",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400/20 to-yellow-600/20 border-yellow-500/50",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400/20 to-cyan-600/20 border-cyan-500/50",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-400/20 to-green-600/20 border-green-500/50",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "from-gray-400/20 to-gray-600/20 border-gray-500/50",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-400/20 to-green-600/20 border-green-500/50",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "from-gray-400/20 to-gray-600/20 border-gray-500/50",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-400/20 to-blue-600/20 border-blue-500/50",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "from-cyan-400/20 to-cyan-600/20 border-cyan-500/50",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "from-purple-400/20 to-purple-600/20 border-purple-500/50",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "from-indigo-400/20 to-indigo-600/20 border-indigo-500/50",
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 md:px-16 min-h-screen flex flex-col justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl transform rotate-12 opacity-30"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/30 to-cyan-500/30 blur-3xl transform -rotate-12 opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Skills & Technologies
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A collection of technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map(({ name, logo, color }) => (
            <div
              key={name}
              className={`group relative p-6 backdrop-blur-xl bg-gradient-to-br ${color} 
                border rounded-xl text-center transition-all duration-300 
                hover:scale-105 hover:shadow-xl hover:-translate-y-1 
                cursor-pointer overflow-hidden`}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center">
                <div className="relative h-16 w-16 mb-4">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 64px, 96px"
                  />
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-white/90">
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
