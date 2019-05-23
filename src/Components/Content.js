import React, { Component } from 'react';
import PorschePortfolioRow from './PorschePortfolioRow'
import HomedepotPortfolioRow from './HomedepotPortfolioRow'
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <PorschePortfolioRow handleCardClick={this.props.handleCardClick}/>
        <HomedepotPortfolioRow handleCardClick={this.props.handleCardClick}/>
      </div>
    )
  }
}

export default Content;