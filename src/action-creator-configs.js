import actionTypes from './action-types.js'
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
} = actionTypes;

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
  actionType: INITIALIZE_GRID
}, {
  name: 'initiateMarkGrid',
  actionType: INITIATE_MARK_GRID,
  defaultPayloadValues: {move: undefined},
  dynamicPayloadValues: (cellIndex) => {
    return {move: cellIndex};
  }
}, {
  name: 'markGrid',
  actionType: MARK_GRID,
  defaultPayloadValues: {move, turnSwitch: true},
  dynamicPayloadValues: (cellIndex, mark) => {
    return {cellIndex, mark};
  }
}, {
  name: 'setGameType',
  actionType: SET_GAME_TYPE,
  defaultPayloadValues: {gameType: undefined},
  dynamicPayloadValues: (gameType) => {
    return {gameType}
  }
}, {
  name: 'startLocalGame',
  actionType: START_LOCAL_GAME,
  defaultPayloadValues: {turnSwitch: true}
}, {
  name: 'hostSession',
  actionType: HOST_SESSION,
  defaultPayloadValues: {player: 'X', gameStatus: 'Waiting for player to join game!', session: undefined},
  dynamicPayloadValues: (session) => {
    return {session}
  }
}, {
  name: 'showJoinSessionForm',
  actionType: SHOW_JOIN_SESSION_FORM,
  defaultPayloadValues: {showJoinSessionForm: true}
}, {
  name: 'joinSession',
  actionType: JOIN_SESSION,
  defaultPayloadValues: {player: 'O', showJoinSessionForm, turnSwitch: true, session: undefined},
  dynamicPayloadValues: (session) => {
    return {session}
  }
}, {
  name: 'wrongSession',
  actionType: WRONG_SESSION,
  defaultPayloadValues: {submittedSession: ''}
}, {
  name: 'submitSession',
  actionType: SUBMIT_SESSION,
  defaultPayloadValues: {submittedSession: undefined},
  dynamicPayloadValues: (submittedSession) => {
    return {submittedSession}
  }
}, {
  name: 'turnSwitch',
  actionType: TURN_SWITCH,
  defaultPayloadValues: {turn: undefined, gameStatus: undefined, turnSwitch},
  dynamicPayloadValues: (turn, gameStatus) => {
    return {turn, gameStatus}
  }
}, {
  name: 'initiateQuit',
  actionType: INITIATE_QUIT,
  defaultPayloadValues: {quit: true}
}, {
  name: 'initiateRestart',
  actionType: INITIATE_RESTART,
  defaultPayloadValues: {restart: true}
}, {
  name: 'quit',
  actionType: QUIT,
  defaultPayloadValues: modelProperties
}, {
  name: 'restart',
  actionType: RESTART,
  defaultPayloadValues: {move, turn, restart, done}
}, {
  name: 'finished',
  actionType: FINISHED,
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
