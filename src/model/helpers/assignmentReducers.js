import { handleActions } from 'redux-actions';
const assignmentReducer = (property, defaultValue, intentTypes) => {
  const intentHandlers = {};
  intentTypes.map(intentType =>
    intentHandlers[intentType] =  (state, intent) => intent.payload[property] !== undefined ? intent.payload[property] : state
  );
  
  return handleActions(
    intentHandlers,
    defaultValue
  );
};

const createAssignmentReducers = (properties) => {
  const reducers = {};
  for(const property in properties) {
    const {defaultValue, intentTypes} = properties[property];
    reducers[property] =  assignmentReducer(property, defaultValue, intentTypes);
  }
  return reducers;
};

export {
  createAssignmentReducers
};