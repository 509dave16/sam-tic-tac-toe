import { createAction, handleAction, handleActions } from 'redux-actions';
const primitiveReducer = (property, defaultValue, defaultValueActionTypes, actionTypes) => {
  const actionHandlers = {};
  actionTypes.map(actionType =>
    actionHandlers[actionType] =  (state, action) => action.payload[property] !== undefined ? action.payload[property] : state
  );

  defaultValueActionTypes.map(actionType =>
    actionHandlers[actionType] = (state, action) => defaultValue
  );
  
  return handleActions(
    actionHandlers,
    defaultValue
  );
};

const createPrimitiveReducers = (primitiveProperties) => {
  const reducers = {};
  primitiveProperties.map((primitiveProperty) => {
    const {property, defaultValue, defaultValueActionTypes, actionTypes} = primitiveProperty;
    reducers[property] = primitiveReducer(property, defaultValue, defaultValueActionTypes, actionTypes);
  });
  return reducers;
};

export {
  createPrimitiveReducers
};