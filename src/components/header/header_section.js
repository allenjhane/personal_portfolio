import React, { useState, useEffect } from 'react';
import { 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope
} from "react-icons/fa"; // imports all icons from react-icons/fa

const HeaderSection = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [fromEmail, setFromEmail] = useState("");
    const [message, setMessage] = useState("");
    const recipientEmail = "allenjhane@gmail.com"; // Replace with your actual email

    // const handleSendEmail = () => {
    //     if (!fromEmail || !message) {
    //       alert("Please fill in all fields.");
    //       return;
    //     }
    
    // const mailtoLink = `mailto:${recipientEmail}?subject=New Contact Message&body=From: ${fromEmail}%0D%0A%0D%0A${message}`;
    // window.location.href = mailtoLink;
    // setShowEmailPopup(false);
    // setFromEmail("");
    // setMessage("");
    // };

    const handleSendEmail = async () => {
        if (!fromEmail || !message) {
          alert("Please fill in all fields.");
          return;
        }
      
        try {
          const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fromEmail, message }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            alert("Email sent successfully!");
            setShowEmailPopup(false);
            setFromEmail("");
            setMessage("");
          } else {
            alert(`Error: ${data.error}`);
          }
        } catch (error) {
          alert("Failed to send email. Please try again later.");
          console.error("Error:", error);
        }
      };      

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
            {showEmailPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-bold mb-4">Contact Me</h2>
                    <label className="block text-gray-700">To:</label>
                    <input type="text" className="w-full p-2 border rounded mb-2 bg-gray-200" value={recipientEmail} disabled />
                    <label className="block text-gray-700">From:</label>
                    <input type="email" className="w-full p-2 border rounded mb-2" placeholder="Your Email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} />
                    <label className="block text-gray-700">Message:</label>
                    <textarea className="w-full p-2 border rounded mb-4" placeholder="Write your message here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <div className="flex justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSendEmail}>Send</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowEmailPopup(false)}>Close</button>
                    </div>
                </div>
                </div>
            )}

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