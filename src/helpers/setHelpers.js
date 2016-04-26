function generateSets(cells, size) {
  const sets = [];
  const cellSets = [];
  generateVerticalSets(size, sets, cellSets);
  generateHorizontalSets(size, sets, cellSets);
  generateTopLeftToBottomRightDiagonalSet(size, sets, cellSets);
  generateTopRightToBottomLeftDiagonalSet(size, sets, cellSets);

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
  return sets.push({mark: undefined, count: 0}) - 1;
}

export {
  generateSets,
  checkSets
};