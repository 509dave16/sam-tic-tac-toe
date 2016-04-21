function generateSets(cells, size) {
  const sets = [];
  const cellSets = [];
  generateVerticalSets(cells, size, sets, cellSets);
  generateHorizontalSets(cells, size, sets, cellSets);
  generateTopLeftToBottomRightDiagonalSet(cells, size, sets, cellSets);
  generateTopRightToBottomLeftDiagonalSet(cells, size, sets, cellSets);

  return { sets, cellSets, cells };
}

function checkSets(sets, size) {
  for(const cellSet of sets) {
    if(cellSet.count === size) {
      return true;
    }
  }
  return false;
}

function generateVerticalSets(cells, size, sets, cellSets) {
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

function generateHorizontalSets(cells, size, sets, cellSets) {
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

function generateTopRightToBottomLeftDiagonalSet(cells, size, sets, cellSets) {
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

function generateTopLeftToBottomRightDiagonalSet(cells, size, sets, cellSets) {
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
  return sets.push({mark: undefined, count: 0}) - 1;
}



export {
  generateSets,
  checkSets
};