import {combineReducers} from 'redux';
import {createAction} from 'redux-actions';
import {createAssignmentReducers} from './reducers/helpers/assignmentReducers';
import {reducer as grid} from './reducers/grid';
import intentConfigs from './intent-configs.js';
import modelProperties from './model-properties.js';

const setup = () => {
  const reducerConfigs = {};
  const intents = {};
  intentConfigs.map((intent) => {
    const {name, intentType, payloadModelProperties, payloadCreator} = intent;
    //Determine assignment actions for each model property
    payloadModelProperties.map((property) => {
      if (modelProperties.hasOwnProperty(property)) {
        reducerConfigs[property] = reducerConfigs[property] ? reducerConfigs[property] : { intentTypes: [], defaultValue: modelProperties[property]};
        reducerConfigs[property].intentTypes.push(intentType);
      }
    });

    //Setup action intents
    intents[name] = createAction(intentType, (...args) => {
      return payloadCreator(...args);
    });
  });

  const assignmentReducers = createAssignmentReducers(reducerConfigs);
  const reducers = Object.assign({ grid }, assignmentReducers);

  return {
    intents,
    reducers: combineReducers(reducers)
  }
};

export default setup()