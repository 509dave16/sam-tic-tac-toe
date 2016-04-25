import { createAction, handleAction, handleActions } from 'redux-actions'

const markGrid = createAction('MARK_GRID');
const markGridAction = (present, cellIndex) => {
  present(markGrid({move: cellIndex}));
};

const setGameType = createAction('SET_GAMETYPE');
const setGameTypeAction = (present, gameType) => {
  present(setGameType({gameType}));
};

const guit = createAction('QUIT');
const quitAction = (present) => {
  present(quit({}));
};

const submitSession = createAction('SUBMIT_SESSION');
const submitSessionAction = (present, session) => {
  present(submitSession({session}));
};

export {
  markGridAction,
  setGameTypeAction,
  quitAction,
  submitSessionAction
};
