import { handleActions as handleIntents } from 'redux-actions';
const assignmentReducer = (reducerKey, defaultValue, intentTypes) => {
  const intentHandlers = {};
  intentTypes.map(intentType =>
    intentHandlers[intentType] =  (state, intent) => intent.payload[reducerKey] !== undefined ? intent.payload[reducerKey] : state
  );
  
  return handleIntents(
    intentHandlers,
    defaultValue
  );
};

const createAssignmentReducers = (reducerConfigs) => {
  const reducers = {};
  for(const reducerKey in reducerConfigs) {
    const {defaultValue, intentTypes} = reducerConfigs[reducerKey];
    reducers[reducerKey] =  assignmentReducer(reducerKey, defaultValue, intentTypes);
  }
  return reducers;
};

export {
  createAssignmentReducers
};