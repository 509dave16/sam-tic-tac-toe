import {combineReducers} from 'redux';
import {createAction} from 'redux-actions';
import {createAssignmentReducers} from './helpers/assignmentReducers';
import intentConfigs from './intents/intent-configs.js';
import modelProperties from './model-properties.js';

const setup = () => {
  const reducerConfigs = {};
  const intents = {};
  intentConfigs.map((intent) => {
    const {name, intentType, payloadCreator} = intent;
    //Determine assignment actions for each model property
    Object.keys(payloadCreator()).map((property) => {
      if (!modelProperties.hasOwnProperty(property)) {
        throw `${property} does not exist on the model! Please fix the payloadCreator for the intent configuration of type: ${intentType}!`;
      }
      reducerConfigs[property] = reducerConfigs[property] ? reducerConfigs[property] : { intentTypes: [], defaultValue: modelProperties[property]};
      reducerConfigs[property].intentTypes.push(intentType);
    });
    //Setup action intents
    intents[name] = createAction(intentType, payloadCreator);
  });

  return {
    intents,
    reducers: combineReducers(createAssignmentReducers(reducerConfigs))
  }
};

export default setup()