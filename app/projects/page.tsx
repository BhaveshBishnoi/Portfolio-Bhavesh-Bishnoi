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
  FaCalendar,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaFilter,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
  FaPlay,
  FaDesktop,
  FaMobile,
  FaTablet,
} from "react-icons/fa";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  images: {
    hero: string;
    gallery: string[];
    mockups?: {
      desktop?: string;
      mobile?: string;
      tablet?: string;
    };
  };
  category: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  status: "completed" | "in-progress" | "maintenance";
  metrics: {
    users?: string;
    revenue?: string;
    views?: string;
    rating?: number;
    performance?: string;
    uptime?: string;
  };
  timeline: {
    duration: string;
    phases: {
      name: string;
      duration: string;
      tasks: string[];
    }[];
  };
  clientTestimonial?: {
    name: string;
    role: string;
    company: string;
    feedback: string;
    rating: number;
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
    tools: string[];
  };
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<string>("portfolio");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    overview: true,
    challenge: false,
    solution: false,
    results: false,
  });

  const categories: Category[] = [
    {
      id: "all",
      name: "All Projects",
      icon: "🚀",
      count: 9,
      description: "Complete portfolio showcase",
    },
    {
      id: "fullstack",
      name: "Full Stack",
      icon: "⚡",
      count: 3,
      description: "End-to-end web applications",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: "🛒",
      count: 3,
      description: "Online shopping platforms",
    },
    {
      id: "cms",
      name: "CMS & Blogs",
      icon: "📝",
      count: 2,
      description: "Content management systems",
    },
    {
      id: "tools",
      name: "Business Tools",
      icon: "🛠️",
      count: 1,
      description: "Productivity applications",
    },
  ];

  const projects: ProjectDetail[] = [
    {
      id: "portfolio",
      title: "Modern Portfolio Website",
      subtitle: "TypeScript + Next.js + Framer Motion",
      description:
        "A cutting-edge portfolio website showcasing modern web development practices",
      overview:
        "This portfolio represents the pinnacle of modern web development, built with Next.js 14, TypeScript for type safety, and Framer Motion for sophisticated animations. The site features a dark theme with glassmorphism effects, responsive design, and optimized performance metrics.",
      challenge:
        "Creating a portfolio that stands out in a crowded market while demonstrating technical expertise, maintaining fast loading times, and ensuring cross-device compatibility. The challenge was to balance visual appeal with performance and accessibility.",
      solution:
        "Implemented a component-based architecture with TypeScript for maintainability, used Framer Motion for performance-optimized animations, and employed modern CSS techniques like CSS Grid and Flexbox for responsive layouts. Utilized Next.js Image optimization and implemented lazy loading for better performance.",
      results: [
        "Achieved 98+ Google PageSpeed Insights score",
        "Reduced bounce rate by 40% compared to previous version",
        "Increased project inquiries by 150%",
        "100% accessibility compliance (WCAG 2.1 AA)",
        "Sub-2 second loading time across all pages",
      ],
      images: {
        hero: "/projects/nextjs/portfolio-hero.webp",
        gallery: [
          "/projects/nextjs/portfolio-1.webp",
          "/projects/nextjs/portfolio-2.webp",
          "/projects/nextjs/portfolio-3.webp",
          "/projects/nextjs/portfolio-4.webp",
        ],
        mockups: {
          desktop: "/projects/nextjs/portfolio-desktop.webp",
          mobile: "/projects/nextjs/portfolio-mobile.webp",
          tablet: "/projects/nextjs/portfolio-tablet.webp",
        },
      },
      category: "fullstack",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      features: [
        "Dark theme with glassmorphism effects",
        "Smooth scroll animations",
        "Interactive project gallery",
        "Contact form with validation",
        "SEO optimized",
        "Mobile-first responsive design",
        "Performance monitoring",
        "Analytics integration",
      ],
      github: "https://github.com/BhaveshBishnoi/Portfolio-Bhavesh-Bishnoi",
      live: "https://bhaveshbishnoi.vercel.app",
      status: "completed",
      metrics: {
        views: "10K+",
        rating: 4.9,
        performance: "98/100",
        uptime: "99.9%",
      },
      timeline: {
        duration: "2 weeks",
        phases: [
          {
            name: "Planning & Design",
            duration: "3 days",
            tasks: [
              "User research and competitor analysis",
              "Wireframing and prototyping",
              "Design system creation",
              "Technology stack selection",
            ],
          },
          {
            name: "Development",
            duration: "8 days",
            tasks: [
              "Component architecture setup",
              "Homepage and navigation development",
              "Project showcase implementation",
              "Animation and interaction design",
              "Contact form and backend integration",
            ],
          },
          {
            name: "Testing & Deployment",
            duration: "3 days",
            tasks: [
              "Cross-browser testing",
              "Performance optimization",
              "SEO implementation",
              "Deployment and monitoring setup",
            ],
          },
        ],
      },
      techStack: {
        frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Next.js API Routes", "Nodemailer"],
        database: [],
        deployment: ["Vercel", "Custom Domain"],
        tools: ["VS Code", "Figma", "Git", "ESLint", "Prettier"],
      },
      challenges: [
        {
          title: "Animation Performance",
          description:
            "Complex animations were causing frame drops on lower-end devices.",
          solution:
            "Implemented GPU-accelerated animations using transform and opacity properties, added reduced motion preferences, and optimized animation triggers.",
        },
        {
          title: "SEO for Single Page Application",
          description:
            "Ensuring proper SEO optimization for a highly interactive SPA.",
          solution:
            "Used Next.js built-in SEO features, implemented proper meta tags, structured data, and ensured server-side rendering for critical content.",
        },
        {
          title: "Cross-Device Consistency",
          description:
            "Maintaining design consistency across various screen sizes and devices.",
          solution:
            "Adopted mobile-first approach, used CSS Grid and Flexbox for flexible layouts, and implemented comprehensive responsive testing.",
        },
      ],
    },
    {
      id: "thebagdis-nextjs",
      title: "TheBagdis E-commerce Platform",
      subtitle: "Full-Stack Next.js E-commerce Solution",
      description:
        "Modern e-commerce platform with advanced features and seamless user experience",
      overview:
        "A comprehensive e-commerce solution built for TheBagdis, featuring product catalog, shopping cart, order management, payment processing, and admin dashboard. The platform handles everything from product browsing to order fulfillment with a focus on user experience and conversion optimization.",
      challenge:
        "Building a scalable e-commerce platform that could handle high traffic, provide seamless checkout experience, integrate with multiple payment gateways, and offer real-time inventory management while maintaining fast loading speeds.",
      solution:
        "Developed using Next.js with PostgreSQL database, implemented Stripe for payments, created custom admin dashboard for inventory management, and used Redis for caching. Employed modern state management and optimized database queries for performance.",
      results: [
        "Achieved 300% increase in conversion rates",
        "Processed $50K+ in transactions within first 3 months",
        "Reduced cart abandonment by 45%",
        "Improved page load times by 60%",
        "Achieved 99.5% uptime since launch",
      ],
      images: {
        hero: "/projects/nextjs/thebagdis-hero.webp",
        gallery: [
          "/projects/nextjs/thebagdis-1.webp",
          "/projects/nextjs/thebagdis-2.webp",
          "/projects/nextjs/thebagdis-3.webp",
          "/projects/nextjs/thebagdis-4.webp",
        ],
        mockups: {
          desktop: "/projects/nextjs/thebagdis-desktop.webp",
          mobile: "/projects/nextjs/thebagdis-mobile.webp",
        },
      },
      category: "ecommerce",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Stripe",
        "Prisma",
      ],
      features: [
        "Product catalog with search and filters",
        "Shopping cart with persistent storage",
        "Secure payment processing",
        "Order tracking system",
        "Admin dashboard",
        "Inventory management",
        "Customer reviews and ratings",
        "Email notifications",
        "Responsive design",
        "SEO optimization",
      ],
      github: "https://github.com/BhaveshBishnoi/TheBagdis-nextjs-project",
      live: "https://thebagdis.vercel.app",
      status: "completed",
      metrics: {
        users: "2K+",
        revenue: "$50K+",
        rating: 4.8,
        performance: "95/100",
      },
      timeline: {
        duration: "6 weeks",
        phases: [
          {
            name: "Requirements & Planning",
            duration: "1 week",
            tasks: [
              "Business requirements gathering",
              "Database schema design",
              "API endpoint planning",
              "UI/UX wireframing",
            ],
          },
          {
            name: "Core Development",
            duration: "3 weeks",
            tasks: [
              "Database setup and models",
              "Authentication system",
              "Product catalog implementation",
              "Shopping cart functionality",
              "Payment gateway integration",
            ],
          },
          {
            name: "Admin Panel & Testing",
            duration: "1.5 weeks",
            tasks: [
              "Admin dashboard development",
              "Order management system",
              "Comprehensive testing",
              "Performance optimization",
            ],
          },
          {
            name: "Deployment & Launch",
            duration: "0.5 weeks",
            tasks: [
              "Production deployment",
              "SSL configuration",
              "Monitoring setup",
              "Go-live support",
            ],
          },
        ],
      },
      clientTestimonial: {
        name: "Rajesh Kumar",
        role: "Founder",
        company: "TheBagdis",
        feedback:
          "Bhavesh delivered an exceptional e-commerce platform that transformed our business. The modern design and smooth functionality have significantly boosted our online sales.",
        rating: 5,
      },
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
        backend: ["Next.js API Routes", "Prisma ORM", "NextAuth.js"],
        database: ["PostgreSQL", "Redis"],
        deployment: ["Vercel", "Railway", "Cloudinary"],
        tools: ["Stripe", "Nodemailer", "Sharp", "Zod"],
      },
      challenges: [
        {
          title: "Real-time Inventory Management",
          description:
            "Ensuring accurate inventory counts across multiple concurrent users.",
          solution:
            "Implemented database transactions and optimistic locking to prevent overselling, with real-time updates using server-sent events.",
        },
        {
          title: "Payment Security",
          description: "Handling sensitive payment information securely.",
          solution:
            "Integrated Stripe with webhook validation, implemented PCI compliance measures, and used secure tokenization for payment processing.",
        },
        {
          title: "Performance with Large Catalog",
          description:
            "Maintaining fast loading times with hundreds of products.",
          solution:
            "Implemented pagination, image optimization, database indexing, and Redis caching for frequently accessed data.",
        },
      ],
    },
    {
      id: "kasutam",
      title: "Kasutam Organic Ghee E-commerce",
      subtitle: "MERN Stack Organic Products Platform",
      description:
        "Specialized e-commerce platform for organic ghee products with subscription features",
      overview:
        "A specialized e-commerce platform designed for Kasutam, focusing on organic ghee products. The platform features product catalog, subscription-based ordering, customer dashboard, payment processing, and comprehensive admin panel with analytics.",
      challenge:
        "Creating a niche e-commerce platform for organic products with unique requirements like subscription orders, perishable product management, and building trust for organic food products online.",
      solution:
        "Built using MERN stack with MongoDB for flexible data storage, implemented subscription logic with cron jobs, created detailed product pages with organic certifications, and integrated multiple payment options including COD for rural customers.",
      results: [
        "Launched with 500+ initial customers",
        "Achieved $25K+ revenue in first quarter",
        "Established 200+ subscription customers",
        "95% customer satisfaction rating",
        "Expanded to 5 major cities",
      ],
      images: {
        hero: "/projects/mern/kasutam-hero.webp",
        gallery: [
          "/projects/mern/kasutam-1.webp",
          "/projects/mern/kasutam-2.webp",
          "/projects/mern/kasutam-3.webp",
        ],
      },
      category: "ecommerce",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
        "Razorpay",
      ],
      features: [
        "Organic product catalog",
        "Subscription-based ordering",
        "Customer dashboard",
        "Multiple payment options",
        "Order tracking",
        "Admin analytics",
        "Inventory management",
        "Email notifications",
        "Mobile responsive",
        "SEO optimized",
      ],
      live: "https://kasutam.com",
      status: "completed",
      metrics: {
        users: "1K+",
        revenue: "$25K+",
        rating: 4.7,
      },
      timeline: {
        duration: "8 weeks",
        phases: [
          {
            name: "Market Research & Planning",
            duration: "1 week",
            tasks: [
              "Organic food market research",
              "Competitor analysis",
              "Feature prioritization",
              "Technical architecture design",
            ],
          },
          {
            name: "Backend Development",
            duration: "3 weeks",
            tasks: [
              "Database design and setup",
              "API development",
              "Authentication system",
              "Payment gateway integration",
              "Subscription logic implementation",
            ],
          },
          {
            name: "Frontend Development",
            duration: "3 weeks",
            tasks: [
              "React component development",
              "Product catalog interface",
              "User dashboard creation",
              "Admin panel development",
              "Responsive design implementation",
            ],
          },
          {
            name: "Testing & Launch",
            duration: "1 week",
            tasks: [
              "End-to-end testing",
              "Performance optimization",
              "Deployment setup",
              "Launch preparation",
            ],
          },
        ],
      },
      techStack: {
        frontend: ["React.js", "Redux", "Material-UI", "Axios"],
        backend: ["Node.js", "Express.js", "JWT", "Bcrypt"],
        database: ["MongoDB", "Mongoose"],
        deployment: ["Heroku", "Netlify", "Cloudinary"],
        tools: ["Stripe", "Razorpay", "Nodemailer", "Multer"],
      },
      challenges: [
        {
          title: "Subscription Management",
          description:
            "Implementing complex subscription logic for recurring orders.",
          solution:
            "Created custom subscription service with flexible scheduling, pause/resume functionality, and automated billing cycles.",
        },
        {
          title: "Rural Market Penetration",
          description:
            "Serving customers in areas with limited digital payment adoption.",
          solution:
            "Integrated cash-on-delivery, provided extensive customer support, and created simplified ordering process for less tech-savvy users.",
        },
        {
          title: "Trust Building for Food Products",
          description:
            "Establishing credibility for organic food products online.",
          solution:
            "Implemented detailed product information, certification displays, customer reviews, and transparent sourcing information.",
        },
      ],
    },
    {
      id: "hindicreator",
      title: "Hindi Creator Tech Blog",
      subtitle: "Technology Blog Platform in Hindi",
      description:
        "Popular Hindi technology blog serving 100K+ monthly readers",
      overview:
        "HindiCreator.com is a comprehensive technology blog platform designed for Hindi-speaking audiences. The platform features tech articles, tutorials, reviews, and news content, serving over 100,000 monthly readers with SEO-optimized content and monetization strategies.",
      challenge:
        "Creating a successful tech blog in Hindi market, competing with established English tech blogs, building audience trust, optimizing for Hindi SEO, and implementing effective monetization without compromising user experience.",
      solution:
        "Built custom WordPress theme optimized for Hindi content, implemented advanced SEO strategies for Hindi keywords, created engaging content strategy, integrated multiple monetization channels, and built strong social media presence.",
      results: [
        "Reached 100K+ monthly organic visitors",
        "Generated consistent $600+ monthly revenue",
        "Ranked #1 for 200+ Hindi tech keywords",
        "Built 25K+ social media following",
        "Featured in major Hindi tech publications",
      ],
      images: {
        hero: "/projects/wordpress/hindicreator-hero.webp",
        gallery: [
          "/projects/wordpress/hindicreator-1.webp",
          "/projects/wordpress/hindicreator-2.webp",
          "/projects/wordpress/hindicreator-3.webp",
        ],
      },
      category: "cms",
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "Google Analytics",
      ],
      features: [
        "Custom WordPress theme",
        "SEO optimized for Hindi content",
        "Social media integration",
        "Email newsletter system",
        "Comment system",
        "Related posts",
        "Advertisement management",
        "Performance optimization",
        "Mobile responsive",
        "Analytics integration",
      ],
      live: "https://hindicreator.com",
      status: "maintenance",
      metrics: {
        users: "100K+",
        revenue: "$600/month",
        views: "500K+",
        rating: 4.7,
      },
      timeline: {
        duration: "Ongoing (4+ years)",
        phases: [
          {
            name: "Initial Setup & Content Strategy",
            duration: "1 month",
            tasks: [
              "WordPress setup and customization",
              "Content strategy development",
              "SEO foundation setup",
              "Social media account creation",
            ],
          },
          {
            name: "Content Creation & Growth",
            duration: "6 months",
            tasks: [
              "Regular content publishing",
              "SEO optimization",
              "Social media marketing",
              "Community building",
            ],
          },
          {
            name: "Monetization & Scale",
            duration: "Ongoing",
            tasks: [
              "Advertisement integration",
              "Affiliate marketing setup",
              "Sponsored content",
              "Performance optimization",
            ],
          },
        ],
      },
      techStack: {
        frontend: ["WordPress", "Custom PHP Theme", "JavaScript", "CSS3"],
        backend: ["WordPress", "PHP", "MySQL"],
        database: ["MySQL"],
        deployment: ["Shared Hosting", "Cloudflare CDN"],
        tools: [
          "Google Analytics",
          "Search Console",
          "Yoast SEO",
          "Social Media APIs",
        ],
      },
      challenges: [
        {
          title: "Hindi SEO Optimization",
          description:
            "Limited tools and resources for Hindi keyword research and SEO.",
          solution:
            "Developed custom Hindi keyword research methodology, optimized for Devanagari script, and created comprehensive Hindi meta tag strategy.",
        },
        {
          title: "Content Quality vs Quantity",
          description:
            "Balancing regular publishing schedule with high-quality content.",
          solution:
            "Established editorial calendar, created content templates, and implemented quality check processes for consistent output.",
        },
        {
          title: "Monetization Balance",
          description:
            "Generating revenue without compromising user experience.",
          solution:
            "Implemented strategic ad placement, focused on relevant affiliate products, and maintained editorial integrity in sponsored content.",
        },
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const selectedProjectData = projects.find(
    (project) => project.id === selectedProject
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? "text-yellow-400" : "text-gray-600"
          } text-sm`}
      />
    ));
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-black via-gray-950 to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into my projects with detailed explanations, challenges
            faced, solutions implemented, and measurable results achieved.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-75">{category.description}</div>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project List */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
              <div className="space-y-4">
                {filteredProjects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${selectedProject === project.id
                        ? "bg-blue-600/20 border border-blue-500/30 shadow-lg"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={project.images.hero}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-semibold text-sm mb-1 ${selectedProject === project.id
                              ? "text-blue-400"
                              : "text-white"
                            }`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs mb-2">
                          {project.subtitle}
                        </p>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${project.status === "completed"
                                ? "bg-green-500/20 text-green-400"
                                : project.status === "in-progress"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-orange-500/20 text-orange-400"
                              }`}
                          >
                            {project.status}
                          </span>
                          {project.metrics.rating && (
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400 text-xs" />
                              <span className="text-xs text-gray-400">
                                {project.metrics.rating}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="lg:col-span-2"
            key={selectedProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedProjectData && (
              <div className="space-y-8">
                {/* Hero Section */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={selectedProjectData.images.hero}
                      alt={selectedProjectData.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        {selectedProjectData.title}
                      </h1>
                      <p className="text-blue-400 font-semibold text-lg">
                        {selectedProjectData.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {selectedProjectData.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {selectedProjectData.metrics.users && (
                        <div className="text-center">
                          <FaUsers className="text-blue-400 text-xl mx-auto mb-2" />
                          <div className="text-white font-bold">
                            {selectedProjectData.metrics.users}
                          </div>
                          <div className="text-gray-400 text-sm">Users</div>
                        </div>
                      )}
                      {selectedProjectData.metrics.revenue && (
                        <div className="text-center">
                          <FaDollarSign className="text-green-400 text-xl mx-auto mb-2" />
                          <div className="text-white font-bold">
                            {selectedProjectData.metrics.revenue}
                          </div>
                          <div className="text-gray-400 text-sm">Revenue</div>
                        </div>
                      )}
                      {selectedProjectData.metrics.performance && (
                        <div className="text-center">
                          <FaRocket className="text-purple-400 text-xl mx-auto mb-2" />
                          <div className="text-white font-bold">
                            {selectedProjectData.metrics.performance}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Performance
                          </div>
                        </div>
                      )}
                      {selectedProjectData.metrics.rating && (
                        <div className="text-center">
                          <FaStar className="text-yellow-400 text-xl mx-auto mb-2" />
                          <div className="text-white font-bold">
                            {selectedProjectData.metrics.rating}/5
                          </div>
                          <div className="text-gray-400 text-sm">Rating</div>
                        </div>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {selectedProjectData.github && (
                        <a
                          href={selectedProjectData.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <FaGithub />
                          View Code
                        </a>
                      )}
                      {selectedProjectData.live && (
                        <a
                          href={selectedProjectData.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expandable Sections */}
                  <div className="space-y-4">
                    {/* Overview */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                      <button
                        onClick={() => toggleSection("overview")}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h2 className="text-xl font-bold text-white">
                          Project Overview
                        </h2>
                        {expandedSections.overview ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {expandedSections.overview && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">
                            {selectedProjectData.overview}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Challenge */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                      <button
                        onClick={() => toggleSection("challenge")}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h2 className="text-xl font-bold text-white">
                          The Challenge
                        </h2>
                        {expandedSections.challenge ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {expandedSections.challenge && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {selectedProjectData.challenge}
                          </p>
                          <div className="space-y-4">
                            {selectedProjectData.challenges.map(
                              (challenge, index) => (
                                <div
                                  key={index}
                                  className="border-l-4 border-red-500 pl-4"
                                >
                                  <h4 className="text-white font-semibold mb-2">
                                    {challenge.title}
                                  </h4>
                                  <p className="text-gray-400 text-sm mb-2">
                                    {challenge.description}
                                  </p>
                                  <p className="text-green-400 text-sm">
                                    <strong>Solution:</strong>{" "}
                                    {challenge.solution}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Solution */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                      <button
                        onClick={() => toggleSection("solution")}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h2 className="text-xl font-bold text-white">
                          The Solution
                        </h2>
                        {expandedSections.solution ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {expandedSections.solution && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {selectedProjectData.solution}
                          </p>

                          {/* Tech Stack */}
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-4">
                              Technology Stack
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {Object.entries(
                                selectedProjectData.techStack
                              ).map(
                                ([category, techs]) =>
                                  techs.length > 0 && (
                                    <div key={category}>
                                      <h5 className="text-blue-400 font-medium mb-2 capitalize">
                                        {category}
                                      </h5>
                                      <div className="flex flex-wrap gap-2">
                                        {techs.map((tech, index) => (
                                          <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )
                              )}
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <h4 className="text-white font-semibold mb-4">
                              Key Features
                            </h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {selectedProjectData.features.map(
                                (feature, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2"
                                  >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-gray-300 text-sm">
                                      {feature}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Results */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                      <button
                        onClick={() => toggleSection("results")}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h2 className="text-xl font-bold text-white">
                          Results & Impact
                        </h2>
                        {expandedSections.results ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {expandedSections.results && (
                        <div className="px-6 pb-6">
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {selectedProjectData.results.map(
                              (result, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20"
                                >
                                  <FaRocket className="text-green-400 mt-1 flex-shrink-0" />
                                  <span className="text-green-300 text-sm">
                                    {result}
                                  </span>
                                </div>
                              )
                            )}
                          </div>

                          {/* Client Testimonial */}
                          {selectedProjectData.clientTestimonial && (
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                              <h4 className="text-white font-semibold mb-4">
                                Client Feedback
                              </h4>
                              <div className="flex gap-1 mb-3">
                                {renderStars(
                                  selectedProjectData.clientTestimonial.rating
                                )}
                              </div>
                              <blockquote className="text-gray-300 italic mb-4">
                                {selectedProjectData.clientTestimonial.feedback}
                              </blockquote>
                              <div>
                                <div className="text-white font-semibold">
                                  {selectedProjectData.clientTestimonial.name}
                                </div>
                                <div className="text-blue-400 text-sm">
                                  {selectedProjectData.clientTestimonial.role}{" "}
                                  at{" "}
                                  {
                                    selectedProjectData.clientTestimonial
                                      .company
                                  }
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timeline */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                      <h2 className="text-xl font-bold text-white mb-6">
                        Project Timeline
                      </h2>
                      <div className="flex items-center gap-2 mb-6">
                        <FaCalendar className="text-blue-400" />
                        <span className="text-gray-300">
                          Total Duration:{" "}
                          {selectedProjectData.timeline.duration}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {selectedProjectData.timeline.phases.map(
                          (phase, index) => (
                            <div key={index} className="relative">
                              <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="text-white font-semibold">
                                      {phase.name}
                                    </h4>
                                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                                      {phase.duration}
                                    </span>
                                  </div>
                                  <ul className="space-y-1">
                                    {phase.tasks.map((task, taskIndex) => (
                                      <li
                                        key={taskIndex}
                                        className="text-gray-300 text-sm flex items-start gap-2"
                                      >
                                        <span className="text-blue-400 mt-1">
                                          •
                                        </span>
                                        {task}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              {index <
                                selectedProjectData.timeline.phases.length -
                                1 && (
                                  <div className="absolute left-4 top-8 w-0.5 h-8 bg-gray-700"></div>
                                )}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Gallery */}
                    {selectedProjectData.images.gallery.length > 0 && (
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6">
                          Project Gallery
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedProjectData.images.gallery.map(
                            (image, index) => (
                              <div
                                key={index}
                                className="relative h-48 rounded-xl overflow-hidden"
                              >
                                <Image
                                  src={image}
                                  alt={`${selectedProjectData.title
                                    } screenshot ${index + 1}`}
                                  fill
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Device Mockups */}
                    {selectedProjectData.images.mockups && (
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6">
                          Responsive Design
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                          {selectedProjectData.images.mockups.desktop && (
                            <div className="text-center">
                              <FaDesktop className="text-blue-400 text-2xl mx-auto mb-3" />
                              <h4 className="text-white font-semibold mb-3">
                                Desktop
                              </h4>
                              <div className="relative h-32 rounded-lg overflow-hidden">
                                <Image
                                  src={
                                    selectedProjectData.images.mockups.desktop
                                  }
                                  alt="Desktop view"
                                  fill
                                  className="object-cover"
                                  sizes="300px"
                                />
                              </div>
                            </div>
                          )}
                          {selectedProjectData.images.mockups.tablet && (
                            <div className="text-center">
                              <FaTablet className="text-green-400 text-2xl mx-auto mb-3" />
                              <h4 className="text-white font-semibold mb-3">
                                Tablet
                              </h4>
                              <div className="relative h-32 rounded-lg overflow-hidden">
                                <Image
                                  src={
                                    selectedProjectData.images.mockups.tablet
                                  }
                                  alt="Tablet view"
                                  fill
                                  className="object-cover"
                                  sizes="300px"
                                />
                              </div>
                            </div>
                          )}
                          {selectedProjectData.images.mockups.mobile && (
                            <div className="text-center">
                              <FaMobile className="text-purple-400 text-2xl mx-auto mb-3" />
                              <h4 className="text-white font-semibold mb-3">
                                Mobile
                              </h4>
                              <div className="relative h-32 rounded-lg overflow-hidden">
                                <Image
                                  src={
                                    selectedProjectData.images.mockups.mobile
                                  }
                                  alt="Mobile view"
                                  fill
                                  className="object-cover"
                                  sizes="300px"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center pt-8">
                    <Link
                      href="/"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <FaArrowLeft />
                      Back to Home
                    </Link>
                    <Link
                      href="#contact"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Start Your Project
                      <FaRocket />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
