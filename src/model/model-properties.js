const properties = {
  grid: { cells: [], cellSets: [], sets: [], finished: false, winner: false, movesTaken: 0, initialized: false, size: 3},
  gameType: '',
  gameStatus: 'Please select a game mode!',
  player: '',
  session: '',
  showJoinSessionForm: false,
  submittedSession: '',
  move: -1,
  turn: '',
  turnSwitch: false,
  quit: false,
  restart: false,
  done: false
};
export default properties;