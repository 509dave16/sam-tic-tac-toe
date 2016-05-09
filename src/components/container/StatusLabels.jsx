import React, {Component} from 'react'
import { connect } from 'react-redux'
import LabelKeyValueList from './../presentational/LabelKeyValueList';

const mapStoreToProps = (store) => {
  return {
    'keyValuePairs' : {
      'Session:': store.session,
      'Player:': store.player,
      'Game Status:': store.gameStatus
    }
  };
};
const StatusLabels = connect(mapStoreToProps)(LabelKeyValueList);
export default StatusLabels;