import React from 'react'
import './App.css';
import DisplayList from './DisplayList';
import SongList from './SongList'
import {allSongs} from './songs'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      songsList: allSongs,
      selectedSongs: [],
    }
  }

  onDisplaySongs = (songs) => {
    if(songs.length !== 0) {
        this.setState({
          selectedSongs: [...this.state.selectedSongs, songs]
          
        })
    }
  }

  onRemoveSong = (removeSong) => {
    const newList = this.state.selectedSongs.filter((s) => s !== removeSong)
    this.setState({selectedSongs: newList})
  }
  
  render() {
    console.log(this.state.selectedSongs)
    console.log(this.state.songsList)
    return(
    <div className="App">
      <div>
        <h1>Queen Songs</h1>
        <SongList songsList={this.state.songsList} onDisplaySongs={this.onDisplaySongs}/>
        <DisplayList selectedSongs={this.state.selectedSongs} onRemoveSong={this.onRemoveSong}/>
        
      </div>
    </div>
    )
  }
}

export default App;
