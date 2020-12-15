import { combineReducers } from 'redux'

import songReducer from './songsReducer'
import inputReducer from './inputReducer'

 const allReducers = combineReducers({
	selectedSongs: songReducer,
	userInput: inputReducer,
})
export default allReducers;