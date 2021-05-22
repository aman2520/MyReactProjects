import React, { Component } from 'react'
import withCounter from './withCounter'

class Counter1 extends Component {

    render() {
        console.log('In Counter 1 render')
        return (
            <div>
                <button onClick={this.props.clickHandler}>Clicked {this.props.name} {this.props.count} times</button>
            </div>
        )
    }
}

export default withCounter(Counter1,4)
