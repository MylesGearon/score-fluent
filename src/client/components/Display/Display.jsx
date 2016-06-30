import React from 'react';
import { findDOMNode } from 'react-dom';
import Raphael from 'raphael';
window.Raphael = Raphael;

import StavesScreen from '../StavesScreen/StavesScreen.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';
import ScoreScreen from '../ScoreScreen/ScoreScreen.jsx';

export default class Display extends React.Component {
  render() {
    if (this.props.screen === 'staves') {
      return <StavesScreen {...this.props} />
    } else if (this.props.screen === 'start') {
      return <StartScreen fade={this.props.fadeCurDisplay}></StartScreen>
    } else if (this.props.screen === 'score') {
      return <ScoreScreen {...this.props} />
    } else {
      return null;
    }
  }
}
