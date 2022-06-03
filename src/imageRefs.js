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
import hearBettyLogo from './images/HearBettyLogoWithWords.jpg';
import HearKittyADREmpty from './images/HearKittyADREmpty.jpg';
import ErskineBando from './images/ErskineBando.jpg';
import TorJulieRecordingQTango from './images/TorJulieRecordingQTango.jpg';
import ElDiaSheetMusic from './images/ElDiaSheetMusic.jpg';
import tangoSheetMusic from './images/tangoSheetMusic.jpg';
import QTangoRecording from './images/QTangoRecording.jpg';
import RumiRecording from './images/RumiRecording.jpg';
import I25PondTurtles from './images/I25PondTurtles.jpg';

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
  hearBettyLogo,
  behindTheScenesPics: [
    { id: uuid(), image: BradEditing},
    { id: uuid(), image: heyChief},
    { id: uuid(), image: LibbyHelpingHandsGreenscreen},
    { id: uuid(), image: CodyJulieBottleCatGreenscreen},
    { id: uuid(), image: friendSlateLibbyWaiting},
    { id: uuid(), image: MiguelJulieGreenscreen},
    { id: uuid(), image: HearKittyADREmpty},
    { id: uuid(), image: ErskineBando}, 
    { id: uuid(), image: TorJulieRecordingQTango}, 
    { id: uuid(), image: ElDiaSheetMusic}, 
    { id: uuid(), image: tangoSheetMusic}, 
    { id: uuid(), image: QTangoRecording}, 
    { id: uuid(), image: RumiRecording}, 
    { id: uuid(), image: I25PondTurtles}, 
  ],
}

export default imageRefs;
