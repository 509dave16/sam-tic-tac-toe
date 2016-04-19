import { combineReducers } from 'redux';
import { reducer as primitiveReducer } from './reducers/generic/primitive';

//TODO Create a set of Reducers, each of which is responsible for mutating one property/variable of the Model
const reducers = {};

primitiveReducers(reducers, {'gameType': '', 'gameStatus': '', 'player': '', 'session': '', 'movesTaken': 0, 'size': 3, 'finished': false});
export default combineReducers(reducers);

function primitiveReducers(reducers, primitives) {
  for(const primitive in primitives) {
    const defaultValue = primitives[primitive];
    reducers[primitive] = primitiveReducer(primitive, defaultValue);
  }
}
