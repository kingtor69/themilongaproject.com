import React from 'react';
import About from './About';
import imageRefs from './imageRefs';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import './Home.css';

function Home() {
  return (
    <Card className="Home-title-card section block">
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
  );
}

export default Home;
