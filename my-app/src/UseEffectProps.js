import React, { useEffect } from "react";
function UseEffectProps(props) {
    useEffect(() => {
        console.log("count is" + props.count);
    },[props.count])
    return(
        <>
            <h1>useEffect Hook count {props.count}</h1>
            <h1>useEffect Hook data {props.data}</h1>
        </>
    )
}
export default UseEffectProps;