import React, { Component } from 'react'
import MomoComp from './MomoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
    }
    
    componentDidMount(){
        setInterval(() => this.setState({
            name:'Vishwas'
        }),2000)
    }
    render() {
        console.log('Parent Comp Render')
        return (
            <div>
                Parent Comp
                <MomoComp name={this.state.name}/>
                {/* <RegularComp name = {this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
