"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaDownload,
  FaCode,
  FaRocket,
  FaClock,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/bhaveshbishnoi",
      icon: FaGithub,
      color: "hover:text-gray-300 hover:scale-110",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhaveshbishnoi",
      icon: FaLinkedin,
      color: "hover:text-gray-300 hover:scale-110",
    },
    {
      name: "Twitter",
      url: "https://x.com/ibhaveshbishnoi",
      icon: FaTwitter,
      color: "hover:text-sky-400 hover:scale-110",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917296979897",
      icon: FaWhatsapp,
      color: "hover:text-green-400 hover:scale-110",
    },
  ];

  const stats: Stat[] = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: FaCode,
    },
    {
      number: "30+",
      label: "Happy Clients",
      icon: FaRocket,
    },
    {
      number: "24/7",
      label: "Available",
      icon: FaClock,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {/* Availability Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
                variants={itemVariants}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Available for New Projects
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
                  Bhavesh Bishnoi
                </span>
              </motion.h1>

              <motion.div className="space-y-3" variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
                  Full Stack Developer
                </h2>
                <p className="text-lg md:text-xl text-gray-300 font-medium">
                  Professional Web Developer & Tech Consultant
                </p>
              </motion.div>

              <motion.p
                className="text-gray-300 text-lg max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                I help businesses and entrepreneurs build powerful web
                applications, e-commerce platforms, and digital solutions that
                drive growth and success. From concept to deployment, I deliver
                high-quality, scalable solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
                variants={itemVariants}
              >
                <Link
                  href="#contact"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2">
                    Hire Me Now
                    <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start pt-8"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300`}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
              <Link
                href="mailto:ibhaveshbishnoi@gmail.com"
                className="text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-300"
                title="Email"
              >
                <IoMdMail className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Animated Background Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-full blur-2xl opacity-40 animate-pulse"></div>

              {/* Outer Ring */}
              <div className="absolute inset-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-gray-900 rounded-full"></div>
              </div>

              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm shadow-2xl group">
                <Image
                  src="/profile.jpg"
                  alt="Bhavesh Bishnoi - Full Stack Developer"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gray-700/20 rounded-full backdrop-blur-sm border border-gray-600/30 flex items-center justify-center animate-bounce">
                <FaCode className="text-gray-300 text-xl" />
              </div>

              <div className="absolute bottom-8 left-4 w-12 h-12 bg-gray-600/20 rounded-full backdrop-blur-sm border border-gray-500/30 flex items-center justify-center animate-pulse">
                <FaRocket className="text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
