import React, { Component } from 'react'

class Person extends Component {

    render() {
        return (
            <div>
               <h2>Person id is : {this.props.person.id} with name : {this.props.person.name} with age : {this.props.person.age}</h2> 
            </div>
        )
    }
}

export default Person
