"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaShoppingCart,
  FaMobile,
  FaSearch,
  FaRocket,
  FaCog,
  FaWordpress,
  FaCheckCircle,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  deliveryTime: string;
  technologies: string[];
  popular?: boolean;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] =
    useState<string>("web-development");

  const services: Service[] = [
    {
      id: "web-development",
      title: "Custom Web Development",
      description:
        "Full-stack web applications built with modern technologies for optimal performance and user experience.",
      icon: FaCode,
      features: [
        "Custom responsive web applications",
        "Modern UI/UX design implementation",
        "Database design and integration",
        "API development and integration",
        "Payment gateway integration",
        "Admin dashboard development",
        "SEO optimization",
        "Performance optimization",
      ],
      deliveryTime: "7-14 days",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
      popular: true,
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms with shopping carts, payment integration, and inventory management.",
      icon: FaShoppingCart,
      features: [
        "Custom e-commerce website",
        "Shopping cart functionality",
        "Payment gateway integration",
        "Inventory management system",
        "Order tracking system",
        "Customer dashboard",
        "Admin panel with analytics",
        "Mobile-responsive design",
      ],
      deliveryTime: "10-21 days",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "wordpress",
      title: "WordPress Development",
      description:
        "Custom WordPress themes, plugins, and complete website development with modern design.",
      icon: FaWordpress,
      features: [
        "Custom WordPress theme development",
        "Plugin development and customization",
        "WordPress website setup",
        "Content management system",
        "SEO optimization",
        "Speed optimization",
        "Security implementation",
        "Maintenance and updates",
      ],
      deliveryTime: "5-10 days",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    },
    {
      id: "mobile-responsive",
      title: "Mobile-First Design",
      description:
        "Responsive web design that looks perfect on all devices with touch-friendly interfaces.",
      icon: FaMobile,
      features: [
        "Mobile-first responsive design",
        "Cross-browser compatibility",
        "Touch-friendly interfaces",
        "Progressive Web App (PWA)",
        "Offline functionality",
        "Fast loading speeds",
        "App-like user experience",
        "Device optimization",
      ],
      deliveryTime: "3-7 days",
      technologies: ["HTML5", "CSS3", "JavaScript", "PWA"],
    },
    {
      id: "seo",
      title: "SEO & Performance",
      description:
        "Search engine optimization and performance improvements to boost your website visibility.",
      icon: FaSearch,
      features: [
        "Technical SEO audit",
        "On-page SEO optimization",
        "Page speed optimization",
        "Core Web Vitals improvement",
        "Meta tags optimization",
        "Schema markup implementation",
        "XML sitemap creation",
        "Google Analytics setup",
      ],
      deliveryTime: "2-5 days",
      technologies: [
        "Google Analytics",
        "Search Console",
        "PageSpeed Insights",
      ],
    },
    {
      id: "maintenance",
      title: "Website Maintenance",
      description:
        "Ongoing website maintenance, updates, security monitoring, and technical support.",
      icon: FaCog,
      features: [
        "Regular website updates",
        "Security monitoring",
        "Backup management",
        "Performance monitoring",
        "Bug fixes and improvements",
        "Content updates",
        "24/7 technical support",
        "Monthly reports",
      ],
      deliveryTime: "Ongoing",
      technologies: ["Various based on website"],
    },
  ];

  const selectedServiceData = services.find(
    (service) => service.id === selectedService
  );

  return (
    <section id="services" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,100,100,0.05),transparent_50%)]"></div>
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
            Professional Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional web development services to help your business grow
            online. From simple websites to complex applications, I&apos;ve got
            you covered.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${selectedService === service.id
                  ? "bg-gray-800 text-white shadow-lg shadow-gray-800/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
            >
              <service.icon className="text-lg" />
              <span className="hidden sm:inline">{service.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Selected Service Details */}
        {selectedServiceData && (
          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-16"
            key={selectedService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Service Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <selectedServiceData.icon className="text-3xl text-gray-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedServiceData.title}
                  </h3>
                  {selectedServiceData.popular && (
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30 mt-1">
                      Most Popular
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedServiceData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <FaClock className="text-gray-300 text-xl mx-auto mb-2" />
                  <div className="text-white font-semibold">Delivery</div>
                  <div className="text-gray-300 font-bold text-lg">
                    {selectedServiceData.deliveryTime}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <FaRocket className="text-gray-300 text-xl mx-auto mb-2" />
                  <div className="text-white font-semibold">Quality</div>
                  <div className="text-gray-300 font-bold text-lg">
                    Premium
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServiceData.technologies.map((tech, index) => (
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

            {/* Features List */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h4 className="text-xl font-bold text-white mb-6">
                What&apos;s Included:
              </h4>
              <div className="space-y-3">
                {selectedServiceData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-700/25 transition-all duration-300 group">
                  Get Started Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Why Choose Me Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaRocket,
                title: "Fast Delivery",
                description:
                  "Quick turnaround times without compromising quality",
              },
              {
                icon: FaCheckCircle,
                title: "Quality Assured",
                description:
                  "Clean code, modern practices, and thorough testing",
              },
              {
                icon: FaClock,
                title: "24/7 Support",
                description: "Available for communication and project updates",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="text-3xl text-gray-300" />
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
