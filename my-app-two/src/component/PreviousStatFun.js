import React, { useState } from 'react'

const PreviousStatFun = () => {
    const [count, setCount] = useState(0);
    function updateNum() {
        setCount((pre) => {
            let num = Math.floor(Math.random() * 10)
            console.log(pre);
            return num;
        })
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={updateNum}>Update num</button>
        </div>
    )
}

export default PreviousStatFun;
