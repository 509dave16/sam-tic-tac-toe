import intentTypes from './intent-types.js'
const {
  INITIALIZE_GRID,
  INITIATE_MARK_GRID,
  MARK_GRID,
  SET_GAME_TYPE,
  START_LOCAL_GAME,
  HOST_SESSION,
  SHOW_JOIN_SESSION_FORM,
  JOIN_SESSION,
  WRONG_SESSION,
  SUBMIT_SESSION,
  TURN_SWITCH,
  INITIATE_QUIT,
  INITIATE_RESTART,
  QUIT,
  RESTART,
  FINISHED
} = intentTypes;

import modelProperties from '../model-properties.js';
const {
  grid,
  gameType,
  gameStatus,
  player,
  session,
  showJoinSessionForm,
  submittedSession,
  move,
  turn,
  turnSwitch,
  quit,
  restart,
  done
} = modelProperties;

let intentConfigs = [{
  name: 'initializeGrid',
  intentType: INITIALIZE_GRID,
  payloadCreator: (grid) => {
    return {grid};
  }
}, {
  name: 'initiateMarkGrid',
  intentType: INITIATE_MARK_GRID,
  payloadCreator: (move) => {
    return {move};
  }
}, {
  name: 'markGrid',
  intentType: MARK_GRID,
  payloadCreator: (grid) => {
    return {grid, move, turnSwitch: true};
  }
}, {
  name: 'setGameType',
  intentType: SET_GAME_TYPE,
  payloadCreator: (gameType) => {
    return {gameType}
  }
}, {
  name: 'startLocalGame',
  intentType: START_LOCAL_GAME,
  payloadCreator: () => {
    return {turnSwitch: true};
  }
}, {
  name: 'hostSession',
  intentType: HOST_SESSION,
  payloadCreator: (session) => {
    return {player: 'X', gameStatus: 'Waiting for player to join game!', session};
  }
}, {
  name: 'showJoinSessionForm',
  intentType: SHOW_JOIN_SESSION_FORM,
  payloadCreator: () => {
    return {showJoinSessionForm: true};
  }
}, {
  name: 'joinSession',
  intentType: JOIN_SESSION,
  payloadCreator: (session) => {
    return {player: 'O', submittedSession, showJoinSessionForm, turnSwitch: true, session};
  }
}, {
  name: 'wrongSession',
  intentType: WRONG_SESSION,
  payloadCreator: () => {
    return {submittedSession};
  }
}, {
  name: 'submitSession',
  intentType: SUBMIT_SESSION,
  payloadCreator: (submittedSession) => {
    return {submittedSession};
  }
}, {
  name: 'turnSwitch',
  intentType: TURN_SWITCH,
  payloadCreator: (turn, gameStatus) => {
    return {turn, gameStatus, turnSwitch}
  }
}, {
  name: 'initiateQuit',
  intentType: INITIATE_QUIT,
  payloadCreator: () => {
    return {quit: true};
  }
}, {
  name: 'initiateRestart',
  intentType: INITIATE_RESTART,
  payloadCreator: () => {
    return {restart: true};
  }
}, {
  name: 'quit',
  intentType: QUIT,
  payloadCreator: () => {
    return modelProperties;
  }
}, {
  name: 'restart',
  intentType: RESTART,
  payloadCreator: () => {
    return {move, turn, restart, done, grid};
  }
}, {
  name: 'finished',
  intentType: FINISHED,
  payloadCreator: (gameStatus) => {
    return {gameStatus, done: true}
  }
}];

export default intentConfigs;
