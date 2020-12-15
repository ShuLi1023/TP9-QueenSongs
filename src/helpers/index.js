export const setSelectedSongs = (songs) => ({ selectedSongs: songs })

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
