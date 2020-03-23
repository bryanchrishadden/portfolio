import React from 'react';
import { useDispatch } from 'react-redux'
import { showSelectedProject } from '../../redux/actions'
import VesselTrackerVideo from '../../assets/videos/vesseltracker-app.mp4'
import ReactPlayer from 'react-player'
import '../../App.css';

const vesselTrackerContent = () => {
    const dispatch = useDispatch()
    const handleGoHomeClick = ({ target: { id: projectToShow } }) => {
        dispatch(showSelectedProject('none'))
    }

    const PorscheShieldIcon = 'https://clicktex.com/public/images/clients/porsche.png'

    var PorscheShieldImg = {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${PorscheShieldIcon})`,
        color: "black"
    };
    return (
        <div className="description">
            <div
                href="/"
                id="vesselTrackerProject"
                className="img"
                style={PorscheShieldImg}
            >
                <h2><span>Vessel Tracker App</span></h2>
            </div>
            <button className="back" onClick={handleGoHomeClick}>Go Back</button>
            <h2 className="tech-stack"><span>Tech Stack: </span>React, Node, AWS, Redux, Jest, JWT Tokens, Google Maps API</h2>
            <h2 className="text">
                Currently in use at every port in the world that accepts Porsche Cars, this<br />
                    app needed to be friendly for mobile, tablet, desktop & huge port screens.
                </h2>
            <h2 className="text">
                The users base was diverse: port managers, logistics, finance, technicians, and even C suite.  <br />
                    Porsche completely replaced their old vessel tracking application with my implementation. <br />
            </h2>
            <div className="demo">
                <ReactPlayer url={VesselTrackerVideo} width="61vw" height="40vw" playing={true} loop={true} />
            </div>
        </div>
    )
}

export default vesselTrackerContent
