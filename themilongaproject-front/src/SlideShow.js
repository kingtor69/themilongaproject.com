import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import imageRefs from './imageRefs';

const SlideShow = () => {
    const orderedImages = imageRefs.behindTheScenesPics;
    // add random order for images?

    return (
        <ImageGallery 
            items={orderedImages} 
            autoPlay={true}
        />
    )
};

export default SlideShow;
