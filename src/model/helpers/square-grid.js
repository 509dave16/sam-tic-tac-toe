
function generateSquareGrid(size) {
  const cells = [];
  const numOfCells = Math.pow(size, 2);
  for (let count = 0; count < numOfCells; count++) {
    cells.push('');
  }

  const properties = generateSets(size);
  properties.cells = cells;
  return properties;
}

function markGrid(grid, cellIndex, mark) {

  const movesTaken = grid.movesTaken + 1;
  const {cellSets, initialized, size} = grid;

  const cells = grid.cells.map((value, index) => {
    if (index === cellIndex) {
      return mark;
    }
    return value;
  });

  const setIndexes = cellSets[cellIndex];
  const sets = grid.sets.map((set, index) => {
    if (setIndexes.indexOf(index) !== -1 && (set.mark === '' || set.mark === mark)) {
      return {mark: mark, count: set.count + 1};
    }
    return set;
  });

  let winner = checkSets(sets, size);
  let finished = winner;
  finished = movesTaken === Math.pow(size, 2) && !winner ? true : finished;

  return { cells, sets, cellSets, movesTaken, finished, initialized, size, winner};
}

function generateSets(size) {
  const sets = [];
  const cellSets = [];
  generateVerticalSets(size, sets, cellSets);
  generateHorizontalSets(size, sets, cellSets);
  generateTopLeftToBottomRightDiagonalSet(size, sets, cellSets);
  generateTopRightToBottomLeftDiagonalSet(size, sets, cellSets);

  return { sets, cellSets };
}

function checkSets(sets, size) {
  for(const cellSet of sets) {
    if(cellSet.count === size) {
      return true;
    }
  }
  return false;
}

function generateVerticalSets(size, sets, cellSets) {
  for (let col = 0; col < size; col++) {
    const setIndex = addDefaultSet(sets);
    for (let row = 0; row < size; row++) {
      const cellIndex = (size * row) + col;
      if (cellSets[cellIndex] === undefined) {
        cellSets[cellIndex] = [];
      }
      cellSets[cellIndex].push(setIndex);
    }
  }
}

function generateHorizontalSets(size, sets, cellSets) {
  for (let row = 0; row < size; row++) {
    const setIndex = addDefaultSet(sets);
    for (let col = 0; col < size; col++) {
      const cellIndex = (size * row) + col;
      if (cellSets[cellIndex] === undefined) {
        cellSets[cellIndex] = [];
      }
      cellSets[cellIndex].push(setIndex);
    }
  }
}

function generateTopRightToBottomLeftDiagonalSet(size, sets, cellSets) {
  const setIndex = addDefaultSet(sets);
  const constant = size - 1;
  for (let count = 0; count < size; count++) {
    const cellIndex = (constant * count) + constant;
    if (cellSets[cellIndex] === undefined) {
      cellSets[cellIndex] = [];
    }
    cellSets[cellIndex].push(setIndex);
  }
}

function generateTopLeftToBottomRightDiagonalSet(size, sets, cellSets) {
  const setIndex = addDefaultSet(sets);
  for(let count = 0; count < size; count++) {
    const cellIndex = (size * count) + count;
    if (cellSets[cellIndex] === undefined) {
      cellSets[cellIndex] = [];
    }
    cellSets[cellIndex].push(setIndex);
  }
}

function addDefaultSet(sets) {
  return sets.push({mark: '', count: 0}) - 1;
}

export {
  generateSquareGrid,
  markGrid,
  checkSets
};