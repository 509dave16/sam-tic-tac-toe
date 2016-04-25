import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import GameType from './../components/container/GameType';
import JoinGameForm from './../components/container/JoinGameForm';
import DevTools from './DevTools';


//   <App present={present} />
export default ({
  store,
  present
}) => (
<Provider store={store}>
  <div>
    <GameType present={present} />
    <JoinGameForm present={present} />
    <DevTools />
  </div>
</Provider>
)
