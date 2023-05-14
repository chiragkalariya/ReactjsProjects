import React, { useEffect, useRef } from 'react'

const PrePropsWithHook = (props) => {
    let lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.count;
    })
    const previousProps = lastVal.current;
    return (
        <div>
            <h2>Previous props with hook</h2>
            <h3>Current Val : {props.count}</h3>
            <h4>Previous Val : {previousProps}</h4>
            <h3>Diff. : {props.count - previousProps}</h3>
        </div>
    )
}

export default PrePropsWithHook
