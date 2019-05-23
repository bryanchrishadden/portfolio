import React, { Component } from 'react';
// import EntryApp from '../assets/videos/entry-app.mp4'
// import EntryPro from '../assets/videos/entry-prototype.mp4'
import '../App.css';

const PorscheShieldIcon = 'https://clicktex.com/public/images/clients/porsche.png'

var PorscheShieldImg = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${PorscheShieldIcon})`,
    color: "black"
};

class PorschePortfolioRow extends Component {
    render() {
        return (
            <div className="cards-wrapper">
                <div
                    href="/"
                    id="vesselTrackerProject"
                    className="ux-column"
                    onClick={this.props.handleCardClick}
                    style={PorscheShieldImg}
                    >
                    <h2>Vessel Tracker App</h2>
                </div>
                <div
                    href="/"
                    id="vt_PrototypeProject"
                    className="ux-column"
                    onClick={this.props.handleCardClick}
                    style={PorscheShieldImg}
                >
                    <h2>Vehicle Tracker Entrypoint</h2>
                </div>
            </div>
        )
    }
}

export default PorschePortfolioRow