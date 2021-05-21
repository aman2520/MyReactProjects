import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['A','B','C']
    const persons = [
        {
            id : 1,
            name : 'Aman',
            age : 24
        },
        {
            id : 2,
            name : 'Ansh',
            age : 15
        },
        {
            id : 3,
            name : 'kalyan',
            age : 45
        }
    ]

    const nameList = names.map(name=><h2>{name}</h2>)
    const personList = persons.map(person=><Person key={person.id} person={person}></Person>)
    return (
        <div>{nameList}</div>
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>
        // <div>
        // {
        //     names.map(name=><h2>{name}</h2>)
        // }
        // </div>
    )
}

export default NameList
