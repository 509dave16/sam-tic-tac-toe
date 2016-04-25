import { createAction, handleAction, handleActions } from 'redux-actions'
import Firebase from 'firebase';


function actions() {
  const firebase = new Firebase("https://glowing-fire-9042.firebaseio.com/");
  let firebaseSession = undefined;

  const initializeGrid = createAction('INITIALIZE_GRID');
  const initializeGridAction = (model, present) => {
    const {size} = model;
    present(initializeGrid({size}));
  };

  const localMarkGrid = createAction('LOCAL_MARK_GRID');
  const localMarkGridAction = (model, present) => {
    const cellIndex = model.move;
    const mark = model.turn;
    present(localMarkGrid({cellIndex, mark, move: -1, turnSwitch: true}));
  };

  const onlineMarkGridAction = (model, present) => {
    const cellIndex = model.move;
    const mark = model.turn;
    firebaseSession.child('move').set({cellIndex, mark});
  };


  const hostSession = createAction('HOST_SESSION');
  const hostSessionAction = (model, present) => {
    firebase.child('sessions').push({status: 'Yayy!'})
      .then((firebaseRef) => {
        firebaseSession = firebaseRef;
        const session = firebaseSession.key();
        setupFirebaseHandlers(session,present);
        present(hostSession({player: 'X', session, gameStatus: 'Waiting for player to join game!'}));
      });
  };
  
  const setShowJoinSessionForm = createAction('SET_SHOWJOINSESSIONFORM');
  const setShowJoinSessionFormAction = (model, present) => {
    present(setShowJoinSessionForm({showJoinSessionForm: true}));
  };

  const joinSession = createAction('JOIN_SESSION');
  const wrongSession = createAction('WRONG_SESSION');
  const joinSessionAction = (model, present) => {
    const session = model.submittedSession;
    firebase.child('sessions').child(session).once('value', (snapshot) => {
      if (snapshot.exists()) {
        firebaseSession = firebase.child('sessions').child(session);
        setupFirebaseHandlers(session,present);
        present(joinSession({session , submittedSession: '', showJoinSessionForm: false, player: 'O', turnSwitch: true}));
      } else {
        present(wrongSession({submittedSession: ''}));
      }
    });
  };

  const localTurnSwitch = createAction('LOCAL_TURN_SWITCH');
  const localTurnSwitchAction = (model, present) => {
    const turn = switchTurn(model.turn);
    present(localTurnSwitch({turn, gameStatus: `${turn}'s turn`, turnSwitch: false}));
  };

  const onlineTurnSwitchAction = (model, present) => {
    const turn = switchTurn(model.turn);
    firebaseSession.child('turn').set(turn);
  };

  const setupFirebaseHandlers = (session, present) => {
    firebaseSession.child('move').on('value', (snapshot) => {
      const move = snapshot.val();
      if (move) {
        const {cellIndex, mark} = move;
        present(localMarkGrid({cellIndex, mark, move: -1, turnSwitch: true}));
      }
    });

    firebaseSession.child('turn').on('value', (snapshot) => {
      const turn = snapshot.val();
      if (turn) {
        present(localTurnSwitch({turn, gameStatus: `${turn}'s turn`, turnSwitch: false }));
      }
    });

    firebaseSession.child('status').on('value', (snapshot) => {
      const status = snapshot.val();
      if (status) {
        switch (status) {
          case('Quit'):
            present(defaultValue({}));
            break;
          // case('Restart'):
          //   this.restart();
          //   break;
        }
      }
    });

    window.onbeforeunload = (e) => {
      firebase.child('sessions').child(session).remove();
    };
  };

  const defaultValue = createAction('DEFAULT_VALUE');
  const localQuitAction = (model, present) => {
    present(defaultValue({}));
  };
  
  const onlineQuitAction = (model, present) => {
    firebaseSession.child('status').set('Quit', (error)=> {
      this.firebase.child('sessions').child(session).remove();
    });
  };

  return {
    initializeGridAction,
    localMarkGridAction,
    onlineMarkGridAction,
    hostSessionAction,
    joinSessionAction,
    setShowJoinSessionFormAction,
    localTurnSwitchAction,
    onlineTurnSwitchAction,
    localQuitAction,
    onlineQuitAction
  };
}

function switchTurn(turn) {
  return turn !== '' ? (turn === 'X' ? 'O' : 'X') : (Math.random() > 0.5 ? 'X' : 'O');
}



const actionsToCall = actions();
export default actionsToCall;
