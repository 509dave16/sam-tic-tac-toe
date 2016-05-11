import { createAction, handleAction, handleActions } from 'redux-actions'
import mutations from './../mutations';
const intents = mutations.intents;
//const markGrid = createAction('MARK_GRID');
const markGridAction = (present, cellIndex) => {
  present(intents.initiateMarkGrid(cellIndex));
};

//const setGameType = createAction('SET_GAMETYPE');
const setGameTypeAction = (present, gameType) => {
  present(intents.setGameType(gameType));
};

//const initiateQuit = createAction('INITIATE_QUIT');
const initiateQuitAction = (present) => {
  present(intents.initiateQuit());
};

//const initiateRestart = createAction('INITIATE_RESTART');
const initiateRestartAction = (present) => {
  present(intents.initiateRestart());
};

//const submitSession = createAction('SUBMIT_SESSION');
const submitSessionAction = (present, submittedSession) => {
  present(intents.submitSession(submittedSession));
};

export {
  markGridAction,
  setGameTypeAction,
  submitSessionAction,
  initiateQuitAction,
  initiateRestartAction
};
