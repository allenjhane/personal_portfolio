import React from 'react';
import "../../styles.css";
import { 
    FaReact, 
    FaNodeJs, 
    FaPython,
    FaDatabase,  
    FaJava, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs
} from "react-icons/fa";

import { 
    SiMongodb,  
    SiGooglecloud, 
    SiFirebase, 
    SiCplusplus,
    SiTailwindcss
} from "react-icons/si";

const TechStack = () => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-6 text-4xl">
                <FaReact className="text-blue-400 tech-icon" title="React" />
                <FaNodeJs className="text-green-500 tech-icon" title="Node.js" />
                <FaPython className="text-yellow-500 tech-icon" title="Python" />
                <FaJava className="text-red-500 tech-icon" title="Java" />
                <SiCplusplus className="text-blue-600 tech-icon" title="C++" />
                <SiMongodb className="text-green-700 tech-icon" title="MongoDB" />
                <FaDatabase className="text-gray-600 tech-icon" title="Microsoft SQL Server" />
                <SiGooglecloud className="text-blue-400 tech-icon" title="Google Cloud Platform" />
                <SiFirebase className="text-yellow-500 tech-icon" title="Firestore" />
                <FaHtml5 className="text-orange-600 tech-icon" title="HTML" />
                <FaCss3Alt className="text-blue-600 tech-icon" title="CSS" />
                <FaJs className="text-yellow-400 tech-icon" title="JavaScript" />
                <SiTailwindcss className="text-blue-400 tech-icon" title="Tailwind CSS" />
            </div>
        </div>
    );
};

export default TechStack;