import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Aman1</h1>
    //     </div>
    // )

    return React.createElement('div', {id: 'hello'}, React.createElement('h1',null,'Hello AMan1'))
}

export default Hello