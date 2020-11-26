import React from 'react'
import './App.css';
import DisplayList from './DisplayList';
import {allSongs} from './songs'
import SearchSong from "./SearchSong"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      songsList: allSongs,
      selectedSongs: [],
    }
  }

  onSelectSong = (song) => {
    if(song.length !== 0 && this.state.selectedSongs.indexOf(song) === -1) {
        this.setState({
          selectedSongs: [...this.state.selectedSongs, song]
        })
    }
  }

  onRemoveSong = (removeSong) => {
    const newList = this.state.selectedSongs.filter((s) => s !== removeSong)
    this.setState({selectedSongs: newList})
  }

  onClick = () => {
    alert('Selected songs:  ' + this.state.selectedSongs)
  }
  
  render() {
    return(
    <div className="App">
      <div>
      <img src='./images/logo.png' alt='logo'></img>
      </div>
      <div>
        <SearchSong songsList={this.state.songsList} onSelectSong={this.onSelectSong}/>
        <DisplayList selectedSongs={this.state.selectedSongs} onRemoveSong={this.onRemoveSong}/>
        <button className="valid-button" onClick={this.onClick}>Validate</button>
      </div>
    </div>
    )
  }
}

export default App;
