import React, {Component} from 'react'
import { connect } from 'react-redux'
import RoundButtonGroup from './../presentational/RoundButtonGroup';

const mapStoreToProps = (store, ownProps) => {
  return {
    selected: store.gameType,
    buttons: ownProps.buttons,
    clickHandler: (gameType) => ownProps.actions.setGameTypeAction(gameType)
  };
};
const GameType = connect(mapStoreToProps)(RoundButtonGroup);
export default GameType;
