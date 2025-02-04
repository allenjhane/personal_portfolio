import React from 'react';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython,
    FaDatabase,  
    FaJava, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs
} from "react-icons/fa"; // imports all icons from react-icons/fa

import { 
    SiMongodb,  
    SiGooglecloud, 
    SiFirebase, 
    SiCplusplus
} from "react-icons/si";

const TechStack = () => {
    return (
        <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
            <div className="flex space-x-6 text-3xl">
                <FaReact className="text-blue-400" title="React" />
                <FaNodeJs className="text-green-500" title="Node.js" />
                <FaPython className="text-yellow-500" title="Python" />
                <FaJava className="text-red-500" title="Java" />
                <SiCplusplus className="text-blue-600" title="C++" />
                <SiMongodb className="text-green-700" title="MongoDB" />
                <FaDatabase className="text-gray-600" title="Microsoft SQL Server" />
                <SiGooglecloud className="text-blue-400" title="Google Cloud Platform" />
                <SiFirebase className="text-yellow-500" title="Firestore" />
                <FaHtml5 className="text-orange-600" title="HTML" />
                <FaCss3Alt className="text-blue-600" title="CSS" />
                <FaJs className="text-yellow-400" title="JavaScript" />
            </div>
        </div>
    );
};
export default TechStack;