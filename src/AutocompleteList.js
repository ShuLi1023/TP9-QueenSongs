import React from 'react'
import Song from './Song'

export default class AutocompleteList extends React.Component{


    onClick = e => {
      console.log("Clicked! " + e.target.innerText)

      if(this.props.selectedSongs.includes(e.target.innerText)){
        this.props.onSongUnselected(e.target.innerText)
      }else{
        this.props.onSongSelected(e.target.innerText);
      }
    }

    render(){
      let songsListComponent = null
      console.log("Rendering songs list " + this.props.showSongs)
      if (this.props.showSongs && this.props.userInput) {
        if (this.props.filteredSongs.length) {
          songsListComponent = ( 
            <ul className="options">
              { this.props.filteredSongs.map((song, index) => {
                let className = ""
                
                if(this.props.selectedSongs.includes(song)){
                  console.log(song + "is selected")
                  className += "option-selected "
                }

                if (index === this.props.activeSong) {
                  className += "option-active";
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
            <div className="no-options">
              <em>Can not find! </em>
            </div>
          );
        }
      }
    return songsListComponent
    }
}