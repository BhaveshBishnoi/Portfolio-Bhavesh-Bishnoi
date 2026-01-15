"use client";

import React, { useState } from "react";
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
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaPaperPlane,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  requirements: string[];
}

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: string;
  description: string;
}

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link?: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    requirements: [],
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const projectTypes = [
    "Website Development",
    "E-commerce Platform",
    "Web Application",
    "WordPress Website",
    "Mobile App",
    "SEO & Optimization",
    "Maintenance & Support",
    "Other",
  ];

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's discuss",
  ];

  const timelineOptions = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "3-4 weeks",
    "1-2 months",
    "3+ months",
    "Flexible",
  ];

  const availableRequirements = [
    "Responsive Design",
    "Payment Integration",
    "User Authentication",
    "Admin Dashboard",
    "SEO Optimization",
    "Social Media Integration",
    "Analytics Setup",
    "Content Management",
    "API Integration",
    "Database Design",
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/BhaveshBishnoi",
      color: "hover:text-gray-300",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/bhaveshbishnoi/",
      color: "hover:text-blue-400",
      description: "Professional network",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/ibhaveshbishnoi",
      color: "hover:text-sky-400",
      description: "Follow for updates",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/bhavesh_bishnoi",
      color: "hover:text-pink-400",
      description: "Behind the scenes",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/917296979897",
      color: "hover:text-green-400",
      description: "Quick chat",
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Sri Ganganagar, Rajasthan, India",
      color: "text-blue-400",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 7296979897",
      link: "tel:+917296979897",
      color: "text-green-400",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ibhaveshbishnoi@gmail.com",
      link: "mailto:ibhaveshbishnoi@gmail.com",
      color: "text-red-400",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Available 24/7",
      link: "https://wa.me/917296979897",
      color: "text-green-400",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRequirementToggle = (requirement: string) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter((req) => req !== requirement)
        : [...prev.requirements, requirement],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        requirements: [],
      });
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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
            Let&nbsp;s Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your project to life? Let&nbsp;s discuss your
            requirements and create something amazing together. I&nbsp;m
            available for new projects and consultations.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: FaClock,
              title: "Quick Response",
              description: "Usually respond within 2-4 hours",
              color: "text-blue-400",
            },
            {
              icon: FaCheckCircle,
              title: "Quality Assured",
              description: "98% client satisfaction rate",
              color: "text-green-400",
            },
            {
              icon: FaDollarSign,
              title: "Fair Pricing",
              description: "Competitive rates, no hidden costs",
              color: "text-yellow-400",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
            >
              <div className="flex justify-center mb-4">
                <item.icon className={`text-3xl ${item.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Start Your Project
              </h3>

              {submitStatus === "success" ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Your project inquiry has been received. I&nbsp;ll get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option
                            key={index}
                            value={type}
                            className="bg-gray-800"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option
                            key={index}
                            value={range}
                            className="bg-gray-800"
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option}
                          className="bg-gray-800"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Required Features
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableRequirements.map((requirement, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.requirements.includes(
                              requirement
                            )}
                            onChange={() =>
                              handleRequirementToggle(requirement)
                            }
                            className="rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="text-gray-300 text-sm">
                            {requirement}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project. What are your goals, target audience, and any specific requirements?"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 hover:transform hover:-translate-y-1"
                      } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Project Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`p-3 bg-white/5 rounded-xl ${method.color}`}
                    >
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{method.label}</p>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-white font-medium">{social.name}</p>
                      <p className="text-gray-400 text-sm">
                        {social.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendar className="text-blue-400" />
                  <span className="text-gray-300">
                    Response time: 2-4 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaRocket className="text-purple-400" />
                  <span className="text-gray-300">Can start immediately</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-300 text-sm mb-4">
                  Prefer a quick chat? Schedule a free 30-minute consultation to
                  discuss your project.
                </p>
                <a
                  href="https://calendly.com/bhaveshbishnoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
                >
                  <FaCalendar />
                  Schedule a Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
