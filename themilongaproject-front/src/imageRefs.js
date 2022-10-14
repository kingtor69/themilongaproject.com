import { v4 as uuid } from 'uuid';

import camp from './images/4A FIN.jpg';
import brand from './images/Milonga003.png'
import poster from './images/poster.jpg'
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
import I25TurtleStaredown from './images/BTSoriginals/I25TurtleStaredown.png';
import BradEditing from './images/BTSoriginals/BradEditing.png';
import heyChief from './images/BTSoriginals/heyChiefGreenscreenWithJulie.png';
import LibbyHelpingHandsGreenscreen from './images/BTSoriginals/LibbyHelpingHandsGreenscreen.png';
import CodyJulieBottleCatGreenscreen from './images/BTSoriginals/CodyJulieBottleCatGreenscreen.png';
import friendSlateLibbyWaiting from './images/BTSoriginals/friendSlateLibbyWaiting.png';
import MiguelJulieGreenscreen from './images/BTSoriginals/MiguelJulieGreenscreen.png'
import ZoomEditingWithJulieAndDeimos from './images/BTSoriginals/ZoomEditingWithJulieAndDeimos.png'
import JoeyOnMixStageMonitor from './images/BTSoriginals/JoeyOnMixStageMonitor.png'

import HearKittyADREmptyThumb from './images/BTSthumbs/HearKittyADREmpty-thumb.png';
import ErskineBandoThumb from './images/BTSthumbs/ErskineBando-thumb.png';
import TorJulieRecordingQTangoThumb from './images/BTSthumbs/TorJulieRecordingQTango-thumb.png';
import ElDiaSheetMusicThumb from './images/BTSthumbs/ElDiaSheetMusic-thumb.png';
import tangoSheetMusicThumb from './images/BTSthumbs/tangoSheetMusic-thumb.png';
import QTangoRecordingThumb from './images/BTSthumbs/QTangoRecording-thumb.png';
import RumiRecordingThumb from './images/BTSthumbs/RumiRecording-thumb.png';
import I25TurtleStaredownThumb from './images/BTSthumbs/I25TurtleStaredown-thumb.png';
import BradEditingThumb from './images/BTSthumbs/BradEditing-thumb.png';
import heyChiefThumb from './images/BTSthumbs/heyChiefGreenscreenWithJulie-thumb.png';
import LibbyHelpingHandsGreenscreenThumb from './images/BTSthumbs/LibbyHelpingHandsGreenscreen-thumb.png';
import CodyJulieBottleCatGreenscreenThumb from './images/BTSthumbs/CodyJulieBottleCatGreenscreen-thumb.png';
import friendSlateLibbyWaitingThumb from './images/BTSthumbs/friendSlateLibbyWaiting-thumb.png';
import MiguelJulieGreenscreenThumb from './images/BTSthumbs/MiguelJulieGreenscreen-thumb.png'
import ZoomEditingWithJulieAndDeimosThumb from './images/BTSthumbs/ZoomEditingWithJulieAndDeimos-thumb.png'
import JoeyOnMixStageMonitorThumb from './images/BTSthumbs/JoeyOnMixStageMonitor-thumb.png'

const imageRefs = {
  camp,
  brand,
  poster,
  title010,
  title025,
  title050,
  title100,
  title010Grad10,
  title020Grad10,
  title100Grad10,
  hearBettyLogo,
  behindTheScenesPics: [
    { id: uuid(), original: LibbyHelpingHandsGreenscreen, thumbnail: LibbyHelpingHandsGreenscreenThumb, description: 'Pip (Libby) at Helping Hands.'},
    { id: uuid(), original: friendSlateLibbyWaiting, thumbnail: friendSlateLibbyWaitingThumb, description: 'Michele helping keep the photos organized'},
    { id: uuid(), original: CodyJulieBottleCatGreenscreen, thumbnail: CodyJulieBottleCatGreenscreenThumb, description: `Julie handing Wambli (Cody) his bottle of "hooch." (Roxy Blossom in the background didn't make the cut.)`},
    { id: uuid(), original: MiguelJulieGreenscreen, thumbnail: MiguelJulieGreenscreenThumb, description: 'Julie with Pablo (Miguel)'},
    { id: uuid(), original: heyChief, thumbnail: heyChiefThumb, description: 'Willis (Fighting Guy) setting up with Julie for his fight with Cody'},
    { id: uuid(), original: ErskineBando, thumbnail: ErskineBandoThumb, description: 'Erskine playing bandoneon during our recording session with Q Tango'}, 
    { id: uuid(), original: TorJulieRecordingQTango, thumbnail: TorJulieRecordingQTangoThumb, description: 'Tor & Julie during the Q Tango recording session'}, 
    { id: uuid(), original: ElDiaSheetMusic, thumbnail: ElDiaSheetMusicThumb, description: 'sheet music for a song heard frequently'}, 
    { id: uuid(), original: tangoSheetMusic, thumbnail: tangoSheetMusicThumb, description: 'more sheet music'}, 
    { id: uuid(), original: QTangoRecording, thumbnail: QTangoRecordingThumb, description: 'The whole Q Tango ensemble'}, 
    { id: uuid(), original: HearKittyADREmpty, thumbnail: HearKittyADREmptyThumb, description: 'Hear Kitty Studios, where we recorded most of the voices'},
    { id: uuid(), original: RumiRecording, thumbnail: RumiRecordingThumb, description: 'Rumi recording as Laura'}, 
    { id: uuid(), original: I25TurtleStaredown, thumbnail: I25TurtleStaredownThumb, description: 'Waiting for recording at Hear Kitty can be quite relaxing'}, 
    {id: uuid(), original: ZoomEditingWithJulieAndDeimos, thumbnail: ZoomEditingWithJulieAndDeimosThumb, description: 'Most of the audio edit happened during COVID via Zoom'},
    { id: uuid(), original: BradEditing, thumbnail: BradEditingThumb, description: 'Brad at work editing picture.'},
    { id: uuid(), original: JoeyOnMixStageMonitor, thumbnail: JoeyOnMixStageMonitorThumb, description: "Joey’s obituary as seen during the final mix on Hear Kitty’s film mix stage"}
  ],
}

export default imageRefs;
