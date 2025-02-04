import React, { useState, useEffect } from "react";
import { 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope
} from "react-icons/fa"; // imports all icons from react-icons/fa

const FooterInfo = () => {
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
        <div className="flex flex-col items-center mt-8">
        
        {/* Visitor Count */}
        <p className="mb-4 text-lg font-semibold">This site had {visitorCount} visitors 💗</p>

        {/* Social Media Links */}
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
    );
};
export default FooterInfo;