import React, { useState } from "react";
import "../styles.css";
import FooterInfo from "./footer/footer_info";
import HeaderSection from "./header/header_section";
import TechStack from "./content/tech_stack";
import Tabs from "./content/tab_section/tabs";
import { motion } from "framer-motion";
import {  
  FaMoon, 
  FaSun,
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase
} from "react-icons/fa"; // imports all icons from react-icons/fa

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("journey");

  return (

    /* Main Container Background of Light/Dark Mode*/
    <div className={darkMode ? "min-h-screen bg-gray-900 text-pink-300 flex flex-col items-center" : "min-h-screen bg-pink-200 text-black flex flex-col items-center"}>
      {/* Dark Mode Toggle Button */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`theme-toggle-button fixed top-4 right-4 p-3 rounded-full shadow-lg z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
      </button>
      
      {/* Header Section */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderSection />
      </motion.div>
      
    {/* Tech Stack Section */}
    <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
    >
      <TechStack />
    </motion.div>

      {/* Tab Section */}
      <motion.div 
        className="mt-6 w-full max-w-4xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
      
      {/* Footer Section */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FooterInfo />
      </motion.div>
    </div>
  );
};

export default Portfolio;
