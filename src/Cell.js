import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = { color: props.value } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    updateColor = () => {
        this.setState({ color: '#333'});
    }

    render () {
        return (
            <div onClick={this.updateColor} style={{backgroundColor: this.state.color}} className="cell"></div>
        )
    }
}