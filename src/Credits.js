
import React from 'react';
import VideoFrame from './VideoFrame';

import './Home.css';

const Credits = () => {
    return (
        <div className="Credits section">
            <h2 className="section-header">Credits</h2>
            <VideoFrame 
                url="https://vimeo.com/716947185"
            />
        </div>
    );
};

export default Credits;
