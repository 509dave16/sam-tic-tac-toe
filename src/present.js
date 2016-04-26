
const present = (dataset, model) => {
  return dispatch => {
    //TODO Create control flow structure for accepting proposed Model mutations based on current Control State and Model Values
    if(dataset.type === 'SET_GAMETYPE' && model.gameType) {
      return;
    }

    if(dataset.type === 'MARK_GRID' &&
      ((model.gameType !== 'Local Game' && model.player !== model.turn)
      || (model.grid.cells[dataset.payload.move] !== '' )
    )) { return;}

    dispatch(dataset);
  }
};

export default present
