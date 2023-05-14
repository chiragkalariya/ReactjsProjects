import React, { useState, useRef } from 'react'

function HocComponent() {
    return (
        <>
            <h1>HOC component</h1>
            <HocRed cmp={Counter} />
            <HocGreen cmp={Counter} />
            <HocBlue cmp={Counter} />
        </>
    )
}
function HocRed(props) {
    return <h2 style={{backgroundColor: "red", width: 150}}>Red : <props.cmp /></h2>
}
function HocGreen(props) {
    return <h2 style={{backgroundColor: "green", width: 150}}>Green : <props.cmp /></h2>
}
function HocBlue(props) {
    return <h2 style={{backgroundColor: "blue", width: 150}}>Blue : <props.cmp /></h2>
}
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </>
    )
}

export default HocComponent;
