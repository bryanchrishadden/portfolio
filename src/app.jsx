import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showSelectedProject } from './redux/actions'
import Content from './components/content'
import Project from './components/projects'
import Logo from './components/logo'
import { AppContainer, Header, Intro } from './styles'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick = ({ target: { id: projectToShow } }) => {
    const { showSelectedProject } = this.props
    if (projectToShow) {
      showSelectedProject(projectToShow)
    }
  }

  render() {
    const { selectedProject } = this.props
    const showHomepage = selectedProject === "none"
    const DetermineHomepageOrProject = showHomepage ? <Content handleCardClick={this.handleCardClick} /> : <Project />

    return (
      <AppContainer>
        <Header>
          <div className="logo-and-nav-wrapper">
            <Logo />
            <div></div>
          </div>
          <Intro className="intro" id="intro">
            <h1>Hey, I'm a fullstack designer & software developer.<br />
              I can solve <span>all some one of your</span> problems, ok?
            </h1>
            <h2>
              I design, build & sometimes rescue applications.<br />
              Have a project, idea or problem you'd like to discuss?<br />
              Shoot me an email <a href="mailto: bryanchrishadden@gmail.com">hey@bryanhadden.com</a>
              <br />
            </h2>
          </Intro>
        </Header>
        {DetermineHomepageOrProject}
      </AppContainer>
    )
  }
}

function mapStateToProps(state) {
  return state.reducers
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showSelectedProject }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
