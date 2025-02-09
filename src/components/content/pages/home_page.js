import React from 'react';
import FooterInfo from "../../footer/footer_info";
import HeaderSection from "../../header/header_section";
import TechStack from "../tech_stack";
import JourneyPage from './journey_page';
import { motion } from "framer-motion";

const HomePage = () => (
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
        <JourneyPage />
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
  );
export default HomePage;