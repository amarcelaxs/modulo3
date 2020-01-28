import {createStore, compose, applyMiddleware} from 'redux' ; //função que inicializa  o redux  na aplicação
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

//importando os sagas
import sagas from './sagas';



const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

//const middlewares = [] ;
//variavelcriada 
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
//middlewares.push(sagaMiddleware);
const middlewares = [sagaMiddleware];


const composer = process.env.NODE_ENV === 'development'
? compose(
  applyMiddleware(...middlewares),
  console.tron.createEnhancer(),
)
//const store = createStore(reducers, ); // sera passado os reduces que são os carinhas que vão armazenar e mudar o estado do redux 
: applyMiddleware(...middlewares);
const store = createStore(reducers, composer);


sagaMiddleware.run(sagas);

export default store;


