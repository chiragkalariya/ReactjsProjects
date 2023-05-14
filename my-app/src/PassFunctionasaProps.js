import React from "react";
function PropsFunction(props) {
    return(
        <>
            <h1>Pass Function as a props</h1>
            <button onClick={props.data}>call data function</button>
        </>
    )
}
export default PropsFunction;