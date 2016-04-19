import React from 'react'
import { connect } from 'react-redux'
import state from '../state'
import { createAction, handleAction, handleActions } from 'redux-actions'


const App = ({
  //TODO Control State Flags
  //TODO Model Values
  gameType,
  gameStatus,
  player,
  session,
  movesTaken,
  //TODO Control State Actions
  present,
}) => {
  //TODO Create JSX or hyperscript statements to build the State Representation

  const setGameType = createAction('SET_GAMETYPE');
  let gameTypeNode;
  const sampleHandler = (element) => {
    present(setGameType(gameTypeNode.value));
  };

  return (
   <div>
     <div><span>Game Type</span><input id='gameType' ref={node => gameTypeNode = node} type="text" /><button onClick={sampleHandler}>Submit</button></div>
     <div><span>Game Status</span><input type="text" value={gameStatus} /><button>Submit</button></div>
     <div><span>Player</span><input type="text" value={player} /><button>Submit</button></div>
     <div><span>Session</span><input type="text" value={session} /><button>Submit</button></div>
     <div><span>Moves Taken</span><input type="text" value={movesTaken} /><button>Submit</button></div>
   </div>
  )
};


const mapStoreToProps = (store) => {
  console.log(store);
  return {
    //TODO Map flags that correspond to Control States here as the Presentational Component should not have to know about Control States
    //TODO Map appropriate properties/values from the Model since the Presentational Component should not have access to everything
    //TODO Map appropriate Actions that should be available to View for the particular Control State that is active
    'gameType': store.gameType,
    'gameStatus': store.gameStatus,
    'player': store.player,
    'session': store.player,
    'movesTaken': store.movesTaken
  };
};

export default connect(mapStoreToProps)(App);
