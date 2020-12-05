import React, {useEffect} from 'react'
import AutocompleteList from "./AutocompleteList"
import PropTypes from 'prop-types'
import Axios from 'axios'

const callApi = async (input, setSongs) => {
  const response = await Axios.get(`http://localhost:8081/${input}`)
  setSongs(response.data)
}


const SearchSong = ({selectedSongs, onRemoveSong, onSelectSong}) => {
  
  const [activeSong, setActiveSong] = React.useState(0)
  const [autocompleteSongsList, setAutocompleteSongsList] = React.useState([])
  const [showSongs, setShowSongs] = React.useState(false)
  const [userInput, setUserInput] = React.useState("")

  const setSongs = (songs) => {
    console.log("Autocomplete songs list updated : " + songs.length)
    setAutocompleteSongsList(songs)
  }

  useEffect(() => {
    if(userInput !== ""){
      callApi(userInput, setSongs)
      setShowSongs(true)
    }
  }, [userInput])
  

  const toggleSongSelected = (song) => {
    if(selectedSongs.includes(song)){
        onRemoveSong(song)
    }else{
        onSelectSong(song) 
    }

    setAutocompleteSongsList([])
    setShowSongs(false)
    setUserInput("")
    setActiveSong(0)
    
  }

  const onChange = e => {
    //const songSuggestions = songsList.filter( song => song.toLowerCase().includes(e.target.value.toLowerCase()) )
    
    setUserInput(e.target.value)
    setActiveSong(0)
    autocompleteSongsList.length === 0 ?
      setShowSongs(false) : 
      setShowSongs(true)
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
        setActiveSong(0)
        break;

      default:

    }
  }
  const onScroll = (Boolean) => {
    const elmnt = document.getElementById("active")
    if(elmnt !== null){  elmnt.scrollIntoView(Boolean) }
  }

  return (
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
  )
}

SearchSong.propTypes = {
  selectedSongs: PropTypes.array.isRequired,
  onRemoveSong: PropTypes.func.isRequired,
  onSelectSong: PropTypes.func.isRequired
}

export default SearchSong;