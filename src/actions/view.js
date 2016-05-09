import { createAction, handleAction, handleActions } from 'redux-actions'

const markGrid = createAction('MARK_GRID');
const markGridAction = (present, cellIndex) => {
  present(markGrid({move: cellIndex}));
};

const setGameType = createAction('SET_GAMETYPE');
const setGameTypeAction = (present, gameType) => {
  present(setGameType({gameType}));
};

const initiateQuit = createAction('INITIATE_QUIT');
const initiateQuitAction = (present) => {
  present(initiateQuit({quit: true}));
};

const initiateRestart = createAction('INITIATE_RESTART');
const initiateRestartAction = (present) => {
  present(initiateRestart({restart: true}));
};

const submitSession = createAction('SUBMIT_SESSION');
const submitSessionAction = (present, submittedSession) => {
  present(submitSession({submittedSession}));
};

export {
  markGridAction,
  setGameTypeAction,
  submitSessionAction,
  initiateQuitAction,
  initiateRestartAction
};
