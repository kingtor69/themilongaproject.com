
import React from 'react';
import imageRefs from './imageRefs';

import './Copyright.css';

const Copyright = () => {
    const { hearBettyLogo } = imageRefs;
    return (
        <div className="Copyright block">
            <img src={ hearBettyLogo } alt="" className="Copyright-logo" />
            <p className="Copyright-text">
                &copy; copyright 2022 Hear Betty Studios<br />
                website by Tor Kingdon 
                {/* <a href="https://kingtorcodes.com">kingtorcodes.com</a> */}
            </p>
        </div>
    );
};

export default Copyright;
