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
  FaDollarSign,
  FaArrowRight,
} from "react-icons/fa";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  startingPrice: string;
  deliveryTime: string;
  technologies: string[];
  popular?: boolean;
}

interface Package {
  name: string;
  price: string;
  features: string[];
  deliveryTime: string;
  revisions: string;
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
      startingPrice: "$299",
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
      startingPrice: "$499",
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
      startingPrice: "$199",
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
      startingPrice: "$149",
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
      startingPrice: "$99",
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
      startingPrice: "$49/month",
      deliveryTime: "Ongoing",
      technologies: ["Various based on website"],
    },
  ];

  const packages: Record<string, Package[]> = {
    "web-development": [
      {
        name: "Basic",
        price: "$299",
        features: [
          "Single page application",
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
          "3 revisions",
        ],
        deliveryTime: "7 days",
        revisions: "3",
      },
      {
        name: "Standard",
        price: "$599",
        features: [
          "Multi-page application",
          "Database integration",
          "Admin dashboard",
          "Payment integration",
          "Advanced SEO",
          "5 revisions",
        ],
        deliveryTime: "14 days",
        revisions: "5",
      },
      {
        name: "Premium",
        price: "$999",
        features: [
          "Full-stack application",
          "Custom features",
          "API development",
          "Advanced analytics",
          "Performance optimization",
          "Unlimited revisions",
        ],
        deliveryTime: "21 days",
        revisions: "Unlimited",
      },
    ],
  };

  const selectedServiceData = services.find(
    (service) => service.id === selectedService
  );

  return (
    <section id="services" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
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
            Freelance Services
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
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedService === service.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
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
                <div className="p-4 bg-blue-600/20 rounded-xl border border-blue-500/30">
                  <selectedServiceData.icon className="text-3xl text-blue-400" />
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <FaDollarSign className="text-green-400 text-xl mx-auto mb-2" />
                  <div className="text-white font-semibold">Starting at</div>
                  <div className="text-green-400 font-bold text-xl">
                    {selectedServiceData.startingPrice}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <FaClock className="text-blue-400 text-xl mx-auto mb-2" />
                  <div className="text-white font-semibold">Delivery</div>
                  <div className="text-blue-400 font-bold text-lg">
                    {selectedServiceData.deliveryTime}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <FaRocket className="text-purple-400 text-xl mx-auto mb-2" />
                  <div className="text-white font-semibold">Quality</div>
                  <div className="text-purple-400 font-bold text-lg">
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
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
                  Get Started Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Packages (for web development) */}
        {selectedService === "web-development" && packages[selectedService] && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Choose Your Package
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {packages[selectedService].map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-xl rounded-2xl border p-8 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    index === 1
                      ? "border-blue-500/50 shadow-lg shadow-blue-500/10 scale-105"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h4>
                    <div className="text-4xl font-bold text-blue-400 mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-gray-400">
                      Delivered in {pkg.deliveryTime}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-400 text-sm flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center text-sm text-gray-400 mb-6">
                    {pkg.revisions} • Source Code Included
                  </div>

                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      index === 1
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              ))}
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
          <div className="grid md:grid-cols-4 gap-6">
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
              {
                icon: FaDollarSign,
                title: "Fair Pricing",
                description: "Competitive rates with no hidden costs",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="text-3xl text-blue-400" />
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
