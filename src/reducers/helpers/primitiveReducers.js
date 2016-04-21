import { createAction, handleAction, handleActions } from 'redux-actions';
const primitiveReducer = (property, defaultValue, actionTypes) => {
  const actionHandlers = {};
  actionTypes.map((actionType) => {
    actionHandlers[actionType] =  (state, action) => action.payload[property] ? action.payload[property] : state;
  });
  
  actionHandlers.DEFAULT_VALUE = (state, action) => defaultValue;

  return handleActions(
    actionHandlers,
    defaultValue
  );
};

const createPrimitiveReducers = (primitiveProperties) => {
  const reducers = {};
  primitiveProperties.map((primitiveProperty) => {
    const {property, defaultValue, actionTypes} = primitiveProperty;
    reducers[property] = primitiveReducer(property, defaultValue, actionTypes);
  });
  return reducers;
};

export {
  createPrimitiveReducers
};