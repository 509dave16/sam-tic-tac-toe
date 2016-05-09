import React, {Component} from 'react'
import { connect } from 'react-redux'
import RoundButtonGroup from './../presentational/RoundButtonGroup';
import { setGameTypeAction } from './../../actions/view';

const mapStoreToProps = (store, ownProps) => {
  return {
    selected: store.gameType,
    buttons: ownProps.buttons,
    clickHandler: (gameType) => setGameTypeAction(ownProps.present, gameType)
  };
};
const GameType = connect(mapStoreToProps)(RoundButtonGroup);
export default GameType;
