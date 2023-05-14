import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(3);
    console.log(count);
    const multicountMemo = useMemo (function test() {
        console.log("update multi count");
        return count * 10;
    }, [count])
    return (
        <>
            <h1>Use memo Hook</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update count</button>

            <h2>test : {multicountMemo}</h2>            

            <h3>{item}</h3>
            <button onClick={() => setItem(item * 2)}>Update item</button>
        </>
    )
}

export default UseMemo;
