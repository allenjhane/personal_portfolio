import React from "react";
import Card from "./ui/card";
import Button from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Allen Jhane Dela Cruz</h1>
        <p className="text-lg text-gray-600">Aspiring Software Engineer | Air Force Veteran</p>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[1, 2, 3].map((item) => (
          <Card key={item} title={`Project ${item}`} description="Short description of the project goes here.">
            <Button className="mt-4">View More</Button>
          </Card>
        ))}
      </motion.div>
      
      <div className="flex space-x-4 mt-8">
        <a href="https://github.com/allenjhane" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/allenjhanedelacruz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
          <FaLinkedin />
        </a>
        <a href="mailto:allenjhane@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 text-2xl">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
