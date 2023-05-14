import React from 'react'
function User(props) {
    return(
        <>
            <h3>I am user2</h3>
            <button onClick={() => props.data()}>call data function</button>
        </>
    )
}

export default User ;