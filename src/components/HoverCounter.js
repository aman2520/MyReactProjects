import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        console.log('In HoverCounter render')
        return (
            <div>
                <h2 onMouseOver={this.props.clickHandler}>Hover {this.props.name} {this.props.count} times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 5)
