import React from 'react';
import { render } from 'react-dom';

import model from './model'

import Game from './components/Game';

render(
  <Game store={model.store} present={model.present} />,
  document.getElementById('root')
);
