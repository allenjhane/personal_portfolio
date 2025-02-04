import React, { useState, useEffect } from "react";
import Card from "./ui/card";
import Button from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    if (storedCount) {
      setVisitorCount(parseInt(storedCount) + 1);
    } else {
      setVisitorCount(1);
    }
    localStorage.setItem("visitorCount", visitorCount);
  }, []);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-pink-300 flex flex-col items-center" : "min-h-screen bg-pink-200 text-gray-600 flex flex-col items-center"}>
      <div className="w-full flex justify-end p-4">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
        </button>
      </div>
      
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Allen Jhane Dela Cruz</h1>
        <p className={darkMode ? "text-white text-lg" : "text-gray-500 text-lg"}>Aspiring Software Engineer | Air Force Veteran</p>
        <p className="text-md max-w-xl mt-4">ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚</p>
        <p className={darkMode ? "text-white text-md max-w-xl mt-4" : "text-gray-500 text-md max-w-xl mt-4"}>
          Hi, I'm Jhane! I'm passionate about building innovative and efficient software solutions. 
          Experienced in full-stack development, cloud computing, and problem-solving. 
          Dedicated to continuous learning and leveraging technology to drive impactful change.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[1, 2, 3].map((item) => (
          <Card key={item} title={<span className="text-black">{`Project ${item}`}</span>} description="Short description of the project goes here." className={darkMode ? "bg-gray-800 text-pink-300" : "bg-white text-black"}>
            <Button className="mt-4">View More</Button>
          </Card>
        ))}
      </motion.div>
      
      <div className="flex flex-col items-center mt-8">
        <p className="mb-4 text-lg font-semibold">This site had {visitorCount} visitors 💗</p>
        <div className="flex space-x-4">
          <a href="https://github.com/allenjhane" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
