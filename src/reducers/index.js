//STORE
import currentCityReducer from './CurrentCity';
import favoritesReducer from './Favorites'; 
import screenReducer from './Screen'; 

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    currentCity: currentCityReducer,
    favorites :favoritesReducer,
    screen : screenReducer,
})

export default allReducers
