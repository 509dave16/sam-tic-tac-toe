import { createStore } from 'redux'
import  reducers  from './model/reducers.js'
import present from './model/present.js'
import nap from './nap.js'
import DevTools from './components/DevTools';

const createModel = () => {
  const store = createStore(reducers, undefined, DevTools.instrument());
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
