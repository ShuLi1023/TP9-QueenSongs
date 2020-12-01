import React from 'react'

const Songs = ({className, onClick, id, song }) => {
 
    return <li className = {className}  onClick={onClick} id={id}>{song} </li>
    
}

export default Songs
