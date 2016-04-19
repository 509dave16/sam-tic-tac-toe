import {combineReducers} from 'redux';
import {reducer as primitiveReducer} from './reducers/generic/primitive';
import {reducer as grid} from './reducers/grid';
//TODO Create a set of Reducers, each of which is responsible for mutating one property/variable of the Model
const reducers = {
  grid
};
const primitiveProperties = {
  'gameType': '',
  'gameStatus': '',
  'player': '',
  'session': '',
  'movesTaken': 0,
  'size': 3,
  'finished': false
};
primitiveReducers(reducers, primitiveProperties);
export default combineReducers(reducers);

function primitiveReducers(reducers, primitives) {
  for (const primitive in primitives) {
    const defaultValue = primitives[primitive];
    reducers[primitive] = primitiveReducer(primitive, defaultValue);
  }
}
