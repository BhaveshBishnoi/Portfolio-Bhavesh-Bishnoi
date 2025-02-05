'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bhaveshbishnoi',
      icon: FaGithub,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/bhaveshbishnoi',
      icon: FaLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/ibhaveshbishnoi',
      icon: FaTwitter,
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl transform -rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-pink-500/30 to-cyan-500/30 blur-3xl transform rotate-12 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Bhavesh Bishnoi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Full Stack Developer & Technology Enthusiast
              </p>
              <p className="text-gray-400 mb-8 max-w-2xl">
                I craft beautiful, responsive, and user-friendly web applications using modern technologies.
                Let&apos;s turn your ideas into reality!
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Get in Touch
                </Link>
                <Link href="#projects" className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View Projects
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div id="home" className="mt-8 flex gap-6 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${social.color} transform hover:scale-110 transition-all duration-300`}
                >
                  <social.icon className="w-8 h-8" />
                </Link>
              ))}
              <Link
                href="mailto:ibhaveshbishnoi@gmail.com"
                className="text-white hover:text-red-500 transform hover:scale-110 transition-all duration-300"
              >
                <IoMdMail className="w-8 h-8" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Bhavesh Bishnoi"
                  width={384}
                  height={384}
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
