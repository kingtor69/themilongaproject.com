
import React from 'react';
import imageRefs from './imageRefs';

import './Copyright.css';

const Copyright = () => {
    const {hearBettyLogo} = imageRefs;
    return (
        <div className="Copyright block">
            <img src={hearBettyLogo} className="Copyright-logo" />
            <p className="Copyright-text">
                &copy; copyright 2022 Hear Betty Studios
            </p>
        </div>
    );
};

export default Copyright;
