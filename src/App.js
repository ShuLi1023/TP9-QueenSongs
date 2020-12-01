import React from 'react'
import './App.css';
import DisplayList from './DisplaySelectedList';
import {allSongs} from './songs'
import SearchSong from "./SearchSong"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      songsList: allSongs,
      selectedSongs: []
    }
  }

  onSelectSong = (song) => {
    if(song !== "" && this.state.selectedSongs.indexOf(song) === -1) {
        this.setState({
          selectedSongs: [...this.state.selectedSongs, song]
        })
    }
  }

  onRemoveSong = (removeSong) => {
    const newList = this.state.selectedSongs.filter((s) => s !== removeSong)
    this.setState({
      selectedSongs: newList
    })
  }

  validate = () => {
    if(this.state.selectedSongs.length === 0){
      alert("No Songs Selected!")
    }else{
      alert("Selected songs: " + this.state.selectedSongs)
    }
  }
  
  render() {
    return(
    <div className="App">
      <div>
      <img src='./images/logo.png' alt='logo'></img>
      </div>
      <div>
        <SearchSong songsList = {this.state.songsList}  selectedSongs = {this.state.selectedSongs} onSelectSong = {this.onSelectSong} onRemoveSong={this.onRemoveSong} />
        <DisplayList selectedSongs={this.state.selectedSongs} onRemoveSong={this.onRemoveSong}/>

        <button className="valid-button" onClick={this.validate}>Validate</button>
      </div>
    </div>
    )
  }
}

export default App;
