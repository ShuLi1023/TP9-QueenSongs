import React from 'react'
import PropTypes from 'prop-types'

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

    DisplayList.propTypes = {
        selectedSongs: PropTypes.array.isRequired,
        onRemoveSong: PropTypes.func.isRequired,
    }

export default DisplayList