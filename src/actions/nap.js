import { createAction, handleAction, handleActions } from 'redux-actions';
import mutations from './../mutations';
import Firebase from 'firebase';

const intents = mutations.intents;

function actions() {
  const firebase = new Firebase("https://glowing-fire-9042.firebaseio.com/");
  let firebaseSession = undefined;

  //const initializeGrid = createAction('INITIALIZE_GRID');
  const initializeGridAction = (model, present) => {
    var blah = 1 + 1;
    present(intents.initializeGrid());
  };

  //const localMarkGrid = createAction('LOCAL_MARK_GRID');
  const localMarkGridAction = (model, present) => {
    const cellIndex = model.move;
    const mark = model.turn;
    present(intents.markGrid(cellIndex, mark));
  };

  const onlineMarkGridAction = (model, present) => {
    const cellIndex = model.move;
    const mark = model.turn;
    firebaseSession.child('move').set({cellIndex, mark});
  };


  //const hostSession = createAction('HOST_SESSION');
  const hostSessionAction = (model, present) => {
    firebase.child('sessions').push({status: 'Yayy!'})
      .then((firebaseRef) => {
        firebaseSession = firebaseRef;
        const session = firebaseSession.key();
        setupFirebaseHandlers(session,present);
        present(intents.hostSession(session));
      });
  };
  
  //const setShowJoinSessionForm = createAction('SET_SHOWJOINSESSIONFORM');
  const setShowJoinSessionFormAction = (model, present) => {
    present(intents.showJoinSessionForm());
  };
  // const joinSession = createAction('JOIN_SESSION');
  // const wrongSession = createAction('WRONG_SESSION');
  const joinSessionAction = (model, present) => {
    const session = model.submittedSession;
    firebase.child('sessions').child(session).once('value', (snapshot) => {
      if (snapshot.exists()) {
        firebaseSession = firebase.child('sessions').child(session);
        setupFirebaseHandlers(session,present);
        present(intents.joinSession(session));
      } else {
        present(intents.wrongSession());
      }
    });
  };

 // const localTurnSwitch = createAction('LOCAL_TURN_SWITCH');
  const localTurnSwitchAction = (model, present) => {
    const turn = switchTurn(model.turn);
    present(intents.turnSwitch(turn, `${turn}'s turn`));
  };

  const onlineTurnSwitchAction = (model, present) => {
    const turn = switchTurn(model.turn);
    firebaseSession.child('turn').set(turn);
  };

  //const quit = createAction('QUIT');
  const localQuitAction = (model, present) => {
    present(intents.quit());
  };
  
  const onlineQuitAction = (model, present) => {
    firebaseSession.child('status').set('Quit', (error)=> {
      firebase.child('sessions').child(model.session).remove();
    });
  };

  // const restart = createAction('RESTART');
  const localRestartAction = (model, present) => {
    present(intents.restart());
  };

  const onlineRestartAction = (model, present) => {
    firebaseSession.update({status: 'Restart', turn: null}, (error) => {
      firebaseSession.update({status: 'Restarted'}, (error) => {
      });
    });
  };

  // const finished = createAction('FINISHED');
  const finishedAction = (model, present) => {
    const gameStatus = model.grid.winner ? `${model.turn} won!` : `It's a Draw!`;
    present(intents.finished(gameStatus));
  };

  //const startLocalGame = createAction('START_LOCAL_GAME');
  const startLocalGameAction = (model, present) => {
    present(intents.startLocalGame());
  };

  const setupFirebaseHandlers = (session, present) => {
    firebaseSession.child('move').on('value', (snapshot) => {
      const move = snapshot.val();
      if (move) {
        const {cellIndex, mark} = move;
        present(intents.markGrid(cellIndex, mark));
      }
    });

    firebaseSession.child('turn').on('value', (snapshot) => {
      const turn = snapshot.val();
      if (turn) {
        present(intents.turnSwitch(turn, `${turn}'s turn`));
      }
    });

    firebaseSession.child('status').on('value', (snapshot) => {
      const status = snapshot.val();
      if (status) {
        switch (status) {
          case('Quit'):
            present(intents.quit());
            break;
          case('Restart'):
            present(intents.restart());
            break;
        }
      }
    });

    firebase.child('sessions').on('child_removed', (snapshot) => {
      if(snapshot.key() === session) {
        present(intents.quit());
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

const actionsToCall = actions();
export default actionsToCall;
