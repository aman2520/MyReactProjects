import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }

        console.log('LifeCycleA Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedState')
        return null
    }


    componentDidMount(){
        console.log('LifeCycleA Did Mount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapSShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name: 'Changed'
        }
        )
        console.log('Changed state')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>ChangeState</button>
                <LifeCycleB/>                
            </div>
        )
    }
}

export default LifeCycleA
