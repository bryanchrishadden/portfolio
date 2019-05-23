import React, { Component } from 'react';
import Content from './Components/Content'
import Project from './Components/Project'
import Logo from './Components/Logo'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showSelectedProject } from './redux/actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick = (event) => {
    event.preventDefault();
    const { showSelectedProject } = this.props
    const portfolioProjectName = event.target.id

    showSelectedProject(portfolioProjectName)
  }

  render() {
    const { selectedProject } = this.props
    const showHomepage = selectedProject === "none"
    const DetermineHomepageOrProject = showHomepage ? <Content handleCardClick={this.handleCardClick} /> : <Project />

    return (
      <div className="App">
        <div className="header">
          <div className="logo-and-nav-wrapper">
            <Logo />
            <div></div>
          </div>
          <div className="intro" id="intro">
            <h1>Hey, I'm a fullstack designer & software developer.<br />
              I can solve <span>all some one of your</span> problems, ok?
            </h1>
            <h2>
              I design, build & sometimes rescue applications.<br />
              Have a project, idea or problem you'd like to discuss?<br />
              Shoot me an email <a href="mailto: bryanchrishadden@gmail.com">hey@bryanhadden.com</a>
              <br />
            </h2>
          </div>
        </div>
        {DetermineHomepageOrProject}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.reducers;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showSelectedProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
