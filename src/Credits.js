
import React from 'react';
import ReactPlayer from 'react-player';

import './Home.css';

const Credits = () => {
    return (
        <div className="Credits section">
            <h2 className="section-header">Credits</h2>
            <ReactPlayer 
                url="https://vimeo.com/716947185"
                playing={true}
                loop={true}
                controls={true}
                volume={0.5}
                muted={true}
            />
        </div>
    );
};

export default Credits;
