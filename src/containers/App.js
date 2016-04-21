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
  //TODO Control State Actions
  present,
}) => {
  //TODO Create JSX or hyperscript statements to build the State Representation

  const setGameType = createAction('SET_GAMETYPE');
  const initializeGrid = createAction('INITIALIZE_GRID');
  const markGrid = createAction('LOCAL_MARK_GRID');
  let gameTypeNode;
  let markNode;
  let cellIndexNode;
  const setGameTypeHandler = (event) => {
    present(setGameType(gameTypeNode.value));
  };
  const initializeGridHandler = (event) => {
    present(initializeGrid({size: 3}));
  };

  const markGridHandler = (event) => {
    present(markGrid({
     mark: markNode.value,
     cellIndex: parseInt(cellIndexNode.value)
    }));
  };

  return (
   <div>
     <div><span>Game Type</span><input id='gameType' ref={node => gameTypeNode = node} type="text" /><button onClick={setGameTypeHandler}>Submit</button></div>
     <div><button onClick={initializeGridHandler}>Initialize Grid</button></div>
     <div>
       <span>Mark</span><input ref={node => markNode = node} />
       <span>Cell Index</span><input ref={node => cellIndexNode = node} />
       <button onClick={markGridHandler}>Mark Grid</button>
     </div>
   </div>
  )
};


const mapStoreToProps = (store) => {
  return {
    //TODO Map flags that correspond to Control States here as the Presentational Component should not have to know about Control States
    //TODO Map appropriate properties/values from the Model since the Presentational Component should not have access to everything
    //TODO Map appropriate Actions that should be available to View for the particular Control State that is active
    'gameType': store.gameType,
    'gameStatus': store.gameStatus,
    'player': store.player,
    'session': store.player,
  };
};

export default connect(mapStoreToProps)(App);
