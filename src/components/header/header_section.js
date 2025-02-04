import React from 'react';

const HeaderSection = () => {
    return (
        <div className="text-center mb-8">
            {/* Header Text */}
                <h1 className="text-4xl font-bold mb-2">Allen Jhane Dela Cruz</h1>
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
        </div>
    );
};
export default HeaderSection;