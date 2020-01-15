import {createStore, compose, applyMiddleware} from 'redux' ; //função que inicializa  o redux  na aplicação
import reducers from './reducers';

const composer = process.env.NODE_ENV === 'development'
? compose(
  applyMiddleware(...[]),
  console.tron.createEnhancer(),
)
//const store = createStore(reducers, ); // sera passado os reduces que são os carinhas que vão armazenar e mudar o estado do redux 
: applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;


