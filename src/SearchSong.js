import React from "react"
import AutocompleteList from "./AutocompleteList"

const SearchSong = ({selectedSongs, onRemoveSong, onSelectSong, songsList}) => {
  const [activeSong, setActiveSong] = React.useState(0)
  const [autocompleteSongsList, setAutocompleteSongsList] = React.useState(songsList)
  const [showSongs, setShowSongs] = React.useState(false)
  const [userInput, setUserInput] = React.useState("")

  const toggleSongSelected = (song) => {
    if(selectedSongs.includes(song)){
        onRemoveSong(song)
    }else{
        onSelectSong(song) 
    }

    setAutocompleteSongsList(songsList)
    setShowSongs(false)
    setUserInput("")
    setActiveSong(0)
    
  }

  const onChange = e => {
    const songSuggestions = songsList.filter( song => song.toLowerCase().includes(e.target.value.toLowerCase()) )
    
    setAutocompleteSongsList(songSuggestions)
    setShowSongs(true)
    setUserInput(e.target.value)
    setActiveSong(0)
  };

  const onKeyDown = e => {
    switch(e.key){
      case 'Enter':
        toggleSongSelected(autocompleteSongsList[activeSong])
      break

      case 'ArrowUp':
        setShowSongs(true)
        if (activeSong === 0) {
          return;
        }
        console.log(this.state.activeSong)
        setActiveSong(activeSong - 1)
        if(activeSong > 1 && autocompleteSongsList.length > 4){
            onScroll(false)
        }
      break

      case 'ArrowDown' :
        setShowSongs(true)
        if (activeSong + 1 === autocompleteSongsList.length) {
          return;
        }
        setActiveSong(activeSong + 1)
        if(activeSong > 1 && autocompleteSongsList.length > 4){
          onScroll(true)
        }
      break;

      case 'Escape' :
        setShowSongs(false)
        break;

      default:

    }
  }
  const onScroll = (Boolean) => {
    const elmnt = document.getElementById("active")
    elmnt.scrollIntoView(Boolean)
  }

  return (
    <React.Fragment>
      <div className="autocomplete">
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder='Search songs'
          />
          <AutocompleteList activeSong={activeSong} autocompleteSongsList={autocompleteSongsList} userInput={userInput}
            showSongs={showSongs} selectedSongs = {selectedSongs}  toggleSongSelected = {toggleSongSelected} />
      </div>
      
    </React.Fragment>
  )
}

export default SearchSong;