
import React from 'react';
import {Container, Row, Col } from 'reactstrap'; 

import './Bios.css'

const Bios = () => {
    return (
        <div className="Bios">
            <h2 className="section-header">About the Creators</h2>
            <div className="block">
                <Container>
                    <Row>
                        <Col xs="1" md="2" lg="4"></Col>
                        <Col xs="10" md="8" lg="4">
                            <h3><b>JULIE REICHERT</b> <i className="Bios-position">Writer / Director / Producer</i></h3>
                            <p className="Bios-text">Julie Reichert’s filmmaking career began as a co-writer of Cannon Film’s <i>Breakin’ 2 is Electric Boogaloo</i> (1984). She wrote, directed, and produced three short films: <i>Girls</i> (2002), <i>Pipes</i> (2005), and <i>Wings</i> (2005), and the independent feature film <i><a href="http://warriorwomanfilm.com">Warrior Woman</a></i> (2012). She is also a paper artist and an educator. <a href="https://www.imdb.com/name/nm0716984/">IMDb</a></p>
                            <h3><b>KATHLEEN “KAT” EDWARDS, M.P.S.E.</b> <i className="Bios-position">Producer / Sound Designer</i></h3>
                            <p className="Bios-text">Kat has designed sound, walked Foley, composed and performed music for countless feature films, documentaries, theatrical productions, and museum pieces. She is frequently lost in her own world of sound. <a href="https://www.imdb.com/name/nm1685615/">IMDb</a></p>
                            <h3><b>TOR KINGDON</b> <i className="Bios-position">Producer / Sound Mixer</i></h3>
                            <p className="Bios-text">Tor had an early passion for radio theatre that started listening to the classics on a syndicated radio show, followed by an uncle turning him on to the BBC's <i>Hitchhiker's Guide To The Galaxy</i> by Douglas Adams. He's worked in all aspects of live theatre, film, digital media, and edits sound to support his mixing habit. <a href="https://www.imdb.com/name/nm0563883/">IMDb</a></p>
                            <h3><b>BILL MOHR</b> <i className="Bios-position">Photography & Digital Image Building</i></h3>
                            <p className="Bios-text">Bill started his formal art training at a vo-tech high school and continued his photography training as an army photographer.  He went on to earn a BFA degree from The University of the Arts in Philadelphia and an MFA degree from Pratt Institute.  He honed his Photoshop skills as a photographer and graphic artist for thirty years.</p>
                            <h3><b>BETSY CUNNINGHAM</b> <i className="Bios-position">Art (Backgrounds & People)</i></h3>
                            <p className="Bios-text">In the 1970’s, Betsy Cunningham began making 16mm experimental films that were shown in L.A. and New York.  Later, she switched to mixed media work on paper. “When Julie asked me to do illustrations for Milonga I was challenged!  I am so happy to be part of the team that created an original visual style to support this compelling story.”</p>
                            <h3><b>CK BARLOW</b> <i className="Bios-position">Composer</i></h3>
                            <p className="Bios-text">CK Barlow produces music for television and film, with placements in more than 1,500 TV episodes as well as commercials and video games. Her indie-film credits include Julie Reichert’s <i>Warrior Woman</i>, <i>Pipes</i>, and <i>Girls</i>. CK’s work for TV/film evolved from her scores and sound designs for dozens of live theater and dance productions in New Mexico. <a href="https://www.imdb.com/name/nm3048163/">IMDb</a></p>
                            <h3><b>BRAD STODDARD</b> <i className="Bios-position">Picture Editor</i></h3>
                            <p className="Bios-text">Brad Stoddard has passion for creating content for the Independent Film and Television market and is an award winning filmmaker, editor, writer and cinematographer. Brad is the owner of Stoddard Communications, a New Mexico production/postproduction company. He is experienced in workflow design for digital acquisition and editorial systems. <a href="http://www.imdb.com/name/nm2268406">IMDb</a></p>
                        </Col>
                        <Col xs="1" md="2" lg="4"></Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Bios;
