import React from 'react';
import Card from "../../ui/card";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaJetFighter } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";

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
                {activeTab === "journey" && (
                    <VerticalTimeline lineColor="#D3D3D3">
                        <VerticalTimelineElement className="vertical-timeline-element--work" 
                                                date={<span style={{ padding: '8px' }}>Jan 2019</span>}
                                                icon={<FaJetFighter />} 
                                                iconStyle={{ background: lightThemePink }}
                                                contentStyle={{ borderTop: `4px solid ${lightThemePink}`, 
                                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                            <h3 className="vertical-timeline-element-title">Joined the Air Force</h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work" 
                                                date={<span style={{ padding: '8px' }}>Jul 2024</span>}
                                                icon={<LuSparkles />}
                                                iconStyle={{ background: lightThemePink }}
                                                contentStyle={{ borderTop: `4px solid ${lightThemePink}`,
                                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                            <h3 className="vertical-timeline-element-title">Internship at NASA</h3>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                )}
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