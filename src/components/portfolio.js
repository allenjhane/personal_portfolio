import React, { useState } from "react";
import "../styles.css";
import Card from "./ui/card";
import Button from "./ui/button";
import FooterInfo from "./footer/footer_info";
import HeaderSection from "./header/header_section";
import TechStack from "./content/tech_stack";
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

      {/* Projects Section */}
      {/* <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[1, 2, 3].map((item) => (
          <Card key={item} 
                title={<span className="text-black">{`Project ${item}`}</span>} 
                description="Short description of the project goes here." 
                className={darkMode ? "bg-gray-800 text-pink-300" : "bg-white text-black"}>
            <Button className="mt-4">View More</Button>
          </Card>
        ))}
      </motion.div> */}

      {/* Tab Section */}
      <div className="mt-6 w-full max-w-4xl">
        <div className="relative flex w-full">
          {['journey', 'projects', 'games', 'suggestions'].map((tab) => (
            <button 
              key={tab} 
              className={`flex-1 text-center px-6 py-3 transition-all relative z-10 rounded-t-lg border-none ${activeTab === tab ? 'bg-white text-black shadow-none' : 'bg-gray-200 text-gray-600 shadow-md shadow-gray-400/50'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="border border-white min-h-[300px] bg-white text-black shadow-lg rounded-b-lg rounded-t-none p-6">
          {activeTab === "journey" && <p>My journey as a software engineer...</p>}
          {activeTab === "projects" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} title={`Project ${item}`} description="Short description of the project goes here." />
              ))}
            </div>
          )}
          {activeTab === "games" && <p>Some of the games I've worked on...</p>}
          {activeTab === "suggestions" && <p>Leave a suggestion for my portfolio!</p>}
        </div>
      </div>
      
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
