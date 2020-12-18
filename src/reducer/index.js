import { combineReducers } from 'redux'
import { songsReducer } from './songsReducer'
import inputReducer from './inputReducer'

const allReducers = combineReducers({
	songs: songsReducer,
	userInput: inputReducer,
})

export default allReducers
