import React, { useRef } from 'react';

const UseRefinfunction = () => {
    let inputRef = useRef();
    function handleInput() {
        console.log(inputRef);
        inputRef.current.focus();
    }
    return (
        <>
            <h2>useRef in Function Component</h2>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Change Ref</button>
        </>
    )
}

export default UseRefinfunction;
