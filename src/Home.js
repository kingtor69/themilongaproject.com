import React from 'react';
import About from './About';
import imageRefs from './imageRefs';
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import './Home.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="Home-title-card">
            <CardImg
              className="Home-img-h1"
              alt="Milonga"
              src={imageRefs.title010Grad10}
              />
            <CardBody>
              <CardTitle tag="h2" className="h2">
                An Illustrated Audio Play
              </CardTitle>
              <CardSubtitle>
                <i>A homeless woman with a guilty past heals herself through tango.</i>
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
