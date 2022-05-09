import React from 'react';
import imageRefs from './imageRefs';
import SlideShow from './SlideShow';

const BTS = () => {
    const { behindTheScenes } = imageRefs;
    return (
        <div className="BTS">
            <h2 className="section-header">Behind the Scenes</h2>
            <SlideShow images={behindTheScenes} />
        </div>
    );
};

export default BTS;
