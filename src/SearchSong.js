import React from "react"
import AutocompleteList from "./AutocompleteList"

class SearchSong extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeSong: 0,
      filteredSongs: [],
      showSongs: false,
      userInput: ""
    }
  }

  onSongUnselected = (song) => {
    this.setState({
        filteredSongs: [],
        showSongs: false,
        userInput: "",
        activeSong: 0
      })

    this.props.onRemoveSong(song)
  }

  onSongSelected = (song) => {
      this.setState({
        filteredSongs: [],
        showSongs: false,
        userInput: "",
        activeSong: 0
      })

    this.props.onSelectSong(song)
  }

  onChange = e => {

    const { songsList } = this.props;
    const songSuggestions = songsList.filter( song => song.includes(e.target.value))
 
    this.setState({
      activeSong: 0,
      filteredSongs: songSuggestions,
      showSongs: true,
      userInput: e.target.value
    })
  };

  onKeyDown = e => {
    const {filteredSongs, activeSong} = this.state
    
    if (e.key === 'Enter') {
      this.onSongSelected(filteredSongs[activeSong])
    }

    else if (e.key === 'ArrowUp') {
      if (activeSong === 0) {
        return;
      }

      this.setState({ activeSong: activeSong - 1 });
    }

    else if (e.key === 'ArrowDown') {
      if (activeSong - 1 === filteredSongs.length) {
        return;
      }

      this.setState({ activeSong: activeSong + 1 });
    }
  }

  render() {

    return (
      <React.Fragment>
        <div className="autocomplete">
            <input
              type="text"
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              value={this.state.userInput}
              placeholder='Search songs'
            />
        </div>
        <AutocompleteList activeSong={this.state.activeSong} filteredSongs={this.state.filteredSongs} userInput={this.state.userInput} onSongUnselected = {this.onSongUnselected}
          showSongs={this.state.showSongs} selectedSongs = {this.props.selectedSongs}  onSongSelected = {this.onSongSelected} />
      </React.Fragment>
    )
  }
}

export default SearchSong;