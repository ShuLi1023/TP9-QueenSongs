import { REMOVE_SONG } from '../actions'

export const songReducer = (state = {}, action) => {
	switch (action.type) {
		case REMOVE_SONG:
			return {
				selectedSongs: [],
			}

		default:
			return state
	}
}
