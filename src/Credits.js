
import React from 'react';
import ReactPlayer from 'react-player';


import './Credits.css';

const Credits = () => {
    return (
        <div className="Credits section">
            <h2 className="section-header">Credits</h2>
            <div className="Credits-video-frame">
                <ReactPlayer 
                    url="https://vimeo.com/716947185"
                    playing={true}
                    loop={true}
                    volume={0.5}
                    muted={true}
                />
            </div>
        </div>
    );
};

export default Credits;
