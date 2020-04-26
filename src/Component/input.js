import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        
        return (
           
            <span>
                <span className='hide'></span>
                <input  className='input' type='text' name={this.props.stt} onChange={(e) => this.props.change(e.target.name, e.target.value)}/>
            </span>
        )
    }
}
