import React, {Component} from 'react'
import { connect } from 'react-redux'
import SingleInputForm from './../presentational/SingleInputForm';
import { submitSessionAction } from './../../actions/view';

const mapStoreToProps = (store, ownProps) => {
  return {
    show: store.showJoinSessionForm,
    defaultInputText: 'Enter Session ID here...',
    submitButtonText: 'Join',
    submitHandler: session => submitSessionAction(ownProps.present, session)
  };
};

const JoinGameForm = connect(mapStoreToProps)(SingleInputForm);
export default JoinGameForm;