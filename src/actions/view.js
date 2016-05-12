import mutations from '../model/mutations';
const intents = mutations.intents;

const markGridAction = (present, cellIndex) => {
  present(intents.initiateMarkGrid(cellIndex));
};

const setGameTypeAction = (present, gameType) => {
  present(intents.setGameType(gameType));
};

const initiateQuitAction = (present) => {
  present(intents.initiateQuit());
};

const initiateRestartAction = (present) => {
  present(intents.initiateRestart());
};

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
