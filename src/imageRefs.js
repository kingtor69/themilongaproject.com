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

import HearKittyADREmpty from './images/BTSoriginals/HearKittyADREmpty.png';
import ErskineBando from './images/BTSoriginals/ErskineBando.png';
import TorJulieRecordingQTango from './images/BTSoriginals/TorJulieRecordingQTango.png';
import ElDiaSheetMusic from './images/BTSoriginals/ElDiaSheetMusic.png';
import tangoSheetMusic from './images/BTSoriginals/tangoSheetMusic.png';
import QTangoRecording from './images/BTSoriginals/QTangoRecording.png';
import RumiRecording from './images/BTSoriginals/RumiRecording.png';
import I25PondTurtles from './images/BTSoriginals/I25PondTurtles.png';
import BradEditing from './images/BTSoriginals/BradEditing.png';
import heyChief from './images/BTSoriginals/heyChiefGreenscreenWithJulie.png';
import LibbyHelpingHandsGreenscreen from './images/BTSoriginals/LibbyHelpingHandsGreenscreen.png';
// import JulieSlate105 from './images/BTSoriginals/JulieSlate105.png';
import CodyJulieBottleCatGreenscreen from './images/BTSoriginals/CodyJulieBottleCatGreenscreen.png';
import friendSlateLibbyWaiting from './images/BTSoriginals/friendSlateLibbyWaiting.png';
import MiguelJulieGreenscreen from './images/BTSoriginals/friendSlateLibbyWaiting.png'

import HearKittyADREmpty from './images/BTSthumbs/HearKittyADREmpty-thumb.png';
import ErskineBando from './images/BTSthumbs/ErskineBando-thumb.png';
import TorJulieRecordingQTango from './images/BTSthumbs/TorJulieRecordingQTango-thumb.png';
import ElDiaSheetMusic from './images/BTSthumbs/ElDiaSheetMusic-thumb.png';
import tangoSheetMusic from './images/BTSthumbs/tangoSheetMusic-thumb.png';
import QTangoRecording from './images/BTSthumbs/QTangoRecording-thumb.png';
import RumiRecording from './images/BTSthumbs/RumiRecording-thumb.png';
import I25PondTurtles from './images/BTSthumbs/I25PondTurtles-thumb.png';
import BradEditing from './images/BTSthumbs/BradEditing-thumb.png';
import heyChief from './images/BTSthumbs/heyChiefGreenscreenWithJulie-thumb.png';
import LibbyHelpingHandsGreenscreen from './images/BTSthumbs/LibbyHelpingHandsGreenscreen-thumb.png';
// import JulieSlate105 from './images/BTSthumbs/JulieSlate105-thumb.png';
import CodyJulieBottleCatGreenscreen from './images/BTSthumbs/CodyJulieBottleCatGreenscreen-thumb.png';
import friendSlateLibbyWaiting from './images/BTSthumbs/friendSlateLibbyWaiting-thumb.png';
import MiguelJulieGreenscreen from './images/BTSthumbs/friendSlateLibbyWaiting.png'

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
    { id: uuid(), original: BradEditing, description: 'Brad at work editing picture.'},
    { id: uuid(), original: heyChief, description: 'Willis (Fighting Guy) setting up with Julie for his fight with Cody'},
    { id: uuid(), original: LibbyHelpingHandsGreenscreen, description: 'Pip (Libby) at Helping Hands.'},
    { id: uuid(), original: CodyJulieBottleCatGreenscreen, description: `Julie handing Wambli (Cody) his bottle of "hooch." (Kitty didn't make the cut.)`},
    { id: uuid(), original: friendSlateLibbyWaiting, description: 'helping keep the photos organized'},
    { id: uuid(), original: MiguelJulieGreenscreen, description: 'Julie with Pablo (Miguel)'},
    { id: uuid(), original: HearKittyADREmpty, description: 'Hear Kitty, where we recorded most of the voices'},
    { id: uuid(), original: ErskineBando, description: 'Erskine playing bandoneon during our recording session with Q Tango'}, 
    { id: uuid(), original: TorJulieRecordingQTango, description: 'Tor & Julie during the Q Tango recording session'}, 
    { id: uuid(), original: ElDiaSheetMusic, description: 'sheet music for a song heard frequently'}, 
    { id: uuid(), original: tangoSheetMusic, description: 'more sheet music'}, 
    { id: uuid(), original: QTangoRecording, description: 'The whole Q Tango ensemble'}, 
    { id: uuid(), original: RumiRecording, description: 'Rumi recording as Laura'}, 
    { id: uuid(), original: I25PondTurtles, description: 'Waiting for recording at Hear Kitty can be quite relaxing'}, 
  ],
}

export default imageRefs;
