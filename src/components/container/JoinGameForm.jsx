import React, {Component} from 'react'
import { connect } from 'react-redux'
import SingleInputForm from './../presentational/SingleInputForm';
import { submitSessionAction } from './../../actions/view';
import { showJoinSessionForm } from './../../state';


//TODO Make this an actual ES6 Component that will accept present and use a high order function for the click handler

class JoinGameForm extends Component {
  constructor(props) {
    super(props);
    this.presentWrapper = this.presentWrapper.bind(this);
  }

  render() {
    if(!this.props.show) {
      return (<div></div>);
    }
    return (
      <SingleInputForm
        defaultInputText="Enter Session ID here..."
        submitButtonText="Join"
        submitHandler={this.presentWrapper()}
      />
    );
  }

  presentWrapper() {
    return (session) => {
      submitSessionAction(this.props.present, session);
    };
  }
}


const mapStoreToProps = (store) => {
  return {
    'show': store.showJoinSessionForm
  };
};

export default connect(mapStoreToProps)(JoinGameForm);