import React from 'react';
import { render } from 'react-dom';

import initEngine from 'tic-tac-toe-engine';

const config = {
  apiKey: "AIzaSyDw4ZYqDnT9cR9P4dwH4YQJcBsiczULtOo",
  authDomain: "tic-tac-toe-redux-sam.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-redux-sam.firebaseio.com",
  storageBucket: "tic-tac-toe-redux-sam.appspot.com"
};

const engine = initEngine(config);

import Game from './components/Game';

render(
  <Game store={engine.store} actions={engine.actions} />,
  document.getElementById('root')
);