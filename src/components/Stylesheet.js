import React from 'react'
import './myStyle.css'

function Stylesheet({primary}) {
    let className = primary ? 'primary':''
    return (
        <div>
            <h1 className={`{className} font-xl`}>StyleSheets</h1>
        </div>
    )
}

export default Stylesheet
