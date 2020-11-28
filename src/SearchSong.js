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
    }

    else if (e.key === 'ArrowDown') {
      if (activeSong - 1 === filteredSongs.length) {
        return;
      }

      this.setState({ activeSong: activeSong + 1 });
    }
  };

  render() {
    let songsListComponent;

    if (this.state.showSongs && this.state.userInput) {
      if (this.state.filteredSongs.length) {
        songsListComponent = (
          <ul class="options">
            { this.state.filteredSongs.map((song, index) => {
              let className;

              if (index === this.state.activeSong) {
                className = "option-active";
              }

              return (
                <li className={className} key={index} onClick={this.onClick}>
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