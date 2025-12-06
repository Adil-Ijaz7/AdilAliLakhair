import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-5 transition-all duration-300 ${
        hasShadow 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" 
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-9 cursor-pointer"
          src="/assets/logo.svg"
          alt="Logo"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button 
                onClick={() => scrollToSection(section)}
                className="text-black dark:text-white"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black dark:bg-white flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
          
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isDark ? <HiSun className="text-yellow-400" size={20} /> : <HiMoon className="text-gray-700" size={20} />}
          </motion.button>
        </ul>

        <motion.a
          href="/assets/Resume.pdf"
          download="Adil_Ali_Lakhair_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
          <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        <motion.button
          className="lg:hidden text-2xl text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow"
          >
            <button
              className="absolute top-5 right-5 text-2xl text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="border-b border-black dark:border-white"
                  whileHover={{ scale: 1.1 }}
                >
                  <button 
                    onClick={() => scrollToSection(section)}
                    className="text-black dark:text-white"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDark ? <HiSun className="text-yellow-400" size={20} /> : <HiMoon className="text-gray-700" size={20} />}
              </motion.button>

              <motion.a
                href="/assets/Resume.pdf"
                download="Adil_Ali_Lakhair_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
