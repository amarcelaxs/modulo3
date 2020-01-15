import React from 'react';
import {Provider} from 'react-redux';
import './config/ReactotronConfig.js'

import store from './store';

import TodoList from './TodoList';

console.tron.log('testando');
//o provider vai passar a informação sobre o estado do redux
const App = () =>(
  <Provider store={store}>
    <TodoList />    
  </Provider>
);

export default App;
