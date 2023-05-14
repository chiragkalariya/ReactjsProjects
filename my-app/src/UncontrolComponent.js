import React,{ useRef } from 'react'

const UncontrolComponent = () => {
    let inputRef = useRef(null);
    let inputRefTwo = useRef(null);
    
    function submitForm(e) {

        e.preventDefault();
        console.log("input field one value " + inputRef.current.value);
        console.log("input field one value " + inputRefTwo.current.value);
        let input3 = document.getElementById("input3").value
        console.log("input field one value " + input3);
    }
    return (
        <>
            <h2>Uncontrol Component</h2>
            <form action="" onSubmit={submitForm}>
                <input type="text" ref={inputRef} /><br /><br />
                <input type="text" ref={inputRefTwo} /><br /><br />
                <input type="text" id='input3' /><br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default UncontrolComponent;
