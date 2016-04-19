import { createAction, handleAction, handleActions } from 'redux-actions';
function reducer(key, defaultValue) {
  return handleActions(
    { [`SET_${key.toUpperCase()}`] : (state, action) => action.payload ? action.payload : state },
    defaultValue
  );
}

export {
  reducer
};