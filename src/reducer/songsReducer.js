import { allSongs } from '../songs'

const songReducer = (state = allSongs, action) => {
	switch (action.type) {
		case 'REMOVE_SONG':
			return state.filter((s) => s !== action.payload)

		default:
			return state
	}
}
export default songReducer;