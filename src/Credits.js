
import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

import './Credits.css';

const Credits = () => {
    return (
        <div className="Credits">
            <h2 className="section-header">Credits</h2>
            <div className="Credits-video-frame">
                <Vimeo 
                    video="7ba705814a"
                    autoplay={true}
                    loop={true}
                    muted={true}
                />
            </div>
        </div>
    );
};

export default Credits;
