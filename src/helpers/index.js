export const onSelectSong = (song, selectedSongs) => {
	if (song !== '' && selectedSongs === undefined) return song
	if (song !== '' && selectedSongs.indexOf(song) === -1) {
		return [...selectedSongs, song]
	} else return onRemoveSong(song, selectedSongs)
}

export const onRemoveSong = (removeSong, selectedSongs) => {
	return selectedSongs.filter((s) => s !== removeSong)
}
