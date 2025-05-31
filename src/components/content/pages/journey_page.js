import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const lightThemePink = "#FFC0CB"; // Light theme pink color

const JourneyPage = ({ darkMode }) =>  {
    const lineColor = darkMode ? "#25AFFF" : "#D8B4FE"; // Your existing lineColor logic
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3">My Career Journey</h2>
            <VerticalTimeline lineColor={lineColor}>
                <VerticalTimelineElement className="vertical-timeline-element--work" 
                    date={<span 
                        style={{ 
                            marginTop: '-10px',  // Move date up to align with icon
                            marginLeft: '160px',
                            display: 'inline-block',
                            whiteSpace: 'nowrap'   
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
                        background: lineColor,
                        color: 'black', 
                        border: `4px solid ${lineColor}`,
                        width: '100px',
                        height: '100px',
                        marginLeft: '-50px'
                    }}
                    contentStyle={{ 
                        boxShadow: 'none',
                        marginTop: '10px',
                        marginLeft: '-30px',
                        display: 'inline-block',
                        transform: 'scale(0.8)',
                        transformOrigin: 'left center'
                    }}>
                    <h3 className="vertical-timeline-element-title text-black">
                        Joined the Air Force as a Radio IT Technician.
                    </h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work" 
                    date={<span 
                        style={{ 
                            marginTop: '-10px',
                            marginRight: '70px',
                            display: 'inline-block'   
                        }}
                        >June 2024
                        </span>}
                    icon={<img 
                            src="nasa_summer_2024.jpg" 
                            alt="NASA" 
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
                        border: `4px solid ${lineColor}`,
                        width: '100px',
                        height: '100px',
                        marginLeft: '-50px'
                    }}
                    contentStyle={{ 
                        boxShadow: 'none',
                        marginTop: '10px',
                        marginRight: '-30px',
                        display: 'inline-block',
                        transform: 'scale(0.8)',
                        transformOrigin: 'right center'
                    }}>
                    <h3 className="vertical-timeline-element-title text-black">
                        Accepted Internship at NASA as a Software Engineer Intern through the NASA SkillBridge Program.
                    </h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work" 
                    date={<span 
                        style={{ 
                            marginTop: '-10px',
                            marginLeft: '70px',
                            display: 'inline-block'   
                        }}
                        >January 2025
                        </span>}
                    icon={<img 
                            src="nasa_spring_2025.jpg" 
                            alt="NASA" 
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
                        border: `4px solid ${lineColor}`,
                        width: '100px',
                        height: '100px',
                        marginLeft: '-50px'
                    }}
                    contentStyle={{ 
                        boxShadow: 'none',
                        marginTop: '10px',
                        marginLeft: '-30px',
                        display: 'inline-block',
                        transform: 'scale(0.8)',
                        transformOrigin: 'left center'
                    }}>
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