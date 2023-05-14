import React, { useState } from "react";
import UseEffectProps from "./UseEffectProps";
function HookUseEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(108);
    // useEffect(() => {
    //     alert("useeffect count" + count);
    // },[count])
    // useEffect(() => {
    //     console.log("useeffect Data" + data);
    // },[data])
    return(
        <>
            <UseEffectProps count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <button onClick={() => setData(data + 1)}>Update Data</button>
        </>
    )
}
export default HookUseEffect;