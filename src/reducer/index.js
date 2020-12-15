import {allSongs} from '../songs'

export const songReducer = (state = [], action) => {
	switch (action.type) {

        case GET_ALL_SONGS:
            return{
                allSongs
            }

		case REMOVE_SONG:
			const list = state
			return {
				list.filter( (s) => s !== action.payload )
			}

		default:
			return state
	}
}
