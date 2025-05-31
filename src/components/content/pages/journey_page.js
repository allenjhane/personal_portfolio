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
            <h2 className="text-2xl font-bold mb-3">My Career Journey</h2>
            <VerticalTimeline lineColor={lineColor}>
                <VerticalTimelineElement className="vertical-timeline-element--work" 
                                            date={<span 
                                                style={{ 
                                                    marginTop: '-10px',  // Move date up to align with icon
                                                    marginLeft: '50px',
                                                    display: 'inline-block'   
                                                }}
                                                >January 2019
                                                </span>}
                                            icon={<img 
                                                    src="bmt.jpg" 
                                                    alt="Air Force" 
                                                    style={{ 
                                                        width: '100%', 
                                                        height: '100%', 
                                                        objectFit: 'cover',
                                                        borderRadius: '50%'
                                                    }}
                                                />} 
                                            iconStyle={{ 
                                                background: lightThemePink, 
                                                color: 'black', 
                                                // boxShadow: "none",
                                                border: `4px solid ${lineColor}`,
                                                width: '100px',        // Add this - default is usually 40px
                                                height: '100px',       // Add this - default is usually 40px
                                                marginLeft: '-50px'   // half of width
                                            }}
                                            contentStyle={{ 
                                                boxShadow: 'none',
                                                marginTop: '10px',
                                                marginLeft: '-20px',
                                                display: 'inline-block' 
                                                }}>
                    <h3 className="vertical-timeline-element-title text-black">
                        Joined the Air Force as a Radio IT Technician.
                        </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" 
                                            date={<span style={{ padding: '8px' }}>July 2024</span>}
                                            icon={<LuSparkles />}
                                            iconStyle={{ background: lightThemePink, 
                                                        color: 'black',
                                                        boxShadow: "none",
                                                        border: `4px solid ${lineColor}`  }}
                                            contentStyle={{ boxShadow: 'none' }}>
                    <h3 className="vertical-timeline-element-title text-black">
                        Accepted Internship at NASA as a Software Engineer Intern through the SkillBridge Program.
                        </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" 
                                            date={<span style={{ padding: '8px' }}>January 2025</span>}
                                            icon={<LuSparkles />}
                                            iconStyle={{ background: lightThemePink, 
                                                        color: 'black',
                                                        boxShadow: "none",
                                                        border: `4px solid ${lineColor}`  }}
                                            contentStyle={{ boxShadow: 'none' }}>
                    <h3 className="vertical-timeline-element-title text-black">
                        Transitioned out the military and continued my internship work at NASA 
                        as the Lead Software Engineering Intern.
                    </h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default JourneyPage;