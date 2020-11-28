import React from 'react'
import Song from './Song'

export default class AutocompleteList extends React.Component{


    onClick = e => {
      console.log("Clicked! " + e.target.innerText)

      if(this.props.selectedSongs.includes(e.target.innerText)){
        this.props.toggleSongSelected(e.target.innerText)
      }else{
        this.props.toggleSongSelected(e.target.innerText) 
      }
    }

    render(){
      
        if(this.props.userInput.length === 0 && !this.props.showSongs){
          console.log("False!")
          return null
        }


      return (this.props.showSongs  )  ?
        <ul className="options">
          { this.props.filteredSongs.map((song, index) => {
            let className = "",id = ""
            
            if(this.props.selectedSongs.includes(song)){
              console.log(song + "is selected")
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
          {console.log("Empty " + this.props.userInput + " | " + this.props.showSongs)}
          <li>No song with that name</li>
        </ul>
    }
    
}