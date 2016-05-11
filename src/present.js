import actionTypes from './action-types';

const present = (dataset, model) => {
  return dispatch => {
    if(dataset.type === actionTypes.SET_GAME_TYPE && model.gameType) {
      return;
    }

    if(dataset.type === actionTypes.INITIATE_MARK_GRID &&
      ((model.gameType !== 'Local Game' && model.player !== model.turn)
      || (model.grid.cells[dataset.payload.move] !== ''))
      && !model.grid.finished
    ) { return;}

    dispatch(dataset);
  }
};

export default present
