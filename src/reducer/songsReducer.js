import { allSongs } from '../songs'

export default songReducer = (state = [], action) => {
	switch (action.type) {
		/*
        case GET_ALL_SONGS:
            return{
                allSongs
            }
		*/
		case REMOVE_SONG:
			return state.filter((s) => s !== action.payload)

		default:
			return state
	}
}
