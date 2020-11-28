import React from 'react'
import Song from './Song'

export default class AutocompleteList extends React.Component{


    onClick = e => {

      if(this.props.selectedSongs.includes(e.target.innerText)){
        this.props.toggleSongSelected(e.target.innerText)
      }else{
        this.props.toggleSongSelected(e.target.innerText) 
      }
    }

    render(){
      
        if(this.props.userInput.length === 0 && !this.props.showSongs){
          return null
        }


      return (this.props.showSongs  )  ?
        <ul className="options">
          { this.props.autocompleteSongsList.map((song, index) => {
            let className = "",id = ""
            
            if(this.props.selectedSongs.includes(song)){
              className += "option-selected "
            }

            if (index === this.props.activeSong) {
              className += "option-active"
              id += "active" 
            }
            return (
              <Song className={className} key={index} onClick={this.onClick} song={ song } id={id}/>
            ) 
          })}
        </ul>
        :
        <ul>
          <li>No song with that name</li>
        </ul>
    }
    
}