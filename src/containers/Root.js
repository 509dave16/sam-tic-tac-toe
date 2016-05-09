import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import GameType from './../components/container/GameType';
import JoinGameForm from './../components/container/JoinGameForm';
import StatusLabels from './../components/container/StatusLabels';
import GameBoard from './../components/container/GameBoard'
import DevTools from './DevTools';

export default ({
  store,
  present
}) => {
  return (
    <Provider store={store}>
      <div>
        <GameType present={present} buttons={['Host Game', 'Join Game', 'Local Game']}/>
        <JoinGameForm present={present}/>
        <StatusLabels />
        <GameBoard present={present}/>
        <DevTools />
      </div>
    </Provider>
  )
};
