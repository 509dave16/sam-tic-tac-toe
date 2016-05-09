import { createAction, handleAction, handleActions } from 'redux-actions'
import Firebase from 'firebase';


function actions() {
  const firebase = new Firebase("https://glowing-fire-9042.firebaseio.com/");
  let firebaseSession = undefined;

  const initializeGrid = createAction('INITIALIZE_GRID');
  const initializeGridAction = (model, present) => {
    present(initializeGrid({}));
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

  const quit = createAction('QUIT');
  const localQuitAction = (model, present) => {
    present(quit({}));
  };
  
  const onlineQuitAction = (model, present) => {
    firebaseSession.child('status').set('Quit', (error)=> {
      firebase.child('sessions').child(session).remove();
    });
  };

  const restart = createAction('RESTART');
  const localRestartAction = (model, present) => {
    present(restart({turnSwitch: true}));
  };

  const onlineRestartAction = (model, present) => {
    firebaseSession.update({status: 'Restart', turn: null}, (error) => {
      firebaseSession.update({status: 'Restarted'}, (error) => {
        this.onlineTurnSwitch(Math.random() > 0.5 ? 'X' : 'O');
      });
    });
  };

  const finished = createAction('FINISHED');
  const finishedAction = (model, present) => {
    const gameStatus = model.grid.winner ? `${model.turn} won!` : `It's a Draw!`;
    present(finished({gameStatus, done: true}));
  };

  const startLocalGame = createAction('START_LOCAL_GAME');
  const startLocalGameAction = (model, present) => {
    present(startLocalGame({turnSwitch: true}));
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
            present(quit({}));
            break;
          case('Restart'):
            present(restart({turnSwitch: true}));
            break;
        }
      }
    });

    firebase.child('sessions').on('child_removed', (snapshot) => {
      if(snapshot.key() === session) {
        present(defaultValue({}));
      }
    });

    window.onbeforeunload = (e) => {
      firebase.child('sessions').child(session).remove();
    };
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
    onlineQuitAction,
    localRestartAction,
    onlineRestartAction,
    finishedAction,
    startLocalGameAction
  };
}

function switchTurn(turn) {
  return turn !== '' ? (turn === 'X' ? 'O' : 'X') : (Math.random() > 0.5 ? 'X' : 'O');
}

function sleep(milliSeconds){
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds); // hog cpu
}



const actionsToCall = actions();
export default actionsToCall;
