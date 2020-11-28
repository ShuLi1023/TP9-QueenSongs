import React from "react";

class SearchSong extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeSong: 0,
      filteredSongs: [],
      showSongs: false,
      userInput: ""
    };
  }

  onChange = e => {
    const { songsList } = this.props;
    const filteredSongs = songsList.filter( song => song.includes(e.target.value))
 
    this.setState({
      activeSong: 0,
      filteredSongs,
      showSongs: true,
      userInput: e.target.value
    });
  };

  onClick = e => {
    this.props.onSelectSong(e.target.innerText);
    this.setState({
      activeSong: 0,
      filteredSongs: [],
      showSongs: false,
      userInput: ''
    });
  };

  onKeyDown = e => {
    const { activeSong, filteredSongs } = this.state;
    
    if (e.key === 'Enter') {
      this.props.onSelectSong(filteredSongs[activeSong])
      this.setState({
        activeSong: 0,
        showSongs: false,
        userInput: ''
      });
    }

    else if (e.key === 'ArrowUp') {
      if (activeSong === 0) {
        return;
      }
      
      this.setState({ activeSong: activeSong - 1 });
      if(filteredSongs.length > 4){
        this.onScroll()
      }

    }

    else if (e.key === 'ArrowDown') {
      console.log(activeSong)
      if (activeSong + 1 === filteredSongs.length) {
        return;
      }

      this.setState({ activeSong: activeSong + 1 });
      if(activeSong > 1 && filteredSongs.length > 4){
        this.onScroll()
      }
      
    }
  };

  onScroll = () => {
    const elmnt = document.getElementById("active")
    elmnt.scrollIntoView()
  }

  render() {
    let songsListComponent;

    if (this.state.showSongs && this.state.userInput) {
      if (this.state.filteredSongs.length) {
        songsListComponent = (
          <ul class="options">
            { this.state.filteredSongs.map((song, index) => {
              let className, id;

              if (index === this.state.activeSong) {
                className = "option-active"
                id = "active"
              }

              return (
                <li className={className} key={index} onClick={this.onClick} id={id}>
                  { song }
                </li>
              );
            })}
          </ul>
        );
      } else {
        songsListComponent = (
          <div class="no-options">
            <em>Can not find! </em>
          </div>
        );
      }
    }

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
        {songsListComponent}
      </React.Fragment>
    );
  }
}

export default SearchSong;