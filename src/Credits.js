
import React from 'react';
import ReactPlayer from 'react-player';
import {Row, Col} from 'reactstrap';

import './Home.css';

const Credits = () => {
    return (
        <div className="Credits section" id="Credits">
            <h2 className="section-header">Credits</h2>
            <Row>
                <Col xs="0" md="1" lg="2"></Col>
                <Col xs="12" md="10" lg="8">
                    <ReactPlayer 
                        url="https://vimeo.com/716947185"
                        playing={true}
                        loop={true}
                        controls={true}
                        volume={0.5}
                        muted={true}
                    />
                </Col>
                <Col xs="0" md="1" lg="2"></Col>
            </Row>
        </div>
    );
};

export default Credits;
