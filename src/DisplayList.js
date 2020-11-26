import React from 'react'

class DisplayList extends React.Component{
    
    render() {
        return this.props.selectedSongs.length === 0 ? (
            <h2>No song selected</h2>
        ) : (
            <ul className='display'>
               {this.props.selectedSongs.map((song, index) => (
                   <li key={index} >
                    <span>{song}</span>
                    <button className='del-button' onClick={() => this.props.onRemoveSong(song)}></button>
                   </li>
               ))}
            </ul>
        )
    }
}

export default DisplayList