import {combineReducers} from 'redux';
import { createPrimitiveReducers } from './reducers/helpers/primitiveReducers';
import {reducer as grid} from './reducers/grid';

//TODO Create a set of Reducers, each of which is responsible for mutating one property/variable of the Model
const reducers = {
  grid
};

const primitiveProperties = [
  {property: 'gameType', defaultValue: '', actionTypes: ['SET_GAMETYPE']},
  {property: 'gameStatus', defaultValue: 'Please select a game mode!', actionTypes: ['LOCAL_TURN_SWITCH','HOST_SESSION']},
  {property: 'player', defaultValue: '', actionTypes: ['HOST_SESSION','JOIN_SESSION']},
  {property: 'session', defaultValue: '', actionTypes: ['HOST_SESSION', 'JOIN_SESSION']},
  {property: 'showJoinSessionForm', defaultValue: false, actionTypes: ['SET_SHOWJOINSESSIONFORM','JOIN_SESSION']},
  {property: 'submittedSession', defaultValue: '', actionTypes: ['SUBMIT_SESSION', 'JOIN_SESSION', 'WRONG_SESSION']},
  {property: 'move', defaultValue: -1, actionTypes: ['MARK_GRID', 'LOCAL_MARK_GRID']},
  {property: 'turn', defaultValue: '', actionTypes: ['LOCAL_TURN_SWITCH']},
  {property: 'turnSwitch', defaultValue: false, actionTypes: ['LOCAL_MARK_GRID', 'JOIN_SESSION', 'LOCAL_TURN_SWITCH']},
  {property: 'size', defaultValue: 3, actionTypes: []},
  {property: 'quit', defaultValue: false, actionTypes: ['QUIT']}
];

const primitiveReducers = createPrimitiveReducers(primitiveProperties);
Object.assign(reducers, primitiveReducers);
export default combineReducers(reducers);
