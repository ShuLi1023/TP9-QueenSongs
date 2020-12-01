import React from 'react'
import Song from './Song'

const AutocompleteList = ({userInput, showSongs, autocompleteSongsList, selectedSongs, activeSong, toggleSongSelected}) => {

  const onClick = e => {
    if(selectedSongs.includes(e.target.innerText)){
      toggleSongSelected(e.target.innerText)
    }else{
      toggleSongSelected(e.target.innerText) 
    }
  }

  if(userInput.length === 0 && !showSongs){
    return null
  }
  return (showSongs  )  ?
    <ul className="options">
      { autocompleteSongsList.map((song, index) => {
        let className = "",id = ""

        if(selectedSongs.includes(song)){
          className += "option-selected "
        }

        if (index === activeSong) {
          className += "option-active"
          id += "active" 
        }
        return (
          <Song className={className} key={index} onClick={onClick} song={song} id={id}/>
        ) 
      })}
    </ul>
    :
    <ul>
      <li>No song with that name</li>
    </ul>
  }

export default AutocompleteList;