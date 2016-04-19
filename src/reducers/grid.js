import {createAction, handleAction, handleActions} from 'redux-actions';
import {generateSets} from './../utility/set-generator';

const INITIALIZE_GRID = (state, action) => {
  const size = action.payload;
  const cells = [];
  const numOfCells = Math.pow(size, 2);
  for (let count = 0; count < numOfCells; count++) {
    cells.push('');
  }

  return generateSets(cells, size);
};

const MARK_GRID = (state, action) => {
  const cellIndex = action.payload.cellIndex;
  const mark = action.payload.mark;

  const cells = state.cells.map((value, index) => {
    if (index === cellIndex) {
      return mark;
    }
    return value;
  });

  const {cellSets} = state;
  const setIndexes = cellSets[cellIndex];
  const sets = state.sets.map((obj, index) => {
    if (setIndexes.indexOf(index) !== -1 && (obj.mark === undefined || obj.mark === mark)) {
      return {mark: mark, count: obj.count + 1};
    }
    return obj;
  });

  return { cells, sets, cellSets };

};

const handlers = {INITIALIZE_GRID, MARK_GRID};

const reducer = (state = {cells: [], sets: [], cellSets: []}, action) => {
  for (let handlerKey in handlers) {
    if (handlerKey === action.type) {
      return handlers[handlerKey](state, action);
    }
  }
  return state;
};

export {
  reducer
};