import React from 'react';
import SlideShow from './SlideShow';
import ReactPlayer from 'react-player';
import {Row, Col} from 'reactstrap';

import './Home.css';
import './Front.css';

const BTS = () => {
    return (
        <div className="BTS section" id="BTS">
            <p className="pre-header"><br /></p>
            <h2 className="section-header">Behind the Scenes</h2>
            <SlideShow />
            <Row><br /></Row>
            <Row>
                <Col xs="0" md="1" lg="2"></Col>
                <Col xs="12" md="10" lg="8">
                    <ReactPlayer 
                        url="https://vimeo.com/717011980"
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

export default BTS;
