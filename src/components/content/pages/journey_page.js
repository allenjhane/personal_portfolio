import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaJetFighter } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";

const lightThemePink = "#FFC0CB"; // Light theme pink color
const pinkAccent = "#FFC0CB"; // Pink accent color
const lineColor = "#FAFAFA"; // Line color

const JourneyPage = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3">My Journey</h2>
            <VerticalTimeline lineColor={lineColor}>
                <VerticalTimelineElement className="vertical-timeline-element--work" 
                                            date={<span style={{ padding: '8px' }}>January 2019</span>}
                                            icon={<FaJetFighter />} 
                                            iconStyle={{ background: lightThemePink, 
                                                        color: 'black', 
                                                        boxShadow: "none",
                                                        border: `4px solid ${lineColor}` }}
                                            contentStyle={{ boxShadow: 'none' }}>
                    <h3 className="vertical-timeline-element-title text-black">Joined the Air Force</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" 
                                            date={<span style={{ padding: '8px' }}>July 2024</span>}
                                            icon={<LuSparkles />}
                                            iconStyle={{ background: lightThemePink, 
                                                        color: 'black',
                                                        boxShadow: "none",
                                                        border: `4px solid ${lineColor}`  }}
                                            contentStyle={{ boxShadow: 'none' }}>
                    <h3 className="vertical-timeline-element-title text-black">Internship at NASA</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default JourneyPage;