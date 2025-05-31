import React from 'react';
import HeaderSection from "../../header/header_section";
import TechStack from "../tech_stack";
import JourneyPage from './journey_page';
import { motion } from "framer-motion";

const HomePage = ({ darkMode }) =>(
  <div className="w-full flex flex-col items-center space-y-8">
    {/* Main About Me Container */}
    <div className={`w-full max-w-6xl p-8 backdrop-blur-sm border-2 ${
      // You'll need to pass darkMode as a prop or use context
      darkMode 
        ? 'bg-gray-900 bg-opacity-70 border-cyan-400 border-opacity-30' 
        : 'bg-white bg-opacity-80 border-purple-400 border-opacity-40'
    } rounded-2xl flex flex-col items-center`}>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderSection />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <TechStack />
      </motion.div>
    </div>

    {/* Separate Journey Container */}
    <motion.div
      className={`w-full max-w-6xl p-8 backdrop-blur-sm border-2 ${
        darkMode 
          ? 'bg-gray-900 bg-opacity-70 border-cyan-400 border-opacity-30' 
          : 'bg-white bg-opacity-80 border-purple-400 border-opacity-40'
      } rounded-2xl`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <JourneyPage />
    </motion.div>
  </div>
);

export default HomePage;