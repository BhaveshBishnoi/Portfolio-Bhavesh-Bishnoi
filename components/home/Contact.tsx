"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaCalendar,
  FaRocket,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  description: string;
}

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link?: string;
}

const Contact: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/BhaveshBishnoi",
      description: "Check out my code & projects",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/bhaveshbishnoi/",
      description: "Connect professionally",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/ibhaveshbishnoi",
      description: "Follow for tech updates",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/bhavesh_bishnoi",
      description: "Behind the scenes",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/917296979897",
      description: "Quick chat & consultations",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:ibhaveshbishnoi@gmail.com",
      description: "Send me an email",
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Sri Ganganagar, Rajasthan, India",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 7296979897",
      link: "tel:+917296979897",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ibhaveshbishnoi@gmail.com",
      link: "mailto:ibhaveshbishnoi@gmail.com",
    },
  ];

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
    <section id="contact" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,100,100,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss your next project. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <method.icon className="w-6 h-6 text-gray-300" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{method.label}</h3>
              {method.link ? (
                <a
                  href={method.link}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm">{method.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Connect With Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800/50 rounded-xl group-hover:bg-gray-700/50 transition-colors">
                    <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {social.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {social.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-lg">
                Available for New Projects
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              I'm currently accepting new projects and consultations. Let's work together to bring your ideas to life!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <FaCalendar className="text-gray-300" />
                <span className="text-sm">Response time: 2-4 hours</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaRocket className="text-gray-300" />
                <span className="text-sm">Can start immediately</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
