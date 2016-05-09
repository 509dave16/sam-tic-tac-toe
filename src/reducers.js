import {combineReducers} from 'redux';
import { createPrimitiveReducers } from './reducers/helpers/primitiveReducers';
import {reducer as grid} from './reducers/grid';

//TODO Create a set of Reducers, each of which is responsible for mutating one property/variable of the Model
const reducers = {
  grid
};

const primitiveProperties = [
  {property: 'gameType', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['SET_GAMETYPE']},
  {property: 'gameStatus', defaultValue: 'Please select a game mode!', defaultValueActionTypes: ['QUIT'], actionTypes: ['LOCAL_TURN_SWITCH','HOST_SESSION', 'FINISHED']},
  {property: 'player', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['HOST_SESSION','JOIN_SESSION']},
  {property: 'session', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['HOST_SESSION', 'JOIN_SESSION']},
  {property: 'showJoinSessionForm', defaultValue: false, defaultValueActionTypes: ['QUIT'], actionTypes: ['SET_SHOWJOINSESSIONFORM','JOIN_SESSION']},
  {property: 'submittedSession', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['SUBMIT_SESSION', 'JOIN_SESSION', 'WRONG_SESSION']},
  {property: 'move', defaultValue: -1, defaultValueActionTypes: ['QUIT', 'RESTART'], actionTypes: ['MARK_GRID', 'LOCAL_MARK_GRID']},
  {property: 'turn', defaultValue: '', defaultValueActionTypes: ['QUIT', 'RESTART'], actionTypes: ['LOCAL_TURN_SWITCH']},
  {property: 'turnSwitch', defaultValue: false, defaultValueActionTypes: ['QUIT'], actionTypes: ['LOCAL_MARK_GRID', 'JOIN_SESSION', 'LOCAL_TURN_SWITCH', 'START_LOCAL_GAME', 'RESTART']},
  {property: 'quit', defaultValue: false, defaultValueActionTypes: ['QUIT'], actionTypes: ['INITIATE_QUIT']},
  {property: 'restart', defaultValue: false, defaultValueActionTypes: ['RESTART'], actionTypes: ['INITIATE_RESTART']},
  {property: 'done', defaultValue: false, defaultValueActionTypes: ['QUIT', 'RESTART'], actionTypes: ['FINISHED']}
];

const primitiveReducers = createPrimitiveReducers(primitiveProperties);
Object.assign(reducers, primitiveReducers);
export default combineReducers(reducers);
