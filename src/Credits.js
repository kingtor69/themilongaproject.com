
import React from 'react';
import ReactPlayer from 'react-player';

import './Credits.css';

const Credits = () => {
    return (
        <div className="Credits">
            <h2 className="section-header">Credits</h2>
            <div className="Credits-video-frame">
                <ReactPlayer 
                    url="https://player.vimeo.com/video/707971594?h=7ba705814a?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479/embed"
                />
            </div>
        </div>
    );
};

export default Credits;
