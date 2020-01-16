import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';




//o provider vai passar a informação sobre o estado do redux
const App = () =>(
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
