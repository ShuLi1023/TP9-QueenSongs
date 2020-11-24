import React from 'react'

class DisplayList extends React.Component{
    
    render() {
        return this.props.selectedSongs.length === 0 ? (
            <h2>No song selected</h2>
        ) : (
            <ul>
               {this.props.selectedSongs.map((song, index) => (
                   <li key={index}>
                    <span>{song}</span>
                    <button onClick={() => this.props.onRemoveSong(song)}>Del</button>
                   </li>
               ))}
            </ul>
        )
    }
}

export default DisplayList