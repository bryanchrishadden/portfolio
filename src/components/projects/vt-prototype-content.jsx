import React from 'react';
import { useDispatch } from 'react-redux'
import { showSelectedProject } from '../../redux/actions'
import vtAppVideo from '../../assets/videos/entry-app.mp4'
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
                <h2><span>Vehicle Tracker Entrypoint</span></h2>
            </div>
            <button className="back" onClick={handleGoHomeClick}>Go Back</button>
            <h2 className="tech-stack"><span>Tech Stack: </span>React, Node, MongoDb, JWT Tokens, Sketch, InVision</h2>
            <h2 className="text">
                Porsche wanted a modern experience for delearships tracking customer orders, <br />
                    a simple, social netwwork themed design that was easy to understand at a glance. <br />
                    Leading the design team in germany for this project, I created and pitched this concept leadership.
                </h2>
            <h2 className="text">
                After we recieved approval to move forward,and I started the build, of which the main challenge was keeping things
                simple for team members who may not be very technical, while also designing the data flow in a
                    way that made it very easy for seasoned salesmen/saleswomen to get car info quickly. <br />
            </h2>
            <div className="demo">
                {/* <ReactPlayer url={vtProtoypeVideo} width="61vw" height="40vw" playing={true} loop={true} /> */}
                <ReactPlayer url={vtAppVideo} width="61vw" height="40vw" playing={true} loop={true} />
            </div>
        </div>
    )
}

export default vesselTrackerContent
