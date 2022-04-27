import React from 'react';

import './About.css';

const About = () => {
    return (
        <div className="About">
            <br />
            <br />
            <h2 id="About-header">The Process: </h2>
            <div className="About-p">
                <p className="About-p-list-intro">Milonga began as a film script by Julie Reichert.  She didn’t have the means to get it produced, so how to get it into the world?</p>
                <ul className="About-unmarked-list">
                <li>Post the script online?</li>
                <li>An audio version as well, so you could both read it and hear it?</li>
                <li>How, how about some pictures?</li>
                </ul>
                <p>And so it began.  At first with a straight recording of the script (thank you, Kate Costello), then a green screen in the living room and some actors (our patient heroine, Pip Lustgarten, plus many more), with Bill Mohr as photographer and digital image builder.  A light going on in Tor’s head during the recording, followed by an offer by Kat & Tor at Hear Kitty Studios to co-produce a fully developed audio version.  Locations and background characters drawn by Betsy Cunningham.  Many script re-writes to adapt to a new medium.</p>
                <p>Something initially simple became very complicated — thousands of photographs to produce the 450 images used in the final project.  Many actors, both for the visuals and the soundtrack.  Heroic recording, mixing, and sound design by Tor and Kat.  Generous musical contributions by Q-Tango, and a score by CK Barlow.  Visual editing by Brad Stoddard. </p>
                <p>The project developed over six and a half years, two of which included the pandemic.  All involved had other lives with many demands.  Many times we wondered if we’d ever finish.  Some participants forgot they’d ever been involved.  But here we have it, a real live illustrated audio play. </p>
            </div>
        </div>
    )
}

export default About;
