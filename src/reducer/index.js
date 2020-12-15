import { combineReducers } from 'redux'

import songReducer from './songsReducer'
import inputReducer from './inputReducer'

export default allReducers = combineReducers({
	selectedSongs: songReducer,
	userInput: inputReducer,
})
