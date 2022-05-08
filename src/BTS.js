import React from 'react';
import { behindTheScenes } from './imageRefs';
import SlideShow from './SlideShow';

const BTS = () => {
    return (
        <div className="BTS">
            <h2 className="section-header">Behind the Scenes</h2>
            <SlideShow images={behindTheScenes} />
        </div>
    );
};

export default BTS;
