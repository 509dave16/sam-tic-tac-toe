import React, {Component} from 'react'
import {connect} from 'react-redux'
import ButtonList from './../presentational/ButtonList';

const mapStoreToProps = (store, ownProps) => {
  const {initiateRestartAction, initiateQuitAction} = ownProps.actions;
  const showQuit = store.gameType === 'Host Game' || (store.gameStatus.indexOf('turn') !== -1) || store.done;
  const showRestart = store.gameType !== 'Join Game' && store.done;
  return {
    buttons: [
      {name: 'Restart', clickHandler: () => initiateRestartAction(), show: showRestart},
      {name: 'Quit', clickHandler: () => initiateQuitAction(), show: showQuit}
    ]
  };
};

const GameButtons = connect(mapStoreToProps)(ButtonList);
export default GameButtons;