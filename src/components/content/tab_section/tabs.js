import React from 'react';
import Card from "../../ui/card";
import Button from "../../ui/button";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
    FaJava,
    FaReact,
} from "react-icons/fa";
import { FaJetFighter } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";

const lightThemePink = "#FCE7F3"; // Light theme pink color
const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="mt-6 w-full max-w-4xl">
            <div className="relative flex w-full">
                {['journey', 'projects', 'games', 'suggestions'].map((tab) => (
                    <button 
                    key={tab} 
                    className={`flex-1 text-center px-6 py-3 transition-all relative z-10 rounded-t-lg border-none ${activeTab === tab ? 'bg-white text-black shadow-none' : 'bg-gray-200 text-gray-600 shadow-md shadow-gray-400/50'}`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
        
            <div className="border border-white min-h-[300px] bg-white text-black shadow-lg rounded-b-lg rounded-t-none p-6">
                {activeTab === "journey" && (
                    <VerticalTimeline lineColor="#D3D3D3">
                        <VerticalTimelineElement className="vertical-timeline-element--work" 
                                                date="Jan 2019" 
                                                icon={<FaJetFighter />} 
                                                iconStyle={{ background: lightThemePink }}>
                            <h3 className="vertical-timeline-element-title">Joined the Air Force</h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work" 
                                                date="2021" 
                                                icon={<FaJava />}
                                                iconStyle={{ background: lightThemePink }}>
                            <h3 className="vertical-timeline-element-title">Began studying Computer Science</h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work" 
                                                date="2023" 
                                                icon={<FaReact />}
                                                iconStyle={{ background: lightThemePink }}>
                            <h3 className="vertical-timeline-element-title">Started working on full-stack projects</h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work" 
                                                date="2024" 
                                                icon={<SiGooglecloud />}
                                                iconStyle={{ background: lightThemePink }}>
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