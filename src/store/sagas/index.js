import { all, takeLatest } from 'redux-saga/effects';

import {addFavorite} from './favorites';


// o * indica uma função generator do javascript
export default function* rootSaga() {
  // um metodo pra lidar com varios reducers com varios sagas como um combiner//
  //o yield e um ponto para aplicação parar , mas tb e muito mais que isso
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite),
    //se tiver uma requisição  naquele momento ele cancela e pega sempre a ultima requesição adicionando apenas uma 
    
    

  ]);
}