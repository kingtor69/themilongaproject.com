
import React from 'react';
import ReactPlayer from 'react-player';
import {Row, Col} from 'reactstrap';

import './Home.css';

const Trailer = () => {
    return (
        <div className="Trailer section" id="Trailer">
            <p className="pre-header"><br /></p>
            <h2 className="section-header">Trailer</h2>
            <Row>
                <Col xs="0" md="1" lg="2"></Col>
                <Col xs="12" md="10" lg="8">
                    <ReactPlayer 
                        url="https://vimeo.com/750625927"
                        playing={false}
                        loop={false}
                        controls={true}
                        volume={0.5}
                        muted={false}
                    />
                </Col>
                <Col xs="0" md="1" lg="2"></Col>
            </Row>
        </div>
    );
};

export default Trailer;
