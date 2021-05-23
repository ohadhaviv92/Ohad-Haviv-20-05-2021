//STORE
import currentCityReducer from './CurrentCity';
import favoritesReducer from './Favorites';
import screenReducer from './Screen';
import unitReducer from './Unit';

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    currentCity: currentCityReducer,
    favorites: favoritesReducer,
    screen: screenReducer,
    unit: unitReducer,
})

export default allReducers
