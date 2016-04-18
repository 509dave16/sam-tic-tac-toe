const state = {};
//TODO Attach pure functions to 'state' Object that resolve whether a particular Control State is true or false
state.ready = model => !model.gameType;
state.waitForGuest = model => model.gameType === 'Host Game';
export default state;
