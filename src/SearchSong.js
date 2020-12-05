import React, {useEffect} from 'react'
import AutocompleteList from "./AutocompleteList"
import PropTypes from 'prop-types'
import Axios from 'axios'

const callApi = async (input) => {
  const response = await Axios.get(`http://localhost:8081/${input}`)
  return response.data
}

const SearchSong = ({selectedSongs, onRemoveSong, onSelectSong}) => {
  
  const [activeSong, setActiveSong] = React.useState(0)
  const [autocompleteSongsList, setAutocompleteSongsList] = React.useState([])
  const [showSongs, setShowSongs] = React.useState(false)
  const [userInput, setUserInput] = React.useState("")
  const [shouldCallApi, setShouldCallApi] = React.useState(false)

  useEffect(() => {
    async function updateData(){
        const songs = await callApi(userInput)
        setAutocompleteSongsList(songs)
        songs === 0 ?
        setShowSongs(false) : 
        setShowSongs(true)
        console.log("Songs list updated " + songs.length)
    }

    if(shouldCallApi && userInput !== ""){
      setShouldCallApi(false)
      updateData()
    }
  }, [userInput, shouldCallApi])

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

    setUserInput(e.target.value)
    console.log("User Input" + e.target.value)
    if(e.target.value !== ""){
      setShouldCallApi(true)
    }else{
      setShowSongs(false)
    }
    
    setActiveSong(0)
  };

  const onKeyDown = e => {
    switch(e.key){
      case 'Enter':
        if(autocompleteSongsList[activeSong])
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