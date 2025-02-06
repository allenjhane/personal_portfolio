import React, { useState } from 'react';

const EmailConfig = ({ showEmailPopup, setShowEmailPopup }) => {
    const [fromName, setFromName]= useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [message, setMessage] = useState("");

    // logic to try to send an email
    const handleSendEmail = async () => {
        if (!fromName || !fromEmail || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
        // test email sending
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fromName, fromEmail, message }),
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
        // error handling for a failed email
        } catch (error) {
            alert("Failed to send email. Please try again later.");
            console.error("Error:", error);
        }
    }; 

    return (
        <div>
            {showEmailPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl text-black font-bold mb-4">Contact Me</h2>
                        <label className="block text-gray-700">From:</label>
                        <input type="email" className="w-full p-2 border rounded mb-2" placeholder="Your Name" value={fromName} onChange={(e) => setFromName(e.target.value)} />
                        <label className="block text-gray-700">Email:</label>
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
        </div>
    );
};
export default EmailConfig;