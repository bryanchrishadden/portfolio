import React from 'react';
// import EntryApp from '../assets/videos/entry-app.mp4'
// import EntryPro from '../assets/videos/entry-prototype.mp4'
import { Container, Img } from './porsche.styles';

const HomedepotPortfolio = props => {
    return (
        <Container>
            <div
                href="/"
                id="vesselTrackerProject"
                onClick={props.handleCardClick}
            >
                <Img src='https://clicktex.com/public/images/clients/porsche.png' />
                <h2>Vessel Tracker App</h2>
            </div>
            <div
                href="/"
                id="vt_PrototypeProject"
                onClick={props.handleCardClick}
            >
                <Img src='https://clicktex.com/public/images/clients/porsche.png' />
                <h2>Vehicle Tracker Entrypoint</h2>
            </div>
        </Container>
    )
}

export default HomedepotPortfolio