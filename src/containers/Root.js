import React from 'react';
import {Provider} from 'react-redux';
import GameType from './../components/container/GameType';
import JoinGameForm from './../components/container/JoinGameForm';
import StatusLabels from './../components/container/StatusLabels';
import GameBoard from './../components/container/GameBoard';
import GameButtons from './../components/container/GameButtons';
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
        <GameButtons present={present}/>
        <DevTools />
      </div>
    </Provider>
  )
};
