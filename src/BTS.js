import React from 'react';
import SlideShow from './SlideShow';
import ReactPlayer from 'react-player';

import './Home.css';
import './Front.css';

const BTS = () => {
    return (
        <div className="BTS section">
            <h2 className="section-header">Behind the Scenes</h2>
            <SlideShow />
            <div className="block">
                <div className="video-frame">
                    <ReactPlayer 
                        url="https://vimeo.com/717011980"
                        playing={true}
                        loop={true}
                        controls={true}
                        volume={0.5}
                        muted={true}
                        />
                    <p><a href="https://vimeo.com/717011980">view (and listen) on Vimeo</a></p>
                </div>
            </div>
            
        </div>
    );
};

export default BTS;
