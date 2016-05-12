import mutations from '../model/mutations';
import Firebase from 'firebase';
import {generateSquareGrid, markGrid} from '../model/helpers/square-grid';

const intents = mutations.intents;

function actions() {
  const firebase = new Firebase("https://tic-tac-toe-redux-sam.firebaseio.com");
  let firebaseSession = undefined;

  const initializeGridAction = (model, present) => {
    const grid = generateSquareGrid(model.grid.size);
    const finishedGrid = Object.assign({}, model.grid, grid, {initialized: true});
    present(intents.initializeGrid(finishedGrid));
  };

  const localMarkGridAction = (model, present) => {
    const { move, turn, grid } = model;
    const updatedGrid = markGrid(grid, move, turn);
    present(intents.markGrid(updatedGrid));
  };

  const onlineMarkGridAction = (model, present) => {
    const cellIndex = model.move;
    const mark = model.turn;
    const grid = model.grid;
    firebaseSession.child('move').set({cellIndex, mark, grid});
  };

  const hostSessionAction = (model, present) => {
    firebase.child('sessions').push({status: 'Yayy!'})
      .then((firebaseRef) => {
        firebaseSession = firebaseRef;
        const session = firebaseSession.key();
        setupFirebaseHandlers(session,present);
        present(intents.hostSession(session));
      });
  };
  
  const setShowJoinSessionFormAction = (model, present) => {
    present(intents.showJoinSessionForm());
  };

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

  const localTurnSwitchAction = (model, present) => {
    const turn = switchTurn(model.turn);
    present(intents.turnSwitch(turn, `${turn}'s turn`));
  };

  const onlineTurnSwitchAction = (model, present) => {
    const turn = switchTurn(model.turn);
    firebaseSession.child('turn').set(turn);
  };

  const localQuitAction = (model, present) => {
    present(intents.quit());
  };
  
  const onlineQuitAction = (model, present) => {
    firebaseSession.child('status').set('Quit', (error)=> {
      firebase.child('sessions').child(model.session).remove();
    });
  };

  const localRestartAction = (model, present) => {
    present(intents.restart());
  };

  const onlineRestartAction = (model, present) => {
    firebaseSession.update({status: 'Restart', turn: null}, (error) => {
      firebaseSession.update({status: 'Restarted'}, (error) => {
      });
    });
  };

  const finishedAction = (model, present) => {
    const gameStatus = model.grid.winner ? `${model.turn} won!` : `It's a Draw!`;
    present(intents.finished(gameStatus));
  };

  const startLocalGameAction = (model, present) => {
    present(intents.startLocalGame());
  };

  const setupFirebaseHandlers = (session, present) => {
    firebaseSession.child('move').on('value', (snapshot) => {
      const move = snapshot.val();
      if (move) {
        const {cellIndex, mark, grid} = move;
        const updatedGrid = markGrid(grid, cellIndex, mark);
        present(intents.markGrid(updatedGrid));
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
