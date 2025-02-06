import React, { useState, useEffect } from 'react';
import EmailConfig from './email_config';
import { 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope
} from "react-icons/fa"; // imports all icons from react-icons/fa


const HeaderSection = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [showEmailPopup, setShowEmailPopup] = useState(false);   

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
        <div className="text-center mb-8">
            {/* Header Text */}
            <h1 className="text-4xl font-bold mb-2 pt-8">Allen Jhane Dela Cruz</h1>
            <p className="text-lg">Aspiring Software Engineer | Air Force Veteran</p>
            
            {/* Animated GIF Section */}
            <div className="flex justify-center mb-4">
            <iframe 
                src="https://giphy.com/embed/lYV7UP5smAzkiZkXgi" 
                width="200" 
                height="200" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            </div>

            {/* About Me Section */}
            <p className="text-md max-w-xl mt-4">
                Hi, I'm Jhane! I'm passionate about building innovative and efficient software solutions. 
                Experienced in full-stack development, cloud computing, and problem-solving. 
                Dedicated to continuous learning and leveraging technology to drive impactful change.
            </p>

            {/* Email Popup */}
            <div>
              <EmailConfig showEmailPopup={showEmailPopup} setShowEmailPopup={setShowEmailPopup} />
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 py-4">
                <a href="https://github.com/allenjhane" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl">
                    <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
                    <FaLinkedin />
                </a>
                <button onClick={() => setShowEmailPopup(true)} className="text-red-500 hover:text-red-700 text-2xl">
                    <FaEnvelope />
                </button>
            </div>

            {/* Visitor Count */}
            <p className="mb-4 text-lg font-semibold pt-7 pb-0">This site had {visitorCount} visitors 💗</p>
        </div>
    );
};
export default HeaderSection;