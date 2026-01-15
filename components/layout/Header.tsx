"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoMenu,
  IoClose,
  IoHome,
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoSchoolOutline,
  IoMailOutline,
  IoAppsOutline,
  IoFolderOutline,
  IoStatsChartOutline,
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
        name: "Skills",
        href: isHome ? "#skills" : "/#skills",
        icon: IoCodeSlashOutline,
      },
      {
        name: "Services",
        href: isHome ? "#services" : "/#services",
        icon: IoAppsOutline,
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
        icon: IoFolderOutline,
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
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "py-2" : "py-4"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${isScrolled || isOpen
            ? "backdrop-blur-xl bg-black/90 border-b border-white/10 shadow-lg"
            : "backdrop-blur-md bg-black/70 border-b border-white/5"
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
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
            >
              <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg">
                <IoStatsChartOutline className="text-white text-xl" />
              </div>
              <div>
                <span className="text-white">Bhavesh</span>
                <span className="text-gray-400 ml-1">Bishnoi</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-2"
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
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 group ${isActive
                      ? "text-white bg-gray-800/50 shadow-lg shadow-gray-900/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <item.icon
                    className={`text-lg transition-all duration-300 ${isActive
                        ? "text-white scale-110"
                        : "group-hover:scale-110"
                      }`}
                  />
                  <span className="text-sm font-medium">{item.name}</span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-700/30 transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-600/30"
            >
              <IoMailOutline className="text-lg" />
              <span>Get In Touch</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-20 p-2 text-white hover:text-gray-300 transition-colors duration-300"
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
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                            ? "text-white bg-gray-800/50 border border-gray-700/50 shadow-lg"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <item.icon
                          className={`text-xl ${isActive ? "text-white" : ""
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
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-700/30 transition-all duration-300 border border-gray-600/30"
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
