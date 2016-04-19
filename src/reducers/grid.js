import {createAction, handleAction, handleActions} from 'redux-actions';
import { generateSets } from './../utility/set-generator';

const INITIALIZE_GRID = (state, action) => {
  const size = action.payload;
  const cells = [];
  const numOfCells = Math.pow(size, 2);
  for(let count = 0; count < numOfCells; count++) {
    cells.push('');
  }

  return generateSets(cells, size);
};

const handlers = { INITIALIZE_GRID };

const reducer = (state = {cells: [], sets: [], cellSets: []}, action) => {
  for(let handlerKey in handlers) {
    if(handlerKey === action.type) {
      return handlers[handlerKey](state, action);
    }
  }
  return state;
};

export {
  reducer
};