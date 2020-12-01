import React from 'react'

const DisplayList = ({selectedSongs, onRemoveSong }) => {
    
        return selectedSongs.length === 0 ? (
            <h2>No song selected</h2>
        ) : (
            <ul className='display'>
                {selectedSongs.map((song, index) => (
                    <li key={index} >
                        <span>{song}</span>
                        <button className='del-button' onClick={() => onRemoveSong(song)}></button>
                    </li>
               ))}
            </ul>
        )
    }

export default DisplayList