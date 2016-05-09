import React, {Component} from 'react'
import { connect } from 'react-redux'
import Grid from './../presentational/Grid';
import { markGridAction } from './../../actions/view';

const mapStoreToProps = (store, ownProps) => {
  return {
    grid: store.grid,
    clickHandler: (cellIndex) => markGridAction(ownProps.present, cellIndex)
  };
};
const GameType = connect(mapStoreToProps)(Grid);
export default GameType;