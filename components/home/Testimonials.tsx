"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  review: string;
  project: string;
  location: string;
  highlight: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Solutions",
      image: "/testimonials/sarah.jpg",
      rating: 5,
      review:
        "Bhavesh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, technical expertise, and communication throughout the project were outstanding. The website performs beautifully and has significantly boosted our online sales.",
      project: "E-commerce Platform Development",
      location: "San Francisco, USA",
      highlight: "Increased sales by 300% within first month",
    },
    {
      id: "2",
      name: "Raj Patel",
      role: "Founder",
      company: "Digital Marketing Pro",
      image: "/testimonials/raj.jpg",
      rating: 5,
      review:
        "Working with Bhavesh was a game-changer for our business. He not only built our website but also optimized it for SEO and performance. The results speak for themselves - we've seen a 250% increase in organic traffic and lead generation.",
      project: "Business Website & SEO",
      location: "Mumbai, India",
      highlight: "250% increase in organic traffic",
    },
    {
      id: "3",
      name: "Emily Chen",
      role: "Product Manager",
      company: "InnovateNow",
      image: "/testimonials/emily.jpg",
      rating: 5,
      review:
        "Bhavesh is a true professional who understands both technical requirements and business needs. He delivered our complex web application on time and within budget. His problem-solving skills and modern development approach are impressive.",
      project: "Custom Web Application",
      location: "Toronto, Canada",
      highlight: "Delivered on time and under budget",
    },
    {
      id: "4",
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      company: "Local Craft Store",
      image: "/testimonials/michael.jpg",
      rating: 5,
      review:
        "As a small business owner, I needed someone who could understand my budget constraints while still delivering quality work. Bhavesh provided exactly that - a beautiful, functional website that helps my business compete with larger retailers.",
      project: "Small Business Website",
      location: "Austin, USA",
      highlight: "Competing with larger retailers",
    },
    {
      id: "5",
      name: "Priya Sharma",
      role: "Startup Founder",
      company: "HealthTech Innovations",
      image: "/testimonials/priya.jpg",
      rating: 5,
      review:
        "Bhavesh helped us launch our startup with a professional MVP that impressed our investors. His ability to work with tight deadlines and deliver clean, scalable code made all the difference in our funding round.",
      project: "Startup MVP Development",
      location: "Bangalore, India",
      highlight: "Helped secure seed funding",
    },
    {
      id: "6",
      name: "David Thompson",
      role: "Marketing Director",
      company: "GrowthHub Agency",
      image: "/testimonials/david.jpg",
      rating: 5,
      review:
        "We've worked with many developers, but Bhavesh stands out for his reliability and expertise. He transformed our outdated website into a modern, fast-loading platform that our clients love. Highly recommended!",
      project: "Website Redesign & Optimization",
      location: "London, UK",
      highlight: "Improved loading speed by 400%",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? "text-yellow-400" : "text-gray-600"
        } text-sm`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&nbsp;t just take my word for it. Here&nbsp;s what my clients say
            about working with me and the results we&nbsp;ve achieved together.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 relative">
            {/* Quote Icons */}
            <div className="absolute top-6 left-6 text-blue-400/20">
              <FaQuoteLeft className="text-4xl" />
            </div>
            <div className="absolute bottom-6 right-6 text-blue-400/20">
              <FaQuoteRight className="text-4xl" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                {/* Verification Badge */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-gray-900">
                  <FaStar className="text-white text-sm" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {renderStars(currentTestimonial.rating)}
                </div>

                {/* Review */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  {currentTestimonial.review}
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-xl">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-blue-400 font-semibold">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {currentTestimonial.location}
                  </p>

                  {/* Project & Highlight */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <span className="text-gray-400 text-xs">Project:</span>
                      <p className="text-white text-sm font-medium">
                        {currentTestimonial.project}
                      </p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg px-4 py-2 border border-green-500/20">
                      <span className="text-green-400 text-xs">Result:</span>
                      <p className="text-green-400 text-sm font-medium">
                        {currentTestimonial.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <FaArrowRight />
          </button>
        </motion.div>

        {/* Testimonial Thumbnails */}
        <motion.div
          className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`flex-shrink-0 relative transition-all duration-300 ${
                index === currentIndex
                  ? "transform scale-110"
                  : "hover:transform hover:scale-105 opacity-60 hover:opacity-80"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden border-3 ${
                  index === currentIndex
                    ? "border-blue-400 shadow-lg shadow-blue-400/25"
                    : "border-white/20"
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              {index === currentIndex && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Client Satisfaction", value: "98%" },
            { label: "Projects Completed", value: "50+" },
            { label: "Repeat Clients", value: "85%" },
            { label: "Average Rating", value: "4.9/5" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join My Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Let&nbsp;s discuss your project and create something amazing
              together. I&nbsp;m committed to delivering the same level of
              excellence that my clients rave about.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
