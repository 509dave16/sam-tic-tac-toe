import React from 'react';
import {Provider} from 'react-redux';
import GameType from './container/GameType';
import JoinGameForm from './container/JoinGameForm';
import StatusLabels from './container/StatusLabels';
import GameBoard from './container/GameBoard';
import GameButtons from './container/GameButtons';
import DevTools from './DevTools';
import styles from './Game.scss';

export default ({
  store,
  actions
}) => {
  return (
    <Provider store={store}>
      <div className={`${styles.rowCentered}`}>
        <div className={`${styles.container} ${styles.columnCentered}`}>
          <h1 className={`${styles.mainHeader}`}>Tic Tac Toe</h1>
          <GameType actions={actions} buttons={['Host Game', 'Join Game', 'Local Game']}/>
          <JoinGameForm actions={actions}/>
          <StatusLabels />
          <GameBoard actions={actions}/>
          <GameButtons actions={actions}/>
          <h1 className={styles.attributionFooter}>
            Made with
            <a href="https://facebook.github.io/react/" target="_blank">
              <div className={styles.reactIcon}></div>
            </a>
            <a href="http://redux.js.org/" target="_blank">
              <div className={styles.reduxIcon}></div>
            </a>
            <a href="https://www.firebase.com/" target="_blank">
              <div className={styles.firebaseIcon}></div>
            </a>
            !
          </h1>
        </div>
      </div>
    </Provider>
  )
};
