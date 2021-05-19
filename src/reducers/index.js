//STORE
import currentCityReducer from './CurrentCity'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    currentCity: currentCityReducer,
})

export default allReducers
