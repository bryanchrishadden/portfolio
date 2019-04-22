import React, { Component } from 'react';
import VT from './assets/videos/vesseltracker-app.mp4'
import EntryApp from './assets/videos/entry-app.mp4'
import EntryPro from './assets/videos/entry-prototype.mp4'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.playMe = this.playMe.bind(this)
    this.stopMe = this.stopMe.bind(this)
  }

  playMe = (event) => {
    const id = event.target.id
    switch (id) {
      case "developer":
        return document.getElementById('vidone').play()
      case "designone":
        return document.getElementById('vidtwo').play()
      case "designtwo":
        return document.getElementById('vidthree').play()
    }
  }

  stopMe = (event) => {
    const id = event.target.id
    switch (id) {
      case "developer":
        return document.getElementById('vidone').pause()
      case "designone":
        return document.getElementById('vidtwo').pause()
      case "designtwo":
        return document.getElementById('vidthree').pause()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Bryan Hadden's Portfolio </h1>
          <h3 className="subtitle"><strong>Fullstack Designer & Developer</strong></h3>

        </div>
        <div className="content">
          <div id="developer" className="developer" onMouseEnter={this.playMe} onMouseLeave={this.stopMe}>
            <div className="column">
              <h2><strong>International Shipping Tracker</strong> - Porsche</h2>
              <video id="vidone" className="large" controls preload="auto">
                <source src={VT} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
              <h3>Tech Stack:  <strong>React, Redux, Jest, Google Maps API, Node</strong></h3>
              <h3> This is application is currently live in every port across the world that tracks shipping for Porsche Cars.
                Over an 8 month period with bi-weekly meetings with the Porsche team.</h3>
            </div>
          </div>
          <div className="designer">
            <div id="designone" className="ux-column" onMouseEnter={this.playMe} onMouseLeave={this.stopMe}>
              <h2>Porsche - Car Tracker Entrypoint - Design</h2>
              <video id="vidtwo" className="small" controls preload="auto">
                <source className="large" src={EntryPro} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
              <h3>Tech Stack:  <strong>Pen & Paper, Photoshop, Illistrator, Sketch, InVision</strong></h3>
              <div className="descrip">
                <h3>
                  This is the prototype for an application that every porsche customer, as well as every porsche dealer will use to access the cars they purchase.
              </h3>
              </div>
            </div>
            <div id="designtwo" className="ux-column" onMouseEnter={this.playMe} onMouseLeave={this.stopMe}>
              <h2>Porsche - Car Tracker Entrypoint - App</h2>
              <video id="vidthree" className="small" controls preload="auto">
                <source className="large" src={EntryApp} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
              <h3>Tech Stack:  <strong>React, Redux, Jest, Redux-Persist, Node, Express</strong></h3>
              <div className="descrip">
                <h3>
                  This is the actual application that every porsche customer, as well as every porsche dealer will use to access the cars they purchase.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
