import React from 'react';
import Card from "../../ui/card";
import "react-vertical-timeline-component/style.min.css";
import JourneyPage from './tab_pages/journey_page';

const lightThemePink = "#FCE7F3"; // Light theme pink color
const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="mt-6 w-full max-w-4xl">
            <div className="relative flex w-full">
                {['journey', 'projects', 'games', 'suggestions'].map((tab) => (
                    <button 
                    key={tab} 
                    className={`flex-1 text-center px-6 py-3 transition-all relative z-10 rounded-t-lg border-none 
                        ${activeTab === tab ? 'bg-[#FAFAFA] text-black shadow-none' : 
                            'bg-[#FFFBF0] text-gray-600 shadow-md shadow-gray-400/50'}`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
        
            <div className="border border-[#FAFAFA] min-h-[300px] bg-[#FAFAFA] text-black shadow-lg rounded-b-lg rounded-t-none p-6">
                {activeTab === "journey" && (<JourneyPage />)}
                {activeTab === "projects" && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <Card key={item} title={`Project ${item}`} description="Short description of the project goes here." />
                    ))}
                    </div>
                )}
                {activeTab === "games" && <p>Some of the games I've worked on...</p>}
                {activeTab === "suggestions" && <p>Leave a suggestion for my portfolio!</p>}
            </div>
      </div>
    );
};
export default Tabs;