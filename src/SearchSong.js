import React from "react"
import AutocompleteList from "./AutocompleteList"

class SearchSong extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeSong: 0,
      autocompleteSongsList: this.props.songsList,
      showSongs: false,
      userInput: ""
    }
  }


  toggleSongSelected = (song) => {

    if(this.props.selectedSongs.includes(song)){
        this.props.onRemoveSong(song)
    }else{
        this.props.onSelectSong(song) 
    }

    this.setState({
        autocompleteSongsList: this.props.songsList,
        showSongs: false,
        userInput: "",
        activeSong: 0
    })
  }

  onChange = e => {

    const { songsList } = this.props;
    const songSuggestions = songsList.filter( song => song.toLowerCase().includes(e.target.value.toLowerCase()) )
    this.setState({
      activeSong: 0,
      autocompleteSongsList: songSuggestions,
      showSongs: true,
      userInput: e.target.value
    })
    if(songSuggestions.length === 0){ this.setState({showSongs: false}) }

  };

  onKeyDown = e => {
    const {autocompleteSongsList, activeSong} = this.state
    switch(e.key){
      case 'Enter':
        this.toggleSongSelected(autocompleteSongsList[activeSong])
      break

      case 'ArrowUp':
        this.setState({ showSongs : true });
        if (activeSong === 0) {
          return;
        }
        this.setState({ activeSong: activeSong - 1 });
        if(activeSong > 1 && autocompleteSongsList.length > 4){
            this.onScroll(false)
        }
      break

      case 'ArrowDown' :
        this.setState({ showSongs : true });
        if (activeSong + 1 === autocompleteSongsList.length) {
          return;
        }
        this.setState({ activeSong: activeSong + 1 });
        if(activeSong > 1 && autocompleteSongsList.length > 4){
          this.onScroll(true)
        }
      break;

      case 'Escape' :
        this.setState({showSongs: false, activeSong: 0})
        break;

      default:

    }
  }
  onScroll = (scroll) => {
    const elmnt = document.getElementById("active")
    if(elmnt !== null){  elmnt.scrollIntoView(scroll) }
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
            <AutocompleteList activeSong={this.state.activeSong} autocompleteSongsList={this.state.autocompleteSongsList} userInput={this.state.userInput}
              showSongs={this.state.showSongs} selectedSongs = {this.props.selectedSongs}  toggleSongSelected = {this.toggleSongSelected} />
        </div>
        
      </React.Fragment>
    )
  }
}

export default SearchSong;