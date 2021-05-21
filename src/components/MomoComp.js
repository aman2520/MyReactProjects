import React from 'react'

function MomoComp({name}) {
    console.log('Regular MomoComp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MomoComp)
