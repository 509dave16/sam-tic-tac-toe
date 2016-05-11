import {combineReducers} from 'redux';
import {createAction, handleAction, handleActions} from 'redux-actions';
import {createAssignmentReducers} from './reducers/helpers/assignmentReducers';
import {reducer as grid} from './reducers/grid';
import actionCreatorConfigs from './action-creator-configs.js';
import modelProperties from './model-properties.js';


const setup = () => {
  const reducers = {
    grid
  };

  const obj = setupActionCreatorsAndReducerConfigs(actionCreatorConfigs, modelProperties);
  function setupActionCreatorsAndReducerConfigs (actionCreatorConfigs, modelProperties)
  {
    const reducerConfigs = {};
    const actionCreators = {};
    actionCreatorConfigs.map((creator) => {
      const {name, actionType, defaultPayloadValues, dynamicPayloadValues} = creator;
      //Determine assignment actions for each model property
      for (const property in defaultPayloadValues) {
        if (modelProperties.hasOwnProperty(property)) {
          reducerConfigs[property] = reducerConfigs[property] ? reducerConfigs[property] : { actionTypes: [], defaultValue: modelProperties[property]};
          reducerConfigs[property].actionTypes.push(actionType);
        }
      }
      //Setup action creators
      actionCreators[name] = createAction(actionType, (...args) => {
        const payload = dynamicPayloadValues(...args);
        return Object.assign({}, defaultPayloadValues, payload);
      });
    });

    return {
      reducerConfigs,
      actionCreators
    };
  }


// const primitiveReducers = createPrimitiveReducers(primitiveProperties);
  const assignmentReducers = createAssignmentReducers(obj.reducerConfigs);
  Object.assign(reducers, assignmentReducers);

  return {
    intents: obj.actionCreators,
    reducers: combineReducers(reducers)
  }
};

export default setup()