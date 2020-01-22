import {combineReducers} from 'redux';

//importar o reducers que foi criado FAVORITES
import favorites from './favorites';

export default combineReducers({
 favorites,
});