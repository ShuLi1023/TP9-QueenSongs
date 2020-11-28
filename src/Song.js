import React from 'react'

export default class Songs extends React.Component{
    
    constructor(){
        super()
    }

    onClick = e => {
    this.props.onSelectSong(e.target.innerText);
    this.setState({
      activeSong: 0,
      filteredSongs: [],
      showSongs: false,
      userInput: ''
    })
  }  

    render(){
        return <li key = {index}  className = {this.props.className}  onClick={this.onClick}>{this.props.song}</li>
    }
}
