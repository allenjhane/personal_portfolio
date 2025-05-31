import React from 'react';
import FooterInfo from "../../footer/footer_info";
import HeaderSection from "../../header/header_section";
import TechStack from "../tech_stack";
import JourneyPage from './journey_page';
import { motion } from "framer-motion";

const SuggestionsPage = () => (
  <div className="min-h-screen flex items-center justify-center p-6">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Suggestions</h2>
      <p className="text-lg">Have ideas or feedback? Let me know...</p>
    </div>
  </div>
);

export default SuggestionsPage;