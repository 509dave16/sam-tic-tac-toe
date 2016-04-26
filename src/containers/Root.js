import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import GameType from './../components/container/GameType';
import JoinGameForm from './../components/container/JoinGameForm';
import StatusLabels from './../components/container/StatusLabels';
import Grid from './../components/container/Grid';
import DevTools from './DevTools';

export default ({
  store,
  present
}) => {
  return (
    <Provider store={store}>
      <div>
        <GameType present={present}/>
        <JoinGameForm present={present}/>
        <StatusLabels />
        <Grid present={present}/>
        <DevTools />
      </div>
    </Provider>
  )
};
