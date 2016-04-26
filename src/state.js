const state = {};
//TODO Attach pure functions to 'state' Object that resolve whether a particular Control State is true or false
state.initialize = model => !model.grid.initialized;
state.ready = model => !model.gameType && model.grid.initialized;
state.hostSession = model => model.gameType === 'Host Game' && !model.turn && !model.session;
state.showJoinSessionForm = model => model.gameType === 'Join Game' && !model.showJoinSessionForm && !model.session;
state.joinAsGuest = model => model.gameType === 'Join Game' && !model.turn && model.submittedSession;
state.localTakeTurn = model => model.gameType === 'Local Game' && model.move !== -1 && model.turn && !model.grid.finished;
state.onlineTakeTurn = model => model.gameType !== 'Local Game' && model.move !== -1 && model.turn && !model.grid.finished;
state.localTurnSwitch = model => model.gameType === 'Local Game' && model.turnSwitch && !model.grid.finished;
state.onlineTurnSwitch = model => model.gameType !== 'Local Game' && model.turnSwitch && !model.grid.finished;
state.localQuit = model => model.gameType === 'Local Game' && model.grid.finished && model.quit;
state.onlineQuit = model => model.gameType !== 'Local Game' && model.grid.finished && model.quit;
state.inGame = model => model.turn && !model.grid.finished;
state.finished = model => model.grid.finished && !model.done;
state.done = model => model.done;
export default state;
