import React from "react"
import './App.css';
import DisplayList from './DisplaySelectedList';

import SearchSong from "./SearchSong"
import PropTypes from 'prop-types'

const App = () => {

  const [selectedSongs, setSelectedSongs] = React.useState([])


  const onSelectSong = (song) => {
    if(song !== "" && selectedSongs.indexOf(song) === -1) {
      const selectedSongsList = [...selectedSongs, song]
      setSelectedSongs(selectedSongsList)
    }
  }

  const onRemoveSong = (removeSong) => {
    const newList = selectedSongs.filter((s) => s !== removeSong)
    setSelectedSongs(newList)

  }

  const validate = () => {
    if(selectedSongs.length === 0){
      alert("No Songs Selected!")
    }else{
      alert("Selected songs: " + selectedSongs)
    }
  }
  
  return(
    <div className="App">
      <div>
      <img src='./images/logo.png' alt='logo'></img>
      </div>
      <div>
        <SearchSong selectedSongs = {selectedSongs} onSelectSong = {onSelectSong} onRemoveSong={onRemoveSong} />
        <DisplayList selectedSongs={selectedSongs} onRemoveSong={onRemoveSong}/>

        <button className="valid-button" onClick={validate}>Validate</button>
      </div>
    </div>
  )
}

App.ProtoTypes = {
  selectedSongs: PropTypes.array.isRequired
}

export default App;
