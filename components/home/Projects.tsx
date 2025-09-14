"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaUsers,
  FaDollarSign,
  FaEye,
  FaRocket,
  FaStar,
} from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "maintenance";
  metrics: {
    users?: string;
    revenue?: string;
    views?: string;
    rating?: number;
  };
  challenges: string[];
  solutions: string[];
  clientType?: string;
  projectDuration?: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories: Category[] = [
    { id: "all", name: "All Projects", icon: "🚀", count: 9 },
    { id: "fullstack", name: "Full Stack", icon: "⚡", count: 3 },
    { id: "ecommerce", name: "E-commerce", icon: "🛒", count: 3 },
    { id: "cms", name: "CMS & Blogs", icon: "📝", count: 2 },
    { id: "tools", name: "Tools & Apps", icon: "🛠️", count: 1 },
  ];

  const projects: Project[] = [
    {
      id: "portfolio",
      title: "Modern Portfolio Website",
      description:
        "A cutting-edge portfolio website built with Next.js, TypeScript, and Framer Motion",
      longDescription:
        "This portfolio showcases modern web development practices with TypeScript for type safety, Framer Motion for smooth animations, and a responsive design that works across all devices. Built with performance in mind using Next.js app router.",
      image: "/projects/nextjs/portfolio.webp",
      category: "fullstack",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      github: "https://github.com/BhaveshBishnoi/Portfolio-Bhavesh-Bishnoi",
      live: "https://bhaveshbishnoi.vercel.app",
      featured: true,
      status: "completed",
      metrics: {
        views: "10K+",
        rating: 4.9,
      },
      challenges: [
        "Creating smooth animations without impacting performance",
        "Implementing responsive design for all device types",
        "Optimizing for SEO and Core Web Vitals",
      ],
      solutions: [
        "Used Framer Motion with proper optimization techniques",
        "Mobile-first approach with Tailwind CSS",
        "Next.js built-in optimization features",
      ],
      clientType: "Personal Project",
      projectDuration: "2 weeks",
    },
    {
      id: "thebagdis-nextjs",
      title: "TheBagdis E-commerce Platform",
      description: "Full-featured e-commerce platform with modern tech stack",
      longDescription:
        "A comprehensive e-commerce solution built with Next.js, featuring product management, shopping cart, order tracking, payment integration, and admin dashboard. Designed for scalability and performance.",
      image: "/projects/nextjs/thebagdis.webp",
      category: "ecommerce",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Stripe",
        "Prisma",
      ],
      github: "https://github.com/BhaveshBishnoi/TheBagdis-nextjs-project",
      live: "https://thebagdis.vercel.app",
      featured: true,
      status: "completed",
      metrics: {
        users: "500+",
        revenue: "$2K+",
      },
      challenges: [
        "Complex state management for shopping cart",
        "Payment gateway integration with multiple options",
        "Real-time inventory management",
      ],
      solutions: [
        "Context API with optimized re-renders",
        "Stripe integration with webhook handling",
        "Database triggers for inventory updates",
      ],
      clientType: "Business Client",
      projectDuration: "6 weeks",
    },
    {
      id: "kasutam",
      title: "Kasutam Organic Ghee",
      description: "MERN stack e-commerce platform for organic products",
      longDescription:
        "A specialized e-commerce platform for organic ghee products featuring product catalog, order management, payment processing, and customer dashboard. Built with MERN stack for optimal performance.",
      image: "/projects/mern/kasutam.webp",
      category: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      live: "https://kasutam.com",
      featured: true,
      status: "completed",
      metrics: {
        users: "1K+",
        revenue: "$5K+",
      },
      challenges: [
        "Implementing subscription-based orders",
        "Managing perishable product inventory",
        "Creating intuitive admin interface",
      ],
      solutions: [
        "Cron jobs for recurring order processing",
        "Advanced inventory tracking system",
        "Custom admin dashboard with analytics",
      ],
      clientType: "Startup Client",
      projectDuration: "8 weeks",
    },
    {
      id: "hindicreator",
      title: "Hindi Creator Tech Blog",
      description:
        "Popular Hindi technology blog serving 100K+ monthly readers",
      longDescription:
        "A comprehensive technology blog platform in Hindi language, featuring SEO-optimized content, social media integration, and monetization strategies. Serves the Hindi-speaking tech community.",
      image: "/projects/wordpress/hindicreator.webp",
      category: "cms",
      technologies: ["WordPress", "PHP", "MySQL", "SEO", "Analytics"],
      live: "https://hindicreator.com",
      featured: true,
      status: "maintenance",
      metrics: {
        users: "100K+",
        revenue: "$600/month",
        views: "500K+",
        rating: 4.7,
      },
      challenges: [
        "SEO optimization for Hindi content",
        "Building engaged community",
        "Monetization without affecting user experience",
      ],
      solutions: [
        "Advanced SEO techniques with proper Hindi meta tags",
        "Social media integration and newsletter",
        "Strategic ad placement and affiliate marketing",
      ],
      clientType: "Personal Business",
      projectDuration: "Ongoing (4+ years)",
    },
    {
      id: "cakeshop",
      title: "Cake Shop Management System",
      description: "Complete MERN stack solution for cake shop business",
      longDescription:
        "A comprehensive cake shop management system with customer ordering, admin panel, order tracking, payment integration, and inventory management. Features custom cake ordering with image uploads.",
      image: "/projects/mern/cakeshop.webp",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "ShadcnUI", "Cloudinary"],
      github:
        "https://github.com/BhaveshBishnoi/Cake-Shop-App-Using-MERN-Stack",
      featured: false,
      status: "completed",
      metrics: {
        users: "200+",
        rating: 4.8,
      },
      challenges: [
        "Custom cake ordering with image upload",
        "Real-time order status updates",
        "Complex pricing calculations",
      ],
      solutions: [
        "Cloudinary integration for image management",
        "WebSocket for real-time updates",
        "Dynamic pricing algorithm",
      ],
      clientType: "Demo Project",
      projectDuration: "4 weeks",
    },
    {
      id: "shopper",
      title: "Shopper Inventory Manager",
      description: "PHP-based inventory and sales management tool",
      longDescription:
        "A comprehensive inventory management system for small businesses featuring customer management, sales tracking, order management, GST calculations, and detailed reporting.",
      image: "/projects/php/shopper.webp",
      category: "tools",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "GST"],
      live: "https://shopper.bhaveshbishnoi.com",
      featured: false,
      status: "completed",
      metrics: {
        users: "50+",
        rating: 4.5,
      },
      challenges: [
        "Complex GST calculations",
        "Multi-user access control",
        "Generating detailed reports",
      ],
      solutions: [
        "Automated GST calculation engine",
        "Role-based access control system",
        "PDF report generation with charts",
      ],
      clientType: "Business Client",
      projectDuration: "5 weeks",
    },
    {
      id: "thebagdis-wp",
      title: "TheBagdis WordPress Store",
      description: "Custom WordPress e-commerce website",
      longDescription:
        "A custom WordPress e-commerce solution with tailored themes, plugins, and functionality for the fashion retail business.",
      image: "/projects/wordpress/thebagdis.webp",
      category: "ecommerce",
      technologies: ["WordPress", "WooCommerce", "PHP", "jQuery"],
      live: "https://thebagdis.com",
      featured: false,
      status: "maintenance",
      metrics: {
        users: "300+",
      },
      challenges: [
        "Custom theme development",
        "WooCommerce customization",
        "Performance optimization",
      ],
      solutions: [
        "Custom post types and fields",
        "Tailored WooCommerce hooks",
        "Caching and image optimization",
      ],
      clientType: "Business Client",
      projectDuration: "3 weeks",
    },
    {
      id: "theindianroamer",
      title: "The Indian Roamer Travel Blog",
      description: "Custom WordPress travel blog with booking features",
      longDescription:
        "A travel blog platform with custom booking integration, travel guides, and social media features for travel enthusiasts.",
      image: "/projects/wordpress/theindianroamer.webp",
      category: "cms",
      technologies: ["WordPress", "PHP", "jQuery", "Bootstrap"],
      live: "https://theindianroamer.com",
      featured: false,
      status: "completed",
      metrics: {
        views: "50K+",
      },
      challenges: [
        "Custom booking integration",
        "Travel itinerary management",
        "Social media integration",
      ],
      solutions: [
        "Third-party booking API integration",
        "Custom post types for itineraries",
        "Social sharing optimization",
      ],
      clientType: "Travel Blogger",
      projectDuration: "4 weeks",
    },
    {
      id: "jsprojects",
      title: "JavaScript Projects Collection",
      description: "Collection of interactive JavaScript projects and demos",
      longDescription:
        "A comprehensive collection of JavaScript projects showcasing various concepts from DOM manipulation to API integration, perfect for learning and demonstration purposes.",
      image: "/projects/javascript/small-js-projects.png",
      category: "fullstack",
      technologies: ["JavaScript", "HTML5", "CSS3", "APIs", "Local Storage"],
      github: "https://github.com/BhaveshBishnoi/JavaScript-Small-Projects",
      featured: false,
      status: "completed",
      metrics: {
        views: "5K+",
        rating: 4.3,
      },
      challenges: [
        "Cross-browser compatibility",
        "Responsive design implementation",
        "API integration without frameworks",
      ],
      solutions: [
        "Progressive enhancement approach",
        "CSS Grid and Flexbox",
        "Vanilla JavaScript with error handling",
      ],
      clientType: "Learning Projects",
      projectDuration: "6 months",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work - from full-stack applications to
            e-commerce platforms. Each project demonstrates my commitment to
            quality, performance, and user experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects", value: "50+", icon: FaCode },
            { label: "Happy Clients", value: "30+", icon: FaUsers },
            { label: "Revenue Generated", value: "$10K+", icon: FaDollarSign },
            { label: "Total Users", value: "100K+", icon: FaEye },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="text-3xl text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full border border-yellow-500/30">
                    <FaStar className="text-xs" />
                    Featured
                  </span>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    project.status === "completed"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : project.status === "in-progress"
                      ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      : "bg-orange-500/20 text-orange-400 border-orange-500/30"
                  }`}
                >
                  {project.status === "completed"
                    ? "Completed"
                    : project.status === "in-progress"
                    ? "In Progress"
                    : "Maintenance"}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                {Object.keys(project.metrics).length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-4 text-xs">
                    {project.metrics.users && (
                      <div className="flex items-center gap-1 text-blue-400">
                        <FaUsers />
                        <span>{project.metrics.users} users</span>
                      </div>
                    )}
                    {project.metrics.revenue && (
                      <div className="flex items-center gap-1 text-green-400">
                        <FaDollarSign />
                        <span>{project.metrics.revenue}</span>
                      </div>
                    )}
                    {project.metrics.views && (
                      <div className="flex items-center gap-1 text-purple-400">
                        <FaEye />
                        <span>{project.metrics.views} views</span>
                      </div>
                    )}
                    {project.metrics.rating && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <span>{project.metrics.rating}/5</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-full border border-gray-700/50">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View Code"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id
                      )
                    }
                    className="text-blue-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    {selectedProject === project.id ? "Less Info" : "More Info"}
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/10 space-y-4"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Client:</span>
                        <span className="text-white ml-2">
                          {project.clientType}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white ml-2">
                          {project.projectDuration}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-2">
                        All Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              These projects represent just a sample of what I can create for
              you. Whether you need a simple website, complex web application,
              or e-commerce platform, I&nbsp;m here to help bring your vision to
              life with modern technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
