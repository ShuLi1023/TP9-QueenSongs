import React from 'react'

class SongList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedSongs: []
        }
    }

    
    onSongSelect(song){
        this.setState({ selectedSongs: [...this.state.selectedSongs, song]})
    }

    onClick = () => {
        this.props.onDisplaySongs(this.state.selectedSongs)
        this.setState({ selectedSongs: ''})
    }

    render(){
        const list = this.props.songsList.map((song,index) => {
            return(
                <li key={index}>
                    <input type='checkbox' onChange={() => this.onSongSelect(song)}/>
                    <span>{song}</span>
                </li>
            )
        })
        return(
            <div>
                <div className='col-6'>
                    {list}
                </div>
                <div>
                    <button onClick={this.onClick}>Display</button>
                </div>
            </div>
        )
    }
}

export default SongList