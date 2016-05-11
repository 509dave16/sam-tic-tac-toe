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

import modelProperties from './model-properties.js';
const {
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

const noDefaultValues = {};
const noDyamicValues = () => {
  return {}
};

let actionCreatorConfigs = [{
  name: 'initializeGrid',
  intentType: INITIALIZE_GRID
}, {
  name: 'initiateMarkGrid',
  intentType: INITIATE_MARK_GRID,
  defaultPayloadValues: {move: undefined},
  dynamicPayloadValues: (cellIndex) => {
    return {move: cellIndex};
  }
}, {
  name: 'markGrid',
  intentType: MARK_GRID,
  defaultPayloadValues: {move, turnSwitch: true},
  dynamicPayloadValues: (cellIndex, mark) => {
    return {cellIndex, mark};
  }
}, {
  name: 'setGameType',
  intentType: SET_GAME_TYPE,
  defaultPayloadValues: {gameType: undefined},
  dynamicPayloadValues: (gameType) => {
    return {gameType}
  }
}, {
  name: 'startLocalGame',
  intentType: START_LOCAL_GAME,
  defaultPayloadValues: {turnSwitch: true}
}, {
  name: 'hostSession',
  intentType: HOST_SESSION,
  defaultPayloadValues: {player: 'X', gameStatus: 'Waiting for player to join game!', session: undefined},
  dynamicPayloadValues: (session) => {
    return {session}
  }
}, {
  name: 'showJoinSessionForm',
  intentType: SHOW_JOIN_SESSION_FORM,
  defaultPayloadValues: {showJoinSessionForm: true}
}, {
  name: 'joinSession',
  intentType: JOIN_SESSION,
  defaultPayloadValues: {player: 'O', submittedSession, showJoinSessionForm, turnSwitch: true, session: undefined},
  dynamicPayloadValues: (session) => {
    return {session}
  }
  
}, {
  name: 'wrongSession',
  intentType: WRONG_SESSION,
  defaultPayloadValues: {submittedSession: ''}
}, {
  name: 'submitSession',
  intentType: SUBMIT_SESSION,
  defaultPayloadValues: {submittedSession: undefined},
  dynamicPayloadValues: (submittedSession) => {
    return {submittedSession}
  }
}, {
  name: 'turnSwitch',
  intentType: TURN_SWITCH,
  defaultPayloadValues: {turn: undefined, gameStatus: undefined, turnSwitch},
  dynamicPayloadValues: (turn, gameStatus) => {
    return {turn, gameStatus}
  }
}, {
  name: 'initiateQuit',
  intentType: INITIATE_QUIT,
  defaultPayloadValues: {quit: true}
}, {
  name: 'initiateRestart',
  intentType: INITIATE_RESTART,
  defaultPayloadValues: {restart: true}
}, {
  name: 'quit',
  intentType: QUIT,
  defaultPayloadValues: modelProperties
}, {
  name: 'restart',
  intentType: RESTART,
  defaultPayloadValues: {move, turn, restart, done}
}, {
  name: 'finished',
  intentType: FINISHED,
  defaultPayloadValues: {done: true, gameStatus: undefined},
  dynamicPayloadValues: (gameStatus) => {
    return {gameStatus}
  }
}];

actionCreatorConfigs = actionCreatorConfigs.map((config) => {
  config.defaultPayloadValues = config.defaultPayloadValues ? config.defaultPayloadValues : noDefaultValues;
  config.dynamicPayloadValues = config.dynamicPayloadValues ? config.dynamicPayloadValues : noDyamicValues;
  return config;
});

export default actionCreatorConfigs;
