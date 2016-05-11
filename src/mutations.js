import {combineReducers} from 'redux';
import {createAction, handleAction, handleActions} from 'redux-actions';
import {createPrimitiveReducers} from './reducers/helpers/primitiveReducers';
import {createAssignmentReducers} from './reducers/helpers/assignmentReducers';
import {reducer as grid} from './reducers/grid';
import actionCreatorConfigs from './action-creator-configs.js';
import modelProperties from './model-properties.js';


const setup = () => {
  const reducers = {
    grid
  };

// const primitiveProperties = [
//   {property: 'gameType', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['SET_GAMETYPE']},
//   {property: 'gameStatus', defaultValue: 'Please select a game mode!', defaultValueActionTypes: ['QUIT'], actionTypes: ['LOCAL_TURN_SWITCH','HOST_SESSION', 'FINISHED']},
//   {property: 'player', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['HOST_SESSION','JOIN_SESSION']},
//   {property: 'session', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['HOST_SESSION', 'JOIN_SESSION']},
//   {property: 'showJoinSessionForm', defaultValue: false, defaultValueActionTypes: ['QUIT'], actionTypes: ['SET_SHOWJOINSESSIONFORM','JOIN_SESSION']},
//   {property: 'submittedSession', defaultValue: '', defaultValueActionTypes: ['QUIT'], actionTypes: ['SUBMIT_SESSION', 'JOIN_SESSION', 'WRONG_SESSION']},
//   {property: 'move', defaultValue: -1, defaultValueActionTypes: ['QUIT', 'RESTART'], actionTypes: ['MARK_GRID', 'LOCAL_MARK_GRID']},
//   {property: 'turn', defaultValue: '', defaultValueActionTypes: ['QUIT', 'RESTART'], actionTypes: ['LOCAL_TURN_SWITCH']},
//   {property: 'turnSwitch', defaultValue: false, defaultValueActionTypes: ['QUIT'], actionTypes: ['LOCAL_MARK_GRID', 'JOIN_SESSION', 'LOCAL_TURN_SWITCH', 'START_LOCAL_GAME', 'RESTART']},
//   {property: 'quit', defaultValue: false, defaultValueActionTypes: ['QUIT'], actionTypes: ['INITIATE_QUIT']},
//   {property: 'restart', defaultValue: false, defaultValueActionTypes: ['RESTART'], actionTypes: ['INITIATE_RESTART']},
//   {property: 'done', defaultValue: false, defaultValueActionTypes: ['QUIT', 'RESTART'], actionTypes: ['FINISHED']}
// ];


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