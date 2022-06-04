
import React from 'react';
import ReactPlayer from 'react-player';

import './Front.css';
import './VideoFrame.css'

const VideoFrame = (url, playing=true, loop=true, volume=0.5, muted=true) => {
    return (
        <div className="VideoFrame">
            <ReactPlayer 
                url={url}
                playing={playing}
                loop={loop}
                volume={volume}
                muted={muted}
            />
        </div>
    )
};

export default VideoFrame;
