import { all } from 'redux-saga/effects';


// o * indica uma função generator do javascript
export default function* rootSaga() {
  // um metodo pra lidar com varios reducers com varios sagas como um combiner//
  //o yield e um ponto para aplicação parar , mas tb e muito mais que isso
  yield all([

    

  ]);
}