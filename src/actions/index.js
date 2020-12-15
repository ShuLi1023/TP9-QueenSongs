export const REMOVE_SONG = 'REMOVE_SONG'
export const SET_SELECTED_SONGS = 'SET_SELECTED_SONGS'
export const SET_AUTOCOMPLETE_LIST = 'SET_AUTOCOMPLETE_LIST'
export const SET_USER_INPUT = 'SET_USER_INPUT'
export const SET_VALUE = 'SET_VALUE'


export const removeSongActionCreator = (song) => ({
	type: REMOVE_SONG,
	payload: song,
})

export const setSelectedSongsActionCreator = (songs) => ({
	type: SET_SELECTED_SONGS,
	payload: songs,
})

export const setAutocompleteSongsListActionCreator = (songs) => ({
	type: SET_AUTOCOMPLETE_LIST,
	payload: songs,
})
export const setUserInputActionCreator = (input) => ({
	type: SET_USER_INPUT,
	payload: input,
})

export const setValueActionCreator = (value) => ({
	type: SET_VALUE,
	payload: value,
})
