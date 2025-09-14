"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoMenu,
  IoClose,
  IoHome,
  IoPersonOutline,
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoSchoolOutline,
  IoMailOutline,
  IoStarOutline,
  IoAppsOutline,
} from "react-icons/io5";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems: NavItem[] = React.useMemo(
    () => [
      { name: "Home", href: isHome ? "#home" : "/", icon: IoHome },
      {
        name: "Services",
        href: isHome ? "#services" : "/#services",
        icon: IoAppsOutline,
      },
      {
        name: "Skills",
        href: isHome ? "#skills" : "/#skills",
        icon: IoCodeSlashOutline,
      },
      {
        name: "Experience",
        href: isHome ? "#experience" : "/#experience",
        icon: IoBriefcaseOutline,
      },
      {
        name: "Education",
        href: isHome ? "#education" : "/#education",
        icon: IoSchoolOutline,
      },
      {
        name: "Projects",
        href: isHome ? "#projects" : "/projects",
        icon: IoPersonOutline,
      },
      {
        name: "Testimonials",
        href: isHome ? "#testimonials" : "/#testimonials",
        icon: IoStarOutline,
      },
      {
        name: "Contact",
        href: isHome ? "#contact" : "/#contact",
        icon: IoMailOutline,
      },
    ],
    [isHome]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems
        .map((item) => item.name.toLowerCase())
        .filter((name) => name !== "projects");
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled || isOpen
            ? "backdrop-blur-xl bg-gray-900/80 border-b border-white/10"
            : "backdrop-blur-sm bg-gray-900/40"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/"
              onClick={(e) => handleClick(e, isHome ? "#home" : "/")}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Bhavesh
              </span>
              <span className="text-white ml-1">Bishnoi</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item, index) => {
              const isActive =
                activeSection === item.name.toLowerCase() ||
                (item.href.includes("projects") &&
                  pathname.includes("projects"));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon
                    className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "text-blue-400" : ""
                    }`}
                  />
                  <span className="text-sm font-medium">{item.name}</span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-20 p-2 text-white hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoClose size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="py-6 space-y-2">
                {navItems.map((item, index) => {
                  const isActive =
                    activeSection === item.name.toLowerCase() ||
                    (item.href.includes("projects") &&
                      pathname.includes("projects"));

                  return (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <item.icon
                          className={`text-xl ${
                            isActive ? "text-blue-400" : ""
                          }`}
                        />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA Button */}
                <motion.div variants={itemVariants} className="pt-4">
                  <Link
                    href="#contact"
                    onClick={(e) => handleClick(e, "#contact")}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <IoMailOutline className="text-xl" />
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
