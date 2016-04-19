const state = {};
//TODO Attach pure functions to 'state' Object that resolve whether a particular Control State is true or false
state.ready = model => !model.gameType;
state.waitForGuest = model => model.gameType === 'Host Game';
state.joinAsGuest = model => model.gameType === 'Join Game';
state.inGame = model => !model.turn && model.movesTaken !== Math.pow(model.size, 2);
state.finished = model => model.movesTaken === Math.pow(model.size, 2);
export default state;
