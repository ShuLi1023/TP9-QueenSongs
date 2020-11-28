import React from "react"
import AutocompleteList from "./AutocompleteList"

class SearchSong extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeSong: 0,
      filteredSongs: this.props.songsList,
      showSongs: false,
      userInput: ""
    }
  }

  onSongUnselected = (song) => {
    this.setState({
        filteredSongs: this.props.songsList,
        showSongs: false,
        userInput: "",
        activeSong: 0
      })

    this.props.onRemoveSong(song)
  }

  onSongSelected = (song) => {
      this.setState({
        filteredSongs: this.props.songsList,
        showSongs: false,
        userInput: "",
        activeSong: 0
      })

    this.props.onSelectSong(song)
  }

  onChange = e => {

    const { songsList } = this.props;
    const songSuggestions = songsList.filter( song => song.toLowerCase().indexOf(this.state.userInput.toLowerCase()) > -1)
 
    this.setState({
      activeSong: 0,
      filteredSongs: songSuggestions,
      showSongs: true,
      userInput: e.target.value
    })
  };

  onKeyDown = e => {
    const {filteredSongs, activeSong} = this.state
    switch(e.key){
      case 'Enter':
        this.onSongSelected(filteredSongs[activeSong])
      break

      case 'ArrowUp':
        this.setState({ showSongs : true });
        if (activeSong === 0) {
          return;
        }
        this.setState({ activeSong: activeSong - 1 });
      break

      case 'ArrowDown' :
        this.setState({ showSongs : true });
        if (activeSong + 1 === filteredSongs.length) {
          return;
        }
        this.setState({ activeSong: activeSong + 1 });
        if(activeSong > 1 && filteredSongs.length > 4){
        this.onScroll()
      }
      break;

      case 'Escape' :
        this.setState({showSongs: false})
        break;

      default:

    }
  }
  onScroll = () => {
    const elmnt = document.getElementById("active")
    elmnt.scrollIntoView()
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