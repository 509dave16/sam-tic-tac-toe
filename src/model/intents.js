import {createAction as createIntent} from 'redux-actions';
import types from './intent-types.js';
import defaults from './reducer-defaults.js';

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
} = defaults;

export default {
  initializeGrid: createIntent(types.INITIALIZE_GRID, grid => ({grid}) ),
  initiateMarkGrid: createIntent(types.INITIATE_MARK_GRID, move => ({move}) ),
  markGrid: createIntent(types.MARK_GRID, grid => ({grid, move, turnSwitch: true}) ),
  setGameType: createIntent(types.SET_GAME_TYPE, gameType => ({gameType}) ),
  startLocalGame: createIntent(types.START_LOCAL_GAME, () => ({turnSwitch: true}) ),
  hostSession: createIntent(types.HOST_SESSION, session => ({player: 'X', gameStatus: 'Waiting for player to join game!', session}) ),
  showJoinSessionForm: createIntent(types.SHOW_JOIN_SESSION_FORM, () => ({showJoinSessionForm: true}) ),
  joinSession: createIntent(types.JOIN_SESSION, session => ({player: 'O', submittedSession, showJoinSessionForm, turnSwitch: true, session}) ),
  wrongSession: createIntent(types.WRONG_SESSION, () => ({submittedSession}) ),
  submitSession: createIntent(types.SUBMIT_SESSION, submittedSession => ({submittedSession}) ),
  turnSwitch: createIntent(types.TURN_SWITCH, (turn, gameStatus) => ({turn, gameStatus, turnSwitch}) ),
  initiateQuit: createIntent(types.INITIATE_QUIT, () => ({quit: true}) ),
  initiateRestart: createIntent(types.INITIATE_RESTART, () => ({restart: true}) ),
  quit: createIntent(types.QUIT, () => defaults),
  restart: createIntent(types.RESTART, () => ({move, turn, restart, done, grid}) ),
  finished: createIntent(types.FINISHED, gameStatus => ({gameStatus, done: true}) )
};


