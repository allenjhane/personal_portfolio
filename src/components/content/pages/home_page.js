import React from 'react';
import HeaderSection from "../../header/header_section";
import TechStack from "../tech_stack";
import JourneyPage from './journey_page';
import { motion } from "framer-motion";

const HomePage = ({ darkMode }) => {
  const borderColor = darkMode ? "#25AFFF" : "#D8B4FE"; 
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      {/* Header Section - Full Width */}
      <motion.div
        className={`w-full max-w-6xl p-8 backdrop-blur-sm ${
          darkMode 
            ? 'bg-gray-900 bg-opacity-70' 
            : 'bg-white bg-opacity-80'
        } rounded-2xl flex flex-col items-center`}
        style={{ borderWidth: '5px', borderStyle: 'solid', borderColor: borderColor}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderSection />
      </motion.div>

      {/* Side by Side Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Tech Stack Container - Left Side */}
        <motion.div
          className={`flex-1 p-8 backdrop-blur-sm ${
            darkMode 
              ? 'bg-gray-900 bg-opacity-70' 
              : 'bg-white bg-opacity-80'
          } rounded-2xl flex flex-col items-center`}
          style={{ borderWidth: '5px', borderStyle: 'solid', borderColor: borderColor}}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <TechStack />
        </motion.div>

        {/* Journey Container - Right Side */}
        <motion.div
          className={`flex-1 p-8 backdrop-blur-sm ${
            darkMode 
              ? 'bg-gray-900 bg-opacity-70' 
              : 'bg-white bg-opacity-80'
          } rounded-2xl`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ borderWidth: '5px', borderStyle: 'solid', borderColor: borderColor }}
        >
          <JourneyPage darkMode={darkMode} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;