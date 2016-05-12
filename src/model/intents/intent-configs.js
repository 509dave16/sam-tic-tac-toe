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
  payloadModelProperties: ['grid'],
  payloadCreator: (grid) => {
    return {grid};
  }
}, {
  name: 'initiateMarkGrid',
  intentType: INITIATE_MARK_GRID,
  payloadModelProperties: ['move'],
  payloadCreator: (move) => {
    return {move};
  }
}, {
  name: 'markGrid',
  intentType: MARK_GRID,
  payloadModelProperties: ['move', 'turnSwitch', 'grid'],
  payloadCreator: (grid) => {
    return {grid, move, turnSwitch: true};
  }
}, {
  name: 'setGameType',
  intentType: SET_GAME_TYPE,
  payloadModelProperties: ['gameType'],
  payloadCreator: (gameType) => {
    return {gameType}
  }
}, {
  name: 'startLocalGame',
  intentType: START_LOCAL_GAME,
  payloadModelProperties: ['turnSwitch'],
  payloadCreator: () => {
    return {turnSwitch: true};
  }
}, {
  name: 'hostSession',
  intentType: HOST_SESSION,
  payloadModelProperties: ['player', 'gameStatus', 'session'],
  payloadCreator: (session) => {
    return {player: 'X', gameStatus: 'Waiting for player to join game!', session};
  }
}, {
  name: 'showJoinSessionForm',
  intentType: SHOW_JOIN_SESSION_FORM,
  payloadModelProperties: ['showJoinSessionForm'],
  payloadCreator: () => {
    return {showJoinSessionForm: true};
  }
}, {
  name: 'joinSession',
  intentType: JOIN_SESSION,
  payloadModelProperties: ['player', 'submittedSession', 'showJoinSessionForm', 'turnSwitch', 'session'],
  payloadCreator: (session) => {
    return {player: 'O', submittedSession, showJoinSessionForm, turnSwitch: true, session};
  }

}, {
  name: 'wrongSession',
  intentType: WRONG_SESSION,
  payloadModelProperties: ['submittedSession'],
  payloadCreator: () => {
    return {submittedSession};
  }
}, {
  name: 'submitSession',
  intentType: SUBMIT_SESSION,
  payloadModelProperties: ['submittedSession'],
  payloadCreator: (submittedSession) => {
    return {submittedSession};
  }
}, {
  name: 'turnSwitch',
  intentType: TURN_SWITCH,
  payloadModelProperties: ['turn', 'gameStatus', 'turnSwitch'],
  payloadCreator: (turn, gameStatus) => {
    return {turn, gameStatus, turnSwitch}
  }
}, {
  name: 'initiateQuit',
  intentType: INITIATE_QUIT,
  payloadModelProperties: ['quit'],
  payloadCreator: () => {
    return {quit: true};
  }
}, {
  name: 'initiateRestart',
  intentType: INITIATE_RESTART,
  payloadModelProperties: ['restart'],
  payloadCreator: () => {
    return {restart: true};
  }
}, {
  name: 'quit',
  intentType: QUIT,
  payloadModelProperties: Object.keys(modelProperties),
  payloadCreator: () => {
    return modelProperties;
  }
}, {
  name: 'restart',
  intentType: RESTART,
  payloadModelProperties: ['move', 'turn', 'restart', 'done', 'grid'],
  payloadCreator: () => {
    return {move, turn, restart, done, grid};
  }
}, {
  name: 'finished',
  intentType: FINISHED,
  payloadModelProperties: ['done', 'gameStatus'],
  payloadCreator: (gameStatus) => {
    return {gameStatus, done: true}
  }
}];

export default intentConfigs;
