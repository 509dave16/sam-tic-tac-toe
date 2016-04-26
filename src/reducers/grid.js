import {generateSets, checkSets} from './../helpers/setHelpers';
import { handleActions } from 'redux-actions';
const defaultValues = { cells: [], cellSets: [], sets: [], finished: false, movesTaken: 0, initialized: false, size: 3};


const INITIALIZE_GRID = (state, action) => {
  const cells = [];
  const numOfCells = Math.pow(state.size, 2);
  for (let count = 0; count < numOfCells; count++) {
    cells.push('');
  }

  const properties = generateSets(cells, state.size);
  return Object.assign({}, state, properties, { initialized: true });
};

const LOCAL_MARK_GRID = (state, action) => {
  const cellIndex = action.payload.cellIndex;
  const mark = action.payload.mark;

  const movesTaken = state.movesTaken + 1;
  const {cellSets, initialized, size} = state;

  const cells = state.cells.map((value, index) => {
    if (index === cellIndex) {
      return mark;
    }
    return value;
  });

  const setIndexes = cellSets[cellIndex];
  const sets = state.sets.map((obj, index) => {
    if (setIndexes.indexOf(index) !== -1 && (obj.mark === undefined || obj.mark === mark)) {
      return {mark: mark, count: obj.count + 1};
    }
    return obj;
  });

  const finished = checkSets(sets, size);

  return { cells, sets, cellSets, movesTaken, finished, initialized, size};

};

const DEFAULT_VALUE = (state, action) => defaultValues;

const actionHandlers = {INITIALIZE_GRID, LOCAL_MARK_GRID, DEFAULT_VALUE};
const reducer = handleActions(actionHandlers, defaultValues);
export {
  reducer
};