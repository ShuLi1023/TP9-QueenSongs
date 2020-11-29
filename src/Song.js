import React from 'react'

export default class Songs extends React.Component{
 

    render(){
        return <li className = {this.props.className}  onClick={this.props.onClick} id={this.props.id}>{this.props.song} </li>
    }
}
