import React from 'react';
import FooterInfo from "../../footer/footer_info";
import HeaderSection from "../../header/header_section";
import TechStack from "../tech_stack";
import JourneyPage from './journey_page';
import { motion } from "framer-motion";

const ProjectsPage = () => (
  <div className="min-h-screen flex items-center justify-center p-6">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p className="text-lg">Here are some of my featured projects...</p>
    </div>
  </div>
);

export default ProjectsPage;