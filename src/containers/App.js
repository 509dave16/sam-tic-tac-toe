import React from 'react'
import { connect } from 'react-redux'
import state from '../state'

const App = ({
  //TODO Control State Flags
  //TODO Model Values
  //TODO Control State Actions
  present,
}) => {
  //TODO Create JSX or hyperscript statements to build the State Representation
  return (
   <div></div>
  )
};

const mapStoreToProps = (store) => {
  return {
    //TODO Map flags that correspond to Control States here as the Presentational Component should not have to know about Control States
    //TODO Map appropriate properties/values from the Model since the Presentational Component should not have access to everything
    //TODO Map appropriate Actions that should be available to View for the particular Control State that is active
  };
};

export default connect(mapStoreToProps)(App);
