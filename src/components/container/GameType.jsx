import React, {Component} from 'react'
import { connect } from 'react-redux'
import RoundButtonGroup from './../presentational/RoundButtonGroup';
import { setGameTypeAction } from './../../actions/view';

//TODO Make this an actual ES6 Component that will accept present and use a high order function for the click handler

class GameType extends Component {
  constructor(props) {
    super(props);
    this.presentWrapper = this.presentWrapper.bind(this);
  }

  render() {
    return (
      <RoundButtonGroup
        selected={this.props.selected}
        buttons={['Host Game', 'Join Game', 'Local Game']}
        clickHandler={this.presentWrapper()}
      />
    );
  }

  presentWrapper() {
    return (gameType) => {
      setGameTypeAction(this.props.present, gameType);
    };
  }
}


const mapStoreToProps = (store) => {
  return {
    'selected': store.gameType
  };
};

export default connect(mapStoreToProps)(GameType);