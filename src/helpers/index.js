export const setSelectedSongs = (songs) => ({ selectedSongs: songs })
export const setAutocompleteSongsList = (songs) => ({autocompleteSongsList : songs })
export const setUserInput = (input) => ({ userInput : input })
export const setValue = (value) => ({ value : value })

export const onSelectSong = (song) => {
	if (song !== '' && selectedSongs.indexOf(song) === -1) {
		const selectedSongsList = [...selectedSongs, song]
		setSelectedSongs(selectedSongsList)
	}
}

export const onRemoveSong = (removeSong) => {
	const newList = selectedSongs.filter((s) => s !== removeSong)
	setSelectedSongs(newList)
}
