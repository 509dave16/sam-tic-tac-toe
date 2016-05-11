import { handleActions } from 'redux-actions';
const assignmentReducer = (property, defaultValue, actionTypes) => {
  const actionHandlers = {};
  actionTypes.map(actionType =>
    actionHandlers[actionType] =  (state, action) => action.payload[property] !== undefined ? action.payload[property] : state
  );
  
  return handleActions(
    actionHandlers,
    defaultValue
  );
};

const createAssignmentReducers = (properties) => {
  const reducers = {};
  for(const property in properties) {
    const {defaultValue, actionTypes} = properties[property];
    reducers[property] =  assignmentReducer(property, defaultValue, actionTypes);
  }
  return reducers;
};

export {
  createAssignmentReducers
};