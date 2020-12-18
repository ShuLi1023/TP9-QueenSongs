export const SET_SONGS = 'SET_SONGS'
export const REMOVE_SONG = 'REMOVE_SONG'
export const SET_SELECTED_SONGS = 'SET_SELECTED_SONGS'
export const SET_USER_INPUT = 'SET_USER_INPUT'
export const SET_VALUE = 'SET_VALUE'

export const setSongsActionCreator = (songsList) => ({
	type: SET_SONGS,
	payload: songsList,
})

export const removeSongActionCreator = (song) => ({
	type: REMOVE_SONG,
	payload: song,
})

export const setSelectedSongsActionCreator = (song) => ({
	type: SET_SELECTED_SONGS,
	payload: song,
})

export const setUserInputActionCreator = (input) => ({
	type: SET_USER_INPUT,
	payload: input,
})

export const setValueActionCreator = (value) => ({
	type: SET_VALUE,
	payload: value,
})
