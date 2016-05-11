import { createStore, combineReducers } from 'redux'
import  mutations  from './mutations.js'
import present from './present.js'
import nap from './nap.js'
import DevTools from './components/DevTools';

const createModel = () => {
  const reducer = mutations.reducers;
  const store = createStore(reducer, undefined, DevTools.instrument());
  const mergeStateToPresent = dataset => {
    present(dataset, store.getState())(store.dispatch);
    nap(store.getState())(mergeStateToPresent);
  };

  mergeStateToPresent({type:'FIRST_DISPATCH'});

  return {
    present: mergeStateToPresent,
    store
  }
};

export default createModel()
