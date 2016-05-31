import React from 'react';
import { render } from 'react-dom';

import initEngine from 'tic-tac-toe-engine';
const engine = initEngine("https://tic-tac-toe-redux-sam.firebaseio.com");

import Game from './components/Game';

render(
  <Game store={engine.store} actions={engine.actions} />,
  document.getElementById('root')
);