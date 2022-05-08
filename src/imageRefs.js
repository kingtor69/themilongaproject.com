import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import camp from './images/4A FIN.jpg';
import title010 from './images/Milonga010.png';
import title025 from './images/Milonga025.png';
import title050 from './images/Milonga050.png';
import title100 from './images/Milonga100.png';
import title010Grad10 from './images/Milonga010Grad10.png';
import title020Grad10 from './images/Milonga020Grad10.png';
import title100Grad10 from './images/Milonga100Grad10.png';

import BradEditing from './images/BradEditing.jpg';
import heyChief from './images/heyChiefGreenscreenWithJulie.jpg';
import LibbyHelpingHandsGreenscreen from './images/LibbyHelpingHandsGreenscreen.jpg';
// import JulieSlate105 from './images/JulieSlate105.jpg';
import CodyJulieBottleCatGreenscreen from './images/CodyJulieBottleCatGreenscreen.jpg';
import friendSlateLibbyWaiting from './images/friendSlateLibbyWaiting.jpg';
import MiguelJulieGreenscreen from './images/friendSlateLibbyWaiting.jpg'

const imageRefs = {
  camp,
  title010,
  title025,
  title050,
  title100,
  title010Grad10,
  title020Grad10,
  title100Grad10,
  behindTheScenes: [
    { id: uuid(), image: BradEditing},
    { id: uuid(), image: heyChief},
    { id: uuid(), image: LibbyHelpingHandsGreenscreen},
    { id: uuid(), image: CodyJulieBottleCatGreenscreen},
    { id: uuid(), image: friendSlateLibbyWaiting},
    { id: uuid(), image: MiguelJulieGreenscreen} 
  ]
}

export default imageRefs;
