import React from 'react'

export default class Songs extends React.Component{
 

    render(){
        return <li className = {this.props.className}  onClick={this.props.onClick}>{this.props.song}</li>
    }
}
