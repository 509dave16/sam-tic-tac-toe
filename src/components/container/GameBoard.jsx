import React, {Component} from 'react'
import { connect } from 'react-redux'
import Grid from './../presentational/Grid';

const mapStoreToProps = (store, ownProps) => {
  return {
    grid: store.grid,
    clickHandler: (cellIndex) => ownProps.actions.markGridAction(cellIndex)
  };
};
const GameBoard = connect(mapStoreToProps)(Grid);
export default GameBoard;