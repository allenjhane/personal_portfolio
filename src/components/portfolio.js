import React, { useState } from "react";
import "../styles.css";
import FooterInfo from "./footer/footer_info";
import HeaderSection from "./header/header_section";
import TechStack from "./content/tech_stack";
import Tabs from "./content/tab_section/tabs";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("journey");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-pink-200 flex flex-col items-center"
          : "min-h-screen bg-pink-200 text-black flex flex-col items-center"
      }
    >
      {/* Fixed Header Toolbar */}
      <div
        className={
          darkMode
            ? "fixed top-0 left-0 right-0 bg-pink-200 text-black shadow-none flex items-center justify-end px-6 py-3 z-50"
            : "fixed top-0 left-0 right-0 bg-[#FAFAFA] text-black shadow-none flex items-center justify-end px-6 py-3 z-50"
        }
      >
        <div className="flex items-center space-x-6 absolute left-6">
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars className="text-2xl" />
            </button>
          ) : (
            <nav className="flex space-x-6">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#games" className="hover:underline">
                Games
              </a>
              <a href="#suggestions" className="hover:underline">
                Suggestions
              </a>
            </nav>
          )}
        </div>

        <img src="flower.png" alt="Flower" className="h-8 absolute left-1/2 transform -translate-x-1/2" />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={
            darkMode
              ? "p-2 rounded-full bg-[#FAFAFA]"
              : "p-2 rounded-full bg-gray-900"
          }
        >
          {darkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-[#FAFAFA]" />
          )}
        </button>
      </div>

      {menuOpen && isMobile && (
        <div className="absolute top-16 left-0 right-0 bg-#FAFAFA text-black shadow-md p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#projects" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#games" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Games
            </a>
            <a href="#suggestions" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Suggestions
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-16 w-full flex flex-col items-center">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderSection />
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <TechStack />
        </motion.div>

        <motion.div
          className="mt-6 w-full max-w-4xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FooterInfo />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
