import React, { Component } from 'react';
import { Container } from './styles/content.styles'
import PorschePortfolio from './clients/porsche'
import HomedepotPortfolio from './clients/homedepot'

class Content extends Component {
  render() {
    return (
      <Container>
        <PorschePortfolio handleCardClick={this.props.handleCardClick} />
        <HomedepotPortfolio handleCardClick={this.props.handleCardClick} />
      </Container>
    )
  }
}

export default Content;