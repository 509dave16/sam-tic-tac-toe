import {combineReducers} from 'redux';
import {createAssignmentReducers} from './helpers/reducer-factory';
import intents from './intents.js';
import reducerDefaults from './reducer-defaults.js';

const setup = () => {
  const reducerConfigs = {};
  for(const key in intents) {
    const { type, payload } = intents[key]();
    Object.keys(payload).map(reducerKey => {
      if (!reducerDefaults.hasOwnProperty(reducerKey)) {
        throw `${reducerKey} does not exist on the model! Please fix the intent of type: ${type}!`;
      }
      reducerConfigs[reducerKey] = reducerConfigs[reducerKey] ? reducerConfigs[reducerKey] : { intentTypes: [], defaultValue: reducerDefaults[reducerKey]};
      reducerConfigs[reducerKey].intentTypes.push(type);
    });
  }

  return combineReducers(createAssignmentReducers(reducerConfigs));
};

export default setup();