import React from 'react'
function Member(props) {
    return(
        <>
            <h3>I am Member2</h3>
            <button onClick={() => props.data()}>call data function</button>
        </>
    )
}

export default Member ;