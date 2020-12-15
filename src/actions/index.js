export const GET_ALL_SONGS = 'GET_ALL_SONGS'
export const REMOVE_SONG = 'REMOVE_SONG'
export const SET_SELECTED_SONGS = 'SET_SELECTED_SONGS'
export const SET_ACTIVE_SONG = 'SET_ACTIVE_SONG'
export const SET_AUTOCOMPLETE_LIST = 'SET_AUTOCOMPLETE_LIST'
export const SET_USER_INPUT = 'SET_USER_INPUT'
export const SET_SHOULD_CALL_API = 'SET_SHOULD_CALL_API'
export const SET_VALUE = 'SET_VALUE'

export const getAllSongsActionCreator = () => ({
	type: GET_ALL_SONGS,
})

export const removeSongActionCreator = (song) => ({
	type: REMOVE_SONG,
	payload: song,
})

export const setSelectedSongsActionCreator = (songs) => ({
	type: SET_SELECTED_SONGS,
	payload: songs,
})
export const setActiveSongActionCreator = (song) => ({
	type: SET_ACTIVE_SONG,
	payload: song,
})
export const setAutocompleteSongsListActionCreator = (songs) => ({
	type: SET_AUTOCOMPLETE_LIST,
	payload: songs,
})
export const setUserInputActionCreator = (input) => ({
	type: SET_USER_INPUT,
	payload: input,
})
export const setShouldCallApiActionCreator = (value) => ({
	type: SET_SHOULD_CALL_API,
	payload: value,
})
export const setValueActionCreator = (value) => ({
	type: SET_VALUE,
	payload: value,
})
