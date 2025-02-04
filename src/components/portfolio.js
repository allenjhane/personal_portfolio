import React, { useState } from "react";
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

  return (

    /* Main Container Background of Light/Dark Mode*/
    <div className={darkMode ? "min-h-screen bg-gray-900 text-pink-300 flex flex-col items-center" : "min-h-screen bg-pink-100 text-gray-600 flex flex-col items-center"}>
      <div className="w-full flex justify-end p-4">
        <button onClick={() => setDarkMode(!darkMode)} 
        className="theme-toggle-button fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg z-50">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
        </button>
      </div>
      
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
      <motion.div 
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
