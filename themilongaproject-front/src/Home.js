import React from 'react';
import imageRefs from './imageRefs';
import {Card, CardImg, CardBody, CardSubtitle} from 'reactstrap';

import './Home.css';

function Home() {
  return (
    <Card className="Home-title-card section block">
      <CardImg
        className="Home-img-h1"
        alt="Milonga"
        src={ imageRefs.poster }
        />
      <CardBody>
        <CardSubtitle>
          <i>A homeless woman with a guilty past heals herself through tango.</i>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

export default Home;
