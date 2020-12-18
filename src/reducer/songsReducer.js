import { onSelectSong, onRemoveSong } from '../helpers'
import { setSongsActionCreator } from '../actions'
import Axios from 'axios'

const defaultState = {
	songsList: [],
	selectedSongs: [],
	value: null,
}
export const songsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			return {
				...state,
				songsList: action.payload,
			}
		case 'SET_SELECTED_SONGS':
			return {
				...state,
				selectedSongs: onSelectSong(action.payload, state.selectedSongs),
			}
		case 'REMOVE_SONG':
			return {
				...state,
				selectedSongs: onRemoveSong(action.payload, state.selectedSongs),
			}
		default:
			return state
	}
}

export const getSongs = () => async (dispatch, getState) => {
	const response = await Axios.get('http://localhost:8081/songs')
	dispatch(setSongsActionCreator(response.data))
}
