import React, {Component} from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount(){
        // this.state.count = this.state.count + 1
        this.setState((prevStat) => ({
            count: prevStat.count+1
        }))
    }

    incrementFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render(){
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        ) 
    }
}

export default Counter