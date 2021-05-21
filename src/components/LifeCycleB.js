import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }

        console.log('LifeCycleB Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedState')
        return null
    }


    componentDidMount(){
        console.log('LifeCycleB Did Mount')
    }

    
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapSShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
