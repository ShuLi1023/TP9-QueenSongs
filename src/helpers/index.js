export const setSelectedSongs = (songs) => songs;
export const setUserInput = (input) => ({ userInput: input });
export const setValue = (value) => ({ value: value });

export const onSelectSong = (song, selectedSongs) => {
  if (song !== "" && selectedSongs.indexOf(song) === -1) {
    const selectedSongsList = [...selectedSongs, song];
    return setSelectedSongs(selectedSongsList);
  } else return onRemoveSong(song, selectedSongs);
};

export const onRemoveSong = (removeSong, selectedSongs) => {
  const newList = selectedSongs.filter((s) => s !== removeSong);
  return setSelectedSongs(newList);
};
