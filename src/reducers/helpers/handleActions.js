const handleActions = (actionHandlers) => {
  return (state = {}, action) => {
    for (let key in actionHandlers) {
      if (handlerKey === action.type) {
        return actionHandlers[key](state, action);
      }
    }
    return state;
  }
};

export {
  handleActions
}


