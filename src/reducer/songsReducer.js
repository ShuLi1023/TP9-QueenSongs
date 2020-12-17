import {onSelectSong} from '../helpers'
import {onRemoveSong} from '../helpers'
import { allSongs } from '../songs'
const defaultState = {
	allSongs : allSongs,
	selectedSongs: [],
	value: null
}
const songsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_SELECTED_SONGS':
			return {
				...state,
				selectedSongs: onSelectSong(action.payload, state.selectedSongs),
			}
		case 'REMOVE_SONG':
			return {
				...state,
				selectedSongs: onRemoveSong(action.payload, state.selectedSongs)
			}
		
		default:
			return state
	}
}

export default songsReducer