import state from './state'
import napActions from './actions/nap';

const controlStateToActions = {
  initialize: napActions.initializeGridAction,
  startLocalGame: napActions.startLocalGameAction,
  hostSession: napActions.hostSessionAction,
  joinAsGuest: napActions.joinSessionAction,
  localTakeTurn: napActions.localMarkGridAction,
  onlineTakeTurn: napActions.onlineMarkGridAction,
  localTurnSwitch: napActions.localTurnSwitchAction,
  onlineTurnSwitch: napActions.onlineTurnSwitchAction,
  showJoinSessionForm: napActions.setShowJoinSessionFormAction,
  localQuit: napActions.localQuitAction,
  onlineQuit: napActions.onlineQuitAction,
  finished: napActions.finishedAction
};

const nap = model => {
  return present => {
    //TODO Create control flow structure for initiating automatic Actions based on current Control State
    for (const controlState in controlStateToActions) {
      if(state[controlState](model)) {
        const action = controlStateToActions[controlState];
        action(model, present);
      }
    }
  }
};

export default nap
